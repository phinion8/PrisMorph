import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

    if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
      console.error("Resend credentials not configured");
      return NextResponse.json(
        { error: "Newsletter service not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Resend API error:", errorData);

      if (response.status === 409) {
        // Already subscribed
        return NextResponse.json(
          { message: "Already subscribed", alreadySubscribed: true },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
