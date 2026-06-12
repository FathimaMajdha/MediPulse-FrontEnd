import React from 'react';
import Navbar from '../../Components/Navbar';

export default function EhrManagement() {
  const features = [
    { title: "Smart Charting", icon: "📋", desc: "Customizable templates that adapt to your specialty. Auto-fill capabilities reduce documentation time by 40%." },
    { title: "Seamless Scheduling", icon: "📅", desc: "Drag-and-drop calendar with automated patient reminders via SMS and Email to reduce no-shows." },
    { title: "Integrated Billing", icon: "💰", desc: "Automated claim scrubbing and direct clearinghouse integration. Get paid faster with fewer denials." },
    { title: "Patient Portal", icon: "👤", desc: "Secure access for patients to view records, message providers, and pay bills online." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-[#0057A3] text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete EHR Management</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Built by doctors, for doctors. Our intuitive platform streamlines every aspect of your practice workflow.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Spend more time with patients, less time on screens.</h2>
            <p className="text-lg text-gray-600 mb-6">
              MediPulse EHR is designed to minimize clicks. From intake to sign-off, our intuitive interface ensures you capture all necessary clinical data without the friction of traditional systems.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="text-[#00A86B] mr-2">✓</span> Voice-to-text dictation built-in</li>
              <li className="flex items-center"><span className="text-[#00A86B] mr-2">✓</span> One-click prescription renewals</li>
              <li className="flex items-center"><span className="text-[#00A86B] mr-2">✓</span> Comprehensive patient timelines</li>
            </ul>
          </div>
          
          {/* Mock UI Element */}
          <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform">
            <div className="flex border-b border-gray-100 pb-3 mb-3">
              <div className="w-12 h-12 bg-[#E6F0FA] rounded-full flex items-center justify-center text-[#0057A3] font-bold text-lg mr-3">JD</div>
              <div>
                <h4 className="font-bold text-gray-800">John Doe</h4>
                <p className="text-xs text-gray-500">DOB: 05/12/1980 (46y) • Male</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-1/2"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6"></div>
            </div>
            <div className="mt-4 flex gap-2">
              <div className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">Active Vitals</div>
              <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Labs Ready</div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">Core Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h4>
              <p className="text-gray-600 text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
