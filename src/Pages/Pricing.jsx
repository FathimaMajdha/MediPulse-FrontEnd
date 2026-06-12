import React from 'react';
import Navbar from '../Components/Navbar';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for solo practitioners just starting out.",
      features: [
        "Up to 500 Active Patients",
        "Basic EHR & Scheduling",
        "Standard Billing Tools",
        "Email Support",
        "HIPAA Compliant"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      description: "Ideal for growing clinics with multiple providers.",
      features: [
        "Unlimited Patients",
        "Advanced Analytics & Reporting",
        "E-Prescribe & Lab Integrations",
        "Priority 24/7 Support",
        "Telehealth Capabilities"
      ],
      buttonText: "Get Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large hospital systems and multi-location groups.",
      features: [
        "Custom API Integrations",
        "Dedicated Account Manager",
        "White-label Patient Portal",
        "On-premise Deployment Options",
        "Advanced AI Scribe Features"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simple, transparent pricing</h1>
          <p className="text-lg text-gray-600">
            No hidden fees. No surprise charges. Choose the plan that best fits your practice's needs and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl border ${plan.popular ? 'border-[#0057A3] shadow-xl transform md:-translate-y-4' : 'border-gray-200 shadow-sm'} p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0057A3] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500 font-medium">/provider/month</span>}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <svg className={`w-5 h-5 mr-3 shrink-0 ${plan.popular ? 'text-[#0057A3]' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.popular 
                  ? 'bg-[#0057A3] text-white hover:bg-[#003F7A] shadow-md' 
                  : 'bg-blue-50 text-[#0057A3] hover:bg-blue-100'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section Link */}
        <div className="mt-20 text-center">
          <p className="text-gray-600">
            Have questions about our plans? <a href="/resources/faq" className="text-[#0057A3] font-semibold hover:underline">Read our Pricing FAQ</a> or contact our team.
          </p>
        </div>

      </div>
    </div>
  );
}
