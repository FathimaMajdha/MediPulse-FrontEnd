export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "199",
            description: "Perfect for solo practitioners",
            features: [
                "Up to 3 providers",
                "Basic EHR features",
                "Patient portal",
                "E-prescribing",
                "Email support",
                "50 patient records"
            ],
            notIncluded: [
                "Lab integration",
                "API access",
                "Analytics"
            ],
            color: "blue",
            popular: false
        },
        {
            name: "Professional",
            price: "399",
            description: "Ideal for growing practices",
            features: [
                "Up to 10 providers",
                "Advanced EHR features",
                "Patient portal",
                "E-prescribing",
                "Lab integration",
                "Phone support",
                "API access",
                "Unlimited patients",
                "Analytics dashboard"
            ],
            notIncluded: [],
            color: "green",
            popular: true
        },
        {
            name: "Enterprise",
            price: "699",
            description: "For large healthcare organizations",
            features: [
                "Unlimited providers",
                "Full EHR suite",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "On-premise option",
                "Advanced analytics",
                "Custom training",
                "Audit logs"
            ],
            notIncluded: [],
            color: "purple",
            popular: false
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-[#E6F0FA] text-[#0057A3] rounded-full text-sm font-semibold mb-4">
                        💰 SIMPLE PRICING
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Transparent Plans for 
                        <span className="text-[#0057A3]"> Every Practice</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        No hidden fees. Cancel anytime. All plans include HIPAA compliance.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative bg-white rounded-2xl shadow-xl border ${
                                plan.popular ? 'border-[#00A86B] scale-105' : 'border-gray-100'
                            } hover:shadow-2xl transition-all duration-300`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="px-4 py-2 bg-[#00A86B] text-white rounded-full text-sm font-semibold">
                                        🔥 MOST POPULAR
                                    </span>
                                </div>
                            )}

                            {/* Card Header */}
                            <div className="p-8 border-b border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                                    <span className="text-gray-500 ml-2">/month</span>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="p-8">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center space-x-3">
                                            <svg className="w-5 h-5 text-[#00A86B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                    
                                    {/* Not Included (grayed out) */}
                                    {plan.notIncluded.map((feature, i) => (
                                        <li key={i} className="flex items-center space-x-3 opacity-50">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="text-gray-500">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className={`w-full mt-8 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                                    plan.popular 
                                        ? 'bg-[#00A86B] text-white hover:bg-[#007A4D]' 
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}>
                                    Choose {plan.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Guarantee */}
                <div className="text-center mt-12 text-gray-500 text-sm">
                    <p>✨ All plans include a 30-day free trial. No credit card required.</p>
                </div>
            </div>
        </section>
    );
}