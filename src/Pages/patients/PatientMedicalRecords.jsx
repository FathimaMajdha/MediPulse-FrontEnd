"use client";
import { useState } from 'react';

export default function PatientMedicalRecords() {
    const [activeTab, setActiveTab] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Sample Medical Records Data
    const medicalRecords = [
        {
            id: 1,
            title: "Annual Health Checkup 2026",
            date: "10 April 2026",
            type: "Health Checkup",
            doctor: "Dr. Anjali Menon",
            specialty: "General Medicine",
            summary: "Comprehensive annual physical examination. All parameters within normal limits except mildly elevated cholesterol.",
            emoji: "📋",
            category: "Checkup"
        },
        {
            id: 2,
            title: "Cardiology Consultation",
            date: "05 April 2026",
            type: "Specialist Visit",
            doctor: "Dr. Rajesh Kumar",
            specialty: "Cardiologist",
            summary: "Patient presented with chest discomfort. ECG and Echo done. Mild hypertension noted.",
            emoji: "❤️",
            category: "Consultation"
        },
        {
            id: 3,
            title: "Vaccination Record - Tetanus Booster",
            date: "20 March 2026",
            type: "Vaccination",
            doctor: "Dr. Priya Sharma",
            specialty: "Pediatric & Adult Immunization",
            summary: "Tdap booster administered. No adverse reactions.",
            emoji: "💉",
            category: "Vaccination"
        },
        {
            id: 4,
            title: "Discharge Summary - Appendectomy",
            date: "15 February 2026",
            type: "Hospitalization",
            doctor: "Dr. Suresh Menon",
            specialty: "General Surgery",
            summary: "Laparoscopic appendectomy performed successfully. Post-operative recovery uneventful.",
            emoji: "🏥",
            category: "Hospital"
        },
    ];

    const filteredRecords = medicalRecords.filter(record =>
        record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayedRecords = activeTab === 'all' 
        ? filteredRecords 
        : filteredRecords.filter(record => record.category.toLowerCase() === activeTab.toLowerCase());

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Medical Records</h1>
                            <p className="text-gray-500 mt-1">Complete history of your health records and visits</p>
                        </div>

                        <button 
                            className="bg-[#0057A3] hover:bg-[#003F7A] text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-sm"
                            onClick={() => alert("Upload New Medical Document - Feature coming soon")}
                        >
                            📤 Upload Record
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Search & Filter Tabs */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search records, doctors, or keywords..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#0057A3] focus:ring-2 focus:ring-[#0057A3]/20"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    </div>

                    <div className="flex bg-white border border-gray-200 rounded-2xl p-1 overflow-x-auto">
                        {['all', 'Checkup', 'Consultation', 'Vaccination', 'Hospital'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 whitespace-nowrap rounded-xl font-medium transition-all ${
                                    activeTab === tab 
                                        ? 'bg-[#0057A3] text-white shadow-sm' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {tab === 'all' ? 'All Records' : tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Records List */}
                <div className="grid gap-6">
                    {displayedRecords.length > 0 ? (
                        displayedRecords.map((record) => (
                            <div 
                                key={record.id}
                                className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-[#E6F0FA] rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                                        {record.emoji}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                                            <div>
                                                <h3 className="font-semibold text-2xl text-gray-800">{record.title}</h3>
                                                <p className="text-gray-500 mt-1">{record.date} • {record.type}</p>
                                            </div>
                                            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full self-start">
                                                {record.specialty}
                                            </span>
                                        </div>

                                        <p className="mt-4 text-gray-600 leading-relaxed">
                                            {record.summary}
                                        </p>

                                        <div className="mt-4 text-sm text-gray-500">
                                            Recorded by <span className="font-medium text-gray-700">{record.doctor}</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col gap-3 md:w-52 pt-2">
                                        <button className="w-full py-3 border border-gray-300 hover:bg-gray-50 rounded-2xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
                                            📄 View Full Record
                                        </button>
                                        <button className="w-full py-3 border border-gray-300 hover:bg-gray-50 rounded-2xl text-sm font-medium transition-colors">
                                            Download PDF
                                        </button>
                                        <button className="w-full py-3 bg-[#0057A3] text-white rounded-2xl hover:bg-[#003F7A] text-sm font-medium transition-all">
                                            Message Doctor
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                            <p className="text-6xl mb-4">📋</p>
                            <p className="text-xl font-medium text-gray-600">No medical records found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}