export default function Integrations() {
    const integrations = [
        { name: "LabCorp", icon: "🧪", type: "Laboratory" },
        { name: "Quest Diagnostics", icon: "🔬", type: "Laboratory" },
        { name: "CVS Pharmacy", icon: "💊", type: "Pharmacy" },
        { name: "Walgreens", icon: "🏪", type: "Pharmacy" },
        { name: "Epic", icon: "🏥", type: "EHR" },
        { name: "Cerner", icon: "📊", type: "EHR" },
        { name: "Google Calendar", icon: "📅", type: "Calendar" },
        { name: "Outlook", icon: "📧", type: "Calendar" },
        { name: "Zoom", icon: "📹", type: "Telehealth" },
        { name: "Doxy.me", icon: "🩺", type: "Telehealth" },
        { name: "Stripe", icon: "💳", type: "Payments" },
        { name: "Razorpay", icon: "💰", type: "Payments" }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-[#E6F0FA] text-[#0057A3] rounded-full text-sm font-semibold mb-4">
                        🔌 SEAMLESS INTEGRATIONS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Connects With Your 
                        <span className="text-[#0057A3]"> Favorite Tools</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        MediPulse integrates with leading labs, pharmacies, and healthcare systems.
                    </p>
                </div>

                {/* Integrations Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                    {integrations.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <div className="font-semibold text-gray-800">{item.name}</div>
                            <div className="text-xs text-gray-400 mt-1">{item.type}</div>
                        </div>
                    ))}
                </div>

                {/* API Access Card */}
                <div className="bg-gradient-to-r from-[#0057A3] to-[#003F7A] rounded-2xl p-8 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold mb-2">Need Custom Integration?</h3>
                            <p className="text-blue-100">Our API allows custom connections to any system.</p>
                        </div>
                        <button className="px-8 py-3 bg-white text-[#0057A3] rounded-xl hover:bg-gray-100 transition-colors font-semibold">
                            View API Documentation →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}