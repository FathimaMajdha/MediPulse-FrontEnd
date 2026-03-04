import React from 'react';

export default function Hero() {
    return (
        <div className="bg-gradient-to-br from-blue-50 via-white to-green-50">
            {/* Main Hero Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                
                {/* Grid Layout - Left Content, Right Visual */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Side - Text Content */}
                    <div className="space-y-8">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center space-x-2 bg-[#E6F0FA] text-[#0057A3] px-4 py-2 rounded-full">
                            <span className="text-sm font-semibold">🏥 HIPAA Compliant</span>
                            <span className="w-1 h-1 bg-[#0057A3] rounded-full"></span>
                            <span className="text-sm font-semibold">⚕️ 99.9% Uptime</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Modern Healthcare
                            <span className="text-[#0057A3] block">Management for</span>
                            <span className="text-[#00A86B]">Everyone</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 max-w-lg">
                            Streamline your practice, engage patients, and improve outcomes 
                            with the most intuitive EHR system trusted by 10,000+ healthcare 
                            providers nationwide.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-[#0057A3] text-white rounded-xl hover:bg-[#003F7A] transition-all duration-200 shadow-lg hover:shadow-xl font-semibold flex items-center space-x-2">
                                <span>🚀 Get Started Free</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            <button className="px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-gray-200 font-semibold flex items-center space-x-2">
                                <span>📞 Schedule Demo</span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-8">
                            <div>
                                <div className="text-2xl font-bold text-[#0057A3]">10,000+</div>
                                <div className="text-sm text-gray-500">Active Patients</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[#00A86B]">500+</div>
                                <div className="text-sm text-gray-500">Healthcare Practices</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[#0057A3]">4.9/5</div>
                                <div className="text-sm text-gray-500">Provider Rating</div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center space-x-4 pt-4">
                            <div className="flex -space-x-2">
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="/api/placeholder/32/32" alt="Provider" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="/api/placeholder/32/32" alt="Provider" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="/api/placeholder/32/32" alt="Provider" />
                                <img className="w-8 h-8 rounded-full border-2 border-white" src="/api/placeholder/32/32" alt="Provider" />
                            </div>
                            <div className="text-sm text-gray-600">
                                <span className="font-semibold">2,500+</span> providers joined this month
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Dashboard Preview */}
                    <div className="relative">
                        {/* Main Dashboard Card */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            
                            {/* Card Header */}
                            <div className="bg-gradient-to-r from-[#0057A3] to-[#00A86B] px-6 py-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                    <span className="text-white text-sm font-medium">Dr. Sarah Chen - Dashboard</span>
                                    <span className="text-white text-xs">🟢 Live</span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 space-y-4">
                                {/* Today's Schedule */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-semibold text-gray-700">Today's Schedule</h3>
                                        <span className="text-xs text-[#0057A3]">Jun 15, 2024</span>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        {/* Appointment 1 */}
                                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-[#0057A3]">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-sm font-medium text-gray-600">9:00 AM</span>
                                                <div>
                                                    <p className="font-medium text-gray-800">James Wilson</p>
                                                    <p className="text-xs text-gray-500">Check-up · BP 148/92</p>
                                                </div>
                                            </div>
                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">⚠️ Alert</span>
                                        </div>

                                        {/* Appointment 2 */}
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-sm font-medium text-gray-600">9:30 AM</span>
                                                <div>
                                                    <p className="font-medium text-gray-800">Emma Thompson</p>
                                                    <p className="text-xs text-gray-500">Follow-up · Labs Ready</p>
                                                </div>
                                            </div>
                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Checked In</span>
                                        </div>

                                        {/* Appointment 3 */}
                                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-sm font-medium text-gray-600">10:00 AM</span>
                                                <div>
                                                    <p className="font-medium text-gray-800">Robert Martinez</p>
                                                    <p className="text-xs text-gray-500">New Patient</p>
                                                </div>
                                            </div>
                                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Intake Ready</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <div className="bg-[#E6F0FA] p-3 rounded-lg">
                                        <p className="text-xs text-[#0057A3] mb-1">Patients Today</p>
                                        <p className="text-xl font-bold text-gray-800">14</p>
                                    </div>
                                    <div className="bg-[#E0F5E9] p-3 rounded-lg">
                                        <p className="text-xs text-[#00A86B] mb-1">Pending Labs</p>
                                        <p className="text-xl font-bold text-gray-800">8</p>
                                    </div>
                                </div>

                                {/* Critical Alert */}
                                <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-red-500">⚠️</span>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">Critical Lab Result</p>
                                            <p className="text-xs text-gray-600">John Davis - Potassium: 6.8</p>
                                        </div>
                                    </div>
                                    <button className="px-3 py-1 bg-red-500 text-white text-xs rounded-lg hover:bg-red-600">
                                        Review
                                    </button>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>🔔 3 New Alerts</span>
                                    <span>📋 5 Pending Notes</span>
                                    <span>💊 2 Refills</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                            <div className="flex items-center space-x-2">
                                <span className="text-[#00A86B]">✓</span>
                                <span className="text-sm font-medium">HIPAA Compliant</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
                            <div className="flex items-center space-x-2">
                                <span className="text-yellow-500">⭐</span>
                                <span className="text-sm font-medium">4.9/5 Rating</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Bar */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-500 mb-6">Trusted by leading healthcare institutions</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
                        <div className="text-gray-400 font-semibold">City Medical</div>
                        <div className="text-gray-400 font-semibold">Westside Clinic</div>
                        <div className="text-gray-400 font-semibold">North Health</div>
                        <div className="text-gray-400 font-semibold">Pediatric Care</div>
                        <div className="text-gray-400 font-semibold">Heart Institute</div>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -z-10 opacity-10">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
                    <circle cx="300" cy="100" r="100" fill="#0057A3" />
                    <circle cx="350" cy="250" r="80" fill="#00A86B" />
                </svg>
            </div>
        </div>
    );
}