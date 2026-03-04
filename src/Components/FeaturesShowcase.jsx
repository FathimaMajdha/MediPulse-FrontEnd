export default function FeaturesShowcase() {
    const features = [
        {
            icon: "📋",
            title: "Smart SOAP Notes",
            description: "Intelligent clinical documentation with templates, voice-to-text, and auto-suggestions based on patient history.",
            color: "blue",
            stats: "Save 2+ hours daily"
        },
        {
            icon: "💊",
            title: "E-Prescribing",
            description: "Digital prescriptions with real-time drug interaction checks, allergy alerts, and automatic pharmacy delivery.",
            color: "green",
            stats: "50K+ prescriptions monthly"
        },
        {
            icon: "🧪",
            title: "Lab Integration",
            description: "Seamless lab orders and results with automatic abnormal value flagging and trend analysis.",
            color: "purple",
            stats: "98% faster results"
        },
        {
            icon: "📅",
            title: "Smart Scheduling",
            description: "Intelligent appointment management with automated reminders, waitlists, and calendar sync.",
            color: "orange",
            stats: "70% fewer no-shows"
        },
        {
            icon: "👥",
            title: "Patient Portal",
            description: "Secure patient access to records, messaging, and appointments with 24/7 availability.",
            color: "teal",
            stats: "4.9/5 patient rating"
        },
        {
            icon: "🔐",
            title: "HIPAA Compliance",
            description: "Enterprise-grade security with audit trails, encryption, and role-based access control.",
            color: "red",
            stats: "100% compliant"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-[#E6F0FA] text-[#0057A3] rounded-full text-sm font-semibold mb-4">
                        ✨ POWERFUL FEATURES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Everything You Need to 
                        <span className="text-[#0057A3]"> Run Your Practice</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Comprehensive EHR tools designed by healthcare professionals 
                        to streamline workflows and improve patient care.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0057A3] hover:-translate-y-1"
                        >
                            {/* Icon */}
                            <div className={`text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {feature.description}
                            </p>
                            
                            {/* Stats Badge */}
                            <div className="inline-block px-3 py-1 bg-[#E6F0FA] text-[#0057A3] text-sm rounded-full font-medium">
                                {feature.stats}
                            </div>
                            
                            {/* Hover Effect Arrow */}
                            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-6 h-6 text-[#0057A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <button className="inline-flex items-center space-x-2 px-8 py-4 bg-[#0057A3] text-white rounded-xl hover:bg-[#003F7A] transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
                        <span>Explore All Features</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}