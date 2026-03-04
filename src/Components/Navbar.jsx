"use client"
import { useState } from 'react';

export default function Navbar() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdown);
        }
    };

    return (
        <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <span className="text-2xl">🏥</span>
                        <span className="font-bold text-xl text-[#0057A3]">MediPulse</span>
                        <span className="hidden md:inline-block px-2 py-1 bg-[#E6F0FA] text-[#0057A3] text-xs font-semibold rounded-full">
                            EHR System
                        </span>
                    </div>

                    {/* Desktop Navigation - Center with Dropdowns */}
                    <div className="hidden md:flex items-center space-x-1 relative">
                        {/* For Patients Dropdown */}
                        <div className="relative">
                            <button 
                                className="px-4 py-2 text-gray-700 hover:text-[#0057A3] hover:bg-[#E6F0FA] rounded-lg transition-all duration-200 font-medium flex items-center space-x-1"
                                onClick={() => toggleDropdown('patients')}
                            >
                                <span>For Patients</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'patients' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {/* Patients Dropdown */}
                            {activeDropdown === 'patients' && (
                                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 animate-fadeIn">
                                    <div className="px-4 pb-2 border-b border-gray-100">
                                        <h3 className="font-semibold text-[#0057A3]">Patient Portal</h3>
                                        <p className="text-xs text-gray-500">Manage your health journey</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 p-4">
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">📅 Appointments</span>
                                            <span className="text-xs text-gray-500">Schedule & manage visits</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">💊 Medications</span>
                                            <span className="text-xs text-gray-500">Refills & history</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">🧪 Lab Results</span>
                                            <span className="text-xs text-gray-500">View test results</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">📋 Medical Records</span>
                                            <span className="text-xs text-gray-500">Access your history</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">💬 Messages</span>
                                            <span className="text-xs text-gray-500">Chat with providers</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">💰 Billing</span>
                                            <span className="text-xs text-gray-500">Pay bills & insurance</span>
                                        </button>
                                    </div>
                                    <div className="px-4 pt-2 border-t border-gray-100">
                                        <button className="w-full text-center text-sm text-[#0057A3] hover:underline py-2">
                                            View Patient Dashboard →
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* For Providers Dropdown */}
                        <div className="relative">
                            <button 
                                className="px-4 py-2 text-gray-700 hover:text-[#0057A3] hover:bg-[#E6F0FA] rounded-lg transition-all duration-200 font-medium flex items-center space-x-1"
                                onClick={() => toggleDropdown('providers')}
                            >
                                <span>For Providers</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'providers' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {/* Providers Dropdown */}
                            {activeDropdown === 'providers' && (
                                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 animate-fadeIn">
                                    <div className="px-4 pb-2 border-b border-gray-100">
                                        <h3 className="font-semibold text-[#0057A3]">Provider Portal</h3>
                                        <p className="text-xs text-gray-500">Tools for healthcare professionals</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 p-4">
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">📋 SOAP Notes</span>
                                            <span className="text-xs text-gray-500">Clinical documentation</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">💊 E-Prescribe</span>
                                            <span className="text-xs text-gray-500">Digital prescriptions</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">🧪 Lab Orders</span>
                                            <span className="text-xs text-gray-500">Order & review results</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">📅 Schedule</span>
                                            <span className="text-xs text-gray-500">Manage appointments</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">👥 Patient List</span>
                                            <span className="text-xs text-gray-500">View all patients</span>
                                        </button>
                                        <button className="text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">📊 Analytics</span>
                                            <span className="text-xs text-gray-500">Practice insights</span>
                                        </button>
                                    </div>
                                    <div className="px-4 pt-2 border-t border-gray-100">
                                        <button className="w-full text-center text-sm text-[#0057A3] hover:underline py-2">
                                            Open Provider Dashboard →
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Features Dropdown */}
                        <div className="relative">
                            <button 
                                className="px-4 py-2 text-gray-700 hover:text-[#0057A3] hover:bg-[#E6F0FA] rounded-lg transition-all duration-200 font-medium flex items-center space-x-1"
                                onClick={() => toggleDropdown('features')}
                            >
                                <span>Features</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'features' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {/* Features Dropdown */}
                            {activeDropdown === 'features' && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-4 animate-fadeIn">
                                    <div className="px-4 pb-2 border-b border-gray-100">
                                        <h3 className="font-semibold text-[#0057A3]">Platform Features</h3>
                                    </div>
                                    <div className="p-2">
                                        <button className="w-full text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">🏥 EHR Management</span>
                                            <span className="text-xs text-gray-500">Complete electronic health records</span>
                                        </button>
                                        <button className="w-full text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">🔐 HIPAA Compliance</span>
                                            <span className="text-xs text-gray-500">Enterprise-grade security</span>
                                        </button>
                                        <button className="w-full text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">🔄 Lab Integration</span>
                                            <span className="text-xs text-gray-500">Seamless lab connectivity</span>
                                        </button>
                                        <button className="w-full text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">📱 Mobile Access</span>
                                            <span className="text-xs text-gray-500">Apps for iOS & Android</span>
                                        </button>
                                        <button className="w-full text-left p-3 hover:bg-[#E6F0FA] rounded-lg transition-colors">
                                            <span className="block font-medium text-gray-800">🤖 AI Assistance</span>
                                            <span className="text-xs text-gray-500">Clinical decision support</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Pricing - Simple Button (No Dropdown) */}
                        <button className="px-4 py-2 text-gray-700 hover:text-[#0057A3] hover:bg-[#E6F0FA] rounded-lg transition-all duration-200 font-medium">
                            Pricing
                        </button>

                        {/* Resources Dropdown */}
                        <div className="relative">
                            <button 
                                className="px-4 py-2 text-gray-700 hover:text-[#0057A3] hover:bg-[#E6F0FA] rounded-lg transition-all duration-200 font-medium flex items-center space-x-1"
                                onClick={() => toggleDropdown('resources')}
                            >
                                <span>Resources</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {/* Resources Dropdown */}
                            {activeDropdown === 'resources' && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                                    <button className="w-full text-left px-4 py-3 hover:bg-[#E6F0FA] hover:text-[#0057A3] transition-colors">
                                        <span className="block font-medium">📚 Blog</span>
                                        <span className="text-xs text-gray-500">Healthcare insights</span>
                                    </button>
                                    <button className="w-full text-left px-4 py-3 hover:bg-[#E6F0FA] hover:text-[#0057A3] transition-colors">
                                        <span className="block font-medium">📄 Case Studies</span>
                                        <span className="text-xs text-gray-500">Success stories</span>
                                    </button>
                                    <button className="w-full text-left px-4 py-3 hover:bg-[#E6F0FA] hover:text-[#0057A3] transition-colors">
                                        <span className="block font-medium">🎓 Webinars</span>
                                        <span className="text-xs text-gray-500">Training & education</span>
                                    </button>
                                    <button className="w-full text-left px-4 py-3 hover:bg-[#E6F0FA] hover:text-[#0057A3] transition-colors">
                                        <span className="block font-medium">❓ FAQ</span>
                                        <span className="text-xs text-gray-500">Common questions</span>
                                    </button>
                                    <button className="w-full text-left px-4 py-3 hover:bg-[#E6F0FA] hover:text-[#0057A3] transition-colors border-t border-gray-100">
                                        <span className="block font-medium">📞 Support Center</span>
                                        <span className="text-xs text-gray-500">24/7 assistance</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-3">
                        {/* Search with Dropdown */}
                        <div className="relative">
                            <button 
                                className="p-2 text-gray-500 hover:text-[#0057A3] hover:bg-[#E6F0FA] rounded-lg transition-all duration-200"
                                onClick={() => toggleDropdown('search')}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            
                            {/* Search Dropdown */}
                            {activeDropdown === 'search' && (
                                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-4 animate-fadeIn">
                                    <input 
                                        type="text" 
                                        placeholder="Search patients, providers, resources..." 
                                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0057A3] focus:border-transparent"
                                    />
                                    <div className="mt-2 text-xs text-gray-500">
                                        Quick links: 📅 Appointments • 💊 Medications • 👨‍⚕️ Providers
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Notifications Dropdown */}
                        <div className="relative">
                            <button 
                                className="p-2 text-gray-500 hover:text-[#0057A3] hover:bg-[#E6F0FA] rounded-lg transition-all duration-200 relative"
                                onClick={() => toggleDropdown('notifications')}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B6B] rounded-full"></span>
                            </button>
                            
                            {/* Notifications Dropdown */}
                            {activeDropdown === 'notifications' && (
                                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeIn">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <h3 className="font-semibold">Notifications</h3>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto">
                                        <div className="px-4 py-3 hover:bg-[#E6F0FA] border-b border-gray-50">
                                            <div className="flex items-start space-x-3">
                                                <span className="text-red-500">⚠️</span>
                                                <div>
                                                    <p className="text-sm font-medium">Critical Lab Result</p>
                                                    <p className="text-xs text-gray-500">John Davis - Potassium: 6.8</p>
                                                    <p className="text-xs text-gray-400 mt-1">5 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 hover:bg-[#E6F0FA] border-b border-gray-50">
                                            <div className="flex items-start space-x-3">
                                                <span className="text-blue-500">💊</span>
                                                <div>
                                                    <p className="text-sm font-medium">Refill Request</p>
                                                    <p className="text-xs text-gray-500">Maria Garcia - Metformin</p>
                                                    <p className="text-xs text-gray-400 mt-1">15 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 hover:bg-[#E6F0FA]">
                                            <div className="flex items-start space-x-3">
                                                <span className="text-green-500">📅</span>
                                                <div>
                                                    <p className="text-sm font-medium">Appointment Reminder</p>
                                                    <p className="text-xs text-gray-500">Robert Martinez in 30 min</p>
                                                    <p className="text-xs text-gray-400 mt-1">30 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 border-t border-gray-100">
                                        <button className="text-sm text-[#0057A3] hover:underline">View all notifications</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="h-6 w-px bg-gray-200"></div>

                        {/* Auth Buttons */}
                        <button className="px-4 py-2 text-gray-700 hover:text-[#0057A3] hover:bg-[#E6F0FA] rounded-lg transition-all duration-200 font-medium">
                            Log in
                        </button>
                        
                        <button className="px-4 py-2 bg-[#0057A3] text-white rounded-lg hover:bg-[#003F7A] transition-all duration-200 font-medium shadow-sm hover:shadow-md flex items-center space-x-2">
                            <span>Sign up</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Mobile menu button */}
                        <button 
                            className="md:hidden p-2 text-gray-500 hover:text-[#0057A3] hover:bg-[#E6F0FA] rounded-lg"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Expanded) */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#E6F0FA] hover:text-[#0057A3] rounded-lg font-medium">
                            👤 For Patients
                        </button>
                        <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#E6F0FA] hover:text-[#0057A3] rounded-lg font-medium">
                            👨‍⚕️ For Providers
                        </button>
                        <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#E6F0FA] hover:text-[#0057A3] rounded-lg font-medium">
                            ✨ Features
                        </button>
                        <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#E6F0FA] hover:text-[#0057A3] rounded-lg font-medium">
                            💰 Pricing
                        </button>
                        <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#E6F0FA] hover:text-[#0057A3] rounded-lg font-medium">
                            📚 Resources
                        </button>
                        <div className="border-t border-gray-200 pt-2 mt-2">
                            <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#E6F0FA] hover:text-[#0057A3] rounded-lg font-medium">
                                🔍 Search
                            </button>
                            <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#E6F0FA] hover:text-[#0057A3] rounded-lg font-medium">
                                🔔 Notifications (3)
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Emergency Banner */}
            <div className="bg-[#FF6B6B] bg-opacity-10 border-t border-[#FF6B6B] border-opacity-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex items-center justify-center space-x-2 text-sm">
                        <span className="text-[#FF6B6B] font-semibold">🚨 Emergency:</span>
                        <span className="text-gray-600">24/7 Critical Care Support Available</span>
                        <button className="text-[#0057A3] hover:underline font-medium">Call Now →</button>
                    </div>
                </div>
            </div>

            {/* Add this CSS for animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
            `}</style>
        </nav>
    );
}