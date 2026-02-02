const steps = [
  {
    number: "01",
    title: "Upload Your Photo",
    description:
      "Simply drag and drop your photo or click to browse. We support JPG, PNG, and WEBP formats up to 20MB.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Choose Your Style",
    description:
      "Browse our collection of 50+ AI filters. From artistic masterpieces to surreal effects, find the perfect transformation.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    gradient: "from-primary-500 to-purple-500",
  },
  {
    number: "03",
    title: "Customize & Preview",
    description:
      "Fine-tune the intensity and parameters. Preview your transformation in real-time before finalizing.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    gradient: "from-accent-500 to-pink-500",
  },
  {
    number: "04",
    title: "Download & Share",
    description:
      "Download your creation in high resolution. Share directly to social media or save to your device.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your photos in four simple steps. No design skills required.
          </p>
        </div>

        {/* Steps - Horizontal Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 via-primary-500 via-accent-500 to-green-500 opacity-30" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className={`w-[120px] h-[120px] rounded-2xl bg-gradient-to-br ${step.gradient} p-[2px] transition-transform duration-300 group-hover:scale-105`}>
                      <div className="w-full h-full rounded-2xl bg-[#0a0a14] flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={step.icon}
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Step Number Badge */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                      {index + 1}
                    </div>
                    {/* Glow */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
