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

    const data = await response.json().catch(() => ({}));
    console.log("Resend response:", response.status, JSON.stringify(data));

    if (!response.ok) {
      console.error("Resend API error:", response.status, data);

      if (response.status === 409 || data?.name === "validation_error") {
        // Already subscribed
        return NextResponse.json(
          { message: "Already subscribed", alreadySubscribed: true },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: data?.message || "Failed to subscribe" },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed", data },
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
