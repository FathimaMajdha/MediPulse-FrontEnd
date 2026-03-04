import { useState } from "react";

export default function Faq() {
    const faqs = [
        {
            question: "Is MediPulse HIPAA compliant?",
            answer: "Yes, MediPulse is fully HIPAA compliant with enterprise-grade encryption, audit trails, and access controls. We undergo regular security audits and penetration testing.",
            category: "security"
        },
        {
            question: "Can I import existing patient data?",
            answer: "Absolutely! We provide data migration tools and support to import your existing patient records from other EHR systems or spreadsheets seamlessly.",
            category: "general"
        },
        {
            question: "How long does implementation take?",
            answer: "Most practices are up and running within 1-2 weeks. Our onboarding team provides training and support throughout the process.",
            category: "general"
        },
        {
            question: "Do you offer training for staff?",
            answer: "Yes, all plans include training resources. Professional and Enterprise plans include personalized training sessions for your entire staff.",
            category: "support"
        },
        {
            question: "What labs do you integrate with?",
            answer: "We integrate with major labs including LabCorp, Quest Diagnostics, and many regional laboratories. Custom integrations are available for Enterprise plans.",
            category: "integrations"
        },
        {
            question: "Is there a mobile app?",
            answer: "Yes, we offer mobile apps for both iOS and Android for patients and providers, allowing access to records on the go.",
            category: "general"
        }
    ];

    const [activeCategory, setActiveCategory] = useState('all');
    const categories = ['all', 'general', 'security', 'integrations', 'support'];

    const filteredFaqs = activeCategory === 'all' 
        ? faqs 
        : faqs.filter(faq => faq.category === activeCategory);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-[#E6F0FA] text-[#0057A3] rounded-full text-sm font-semibold mb-4">
                        ❓ GOT QUESTIONS?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked 
                        <span className="text-[#0057A3]"> Questions</span>
                    </h2>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full capitalize transition-all duration-200 ${
                                activeCategory === category
                                    ? 'bg-[#0057A3] text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {filteredFaqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                        >
                            <details className="group">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                    <span className="text-[#0057A3] group-open:rotate-180 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 text-gray-600">
                                    {faq.answer}
                                </div>
                            </details>
                        </div>
                    ))}
                </div>

                {/* Still Have Questions */}
                <div className="mt-12 text-center">
                    <div className="bg-[#E6F0FA] rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
                        <p className="text-gray-600 mb-6">Our support team is here to help 24/7</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-6 py-3 bg-[#0057A3] text-white rounded-xl hover:bg-[#003F7A] transition-colors">
                                📞 Schedule a Call
                            </button>
                            <button className="px-6 py-3 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200">
                                💬 Live Chat Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}