export default function Testimonials() {
    const testimonials = [
        {
            name: "Dr. Sarah Chen",
            role: "Family Physician",
            practice: "City Medical Group",
            image: "/api/placeholder/60/60",
            quote: "MediPulse has transformed our practice. We've reduced documentation time by 60% and our patients love the portal. The lab integration alone saves us hours each week.",
            rating: 5,
            metric: "60% time saved"
        },
        {
            name: "Dr. James Wilson",
            role: "Cardiologist",
            practice: "Heart Institute",
            image: "/api/placeholder/60/60",
            quote: "The clinical decision support is exceptional. Drug interaction alerts have prevented several potential issues. It's like having a second pair of eyes.",
            rating: 5,
            metric: "Zero medication errors"
        },
        {
            name: "Dr. Maria Garcia",
            role: "Pediatrician",
            practice: "Children's Health Clinic",
            image: "/api/placeholder/60/60",
            quote: "My favorite feature is the voice-to-text SOAP notes. I can dictate while examining patients and the notes are ready instantly. Game changer!",
            rating: 5,
            metric: "2+ hours saved daily"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-[#E6F0FA] text-[#0057A3] rounded-full text-sm font-semibold mb-4">
                        ⭐ TRUSTED BY 500+ PRACTICES
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Healthcare Providers 
                        <span className="text-[#0057A3]"> Are Saying</span>
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Rating */}
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

                            {/* Metric Badge */}
                            <div className="inline-block px-3 py-1 bg-[#00A86B] bg-opacity-10 text-[#00A86B] rounded-full text-sm font-semibold mb-4">
                                📊 {testimonial.metric}
                            </div>

                            {/* Author */}
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    <p className="text-xs text-gray-400">{testimonial.practice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="mt-16 bg-gradient-to-r from-[#0057A3] to-[#00A86B] rounded-2xl p-8 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold">500+</div>
                            <div className="text-sm opacity-90">Active Practices</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">50K+</div>
                            <div className="text-sm opacity-90">Patients Served</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">98%</div>
                            <div className="text-sm opacity-90">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">24/7</div>
                            <div className="text-sm opacity-90">Support Available</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}