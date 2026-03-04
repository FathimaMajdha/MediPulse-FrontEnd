export default function Working() {
    const steps = [
        {
            number: "01",
            title: "Sign Up & Onboard",
            description: "Create your account and complete your practice profile in minutes. Import existing patient data seamlessly.",
            icon: "📝",
            color: "from-blue-500 to-blue-600"
        },
        {
            number: "02",
            title: "Configure Your Workflow",
            description: "Customize templates, set up your schedule, and integrate with labs and pharmacies in your area.",
            icon: "⚙️",
            color: "from-green-500 to-green-600"
        },
        {
            number: "03",
            title: "Start Seeing Patients",
            description: "Begin documenting visits, prescribing medications, and engaging with patients through the portal.",
            icon: "👨‍⚕️",
            color: "from-purple-500 to-purple-600"
        },
        {
            number: "04",
            title: "Grow Your Practice",
            description: "Use analytics to improve outcomes, reduce no-shows, and increase patient satisfaction.",
            icon: "📈",
            color: "from-orange-500 to-orange-600"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-[#E0F5E9] text-[#00A86B] rounded-full text-sm font-semibold mb-4">
                        🚀 SIMPLE SETUP
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Get Started in 
                        <span className="text-[#00A86B]"> 4 Easy Steps</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        From sign-up to seeing your first patient with our EHR system.
                    </p>
                </div>

                {/* Steps Timeline */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
                    
                    {/* Steps Grid */}
                    <div className="grid lg:grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-2xl p-8 shadow-xl relative z-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                    {/* Step Number */}
                                    <div className={`text-5xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4`}>
                                        {step.number}
                                    </div>
                                    
                                    {/* Icon */}
                                    <div className="text-4xl mb-4">{step.icon}</div>
                                    
                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                    
                                    {/* Time Estimate */}
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <span className="text-xs font-semibold text-gray-400">
                                            Takes ~{index === 0 ? '5' : index === 1 ? '15' : index === 2 ? '30' : '60'} minutes
                                        </span>
                                    </div>
                                </div>

                                {/* Connector Arrow (Desktop) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                                        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Demo CTA */}
                <div className="mt-16 text-center">
                    <button className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-[#0057A3] rounded-xl hover:bg-gray-50 transition-all duration-200 border-2 border-[#0057A3] font-semibold">
                        <span>📺 Watch 2-Minute Demo</span>
                    </button>
                </div>
            </div>
        </section>
    );
}