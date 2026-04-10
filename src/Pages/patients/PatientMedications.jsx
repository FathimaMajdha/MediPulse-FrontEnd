"use client";
import { useState } from 'react';

export default function PatientMedications() {
    const [activeTab, setActiveTab] = useState('current');
    const [searchTerm, setSearchTerm] = useState('');

    // Sample Medications Data
    const medications = [
        {
            id: 1,
            name: "Metformin 500mg",
            doctor: "Dr. Rajesh Kumar",
            dosage: "1 tablet twice daily",
            frequency: "Morning & Evening",
            startDate: "12 Jan 2026",
            endDate: "Ongoing",
            status: "Active",
            refillStatus: "Refill in 7 days",
            emoji: "💊",
        },
        {
            id: 2,
            name: "Amlodipine 5mg",
            doctor: "Dr. Anjali Menon",
            dosage: "1 tablet once daily",
            frequency: "Night",
            startDate: "05 Feb 2026",
            endDate: "Ongoing",
            status: "Active",
            refillStatus: "Refill Available",
            emoji: "💊",
        },
        {
            id: 3,
            name: "Paracetamol 650mg",
            doctor: "Dr. Priya Sharma",
            dosage: "1 tablet as needed",
            frequency: "When fever",
            startDate: "01 Apr 2026",
            endDate: "10 Apr 2026",
            status: "Completed",
            refillStatus: "No Refill",
            emoji: "🌡️",
        },
    ];

    const filteredMeds = medications.filter(med =>
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentMeds = filteredMeds.filter(m => m.status === 'Active');
    const pastMeds = filteredMeds.filter(m => m.status === 'Completed');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">My Medications</h1>
                            <p className="text-gray-500 mt-1">Track and manage your prescriptions</p>
                        </div>

                        <button 
                            className="bg-[#0057A3] hover:bg-[#003F7A] text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-sm"
                            onClick={() => alert("Request Refill / New Prescription - Feature coming soon")}
                        >
                            Request Refill
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Search & Tabs */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search medications or doctor..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#0057A3] focus:ring-2 focus:ring-[#0057A3]/20"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    </div>

                    <div className="flex bg-white border border-gray-200 rounded-2xl p-1">
                        {['current', 'past'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                                    activeTab === tab 
                                        ? 'bg-[#0057A3] text-white shadow-sm' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {tab === 'current' ? 'Current Medications' : 'Past Medications'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Medications List */}
                <div className="grid gap-6">
                    {(activeTab === 'current' ? currentMeds : pastMeds).length > 0 ? (
                        (activeTab === 'current' ? currentMeds : pastMeds).map((med) => (
                            <div 
                                key={med.id}
                                className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Medication Icon */}
                                    <div className="w-16 h-16 bg-[#E6F0FA] rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                                        {med.emoji}
                                    </div>

                                    {/* Main Info */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-semibold text-2xl text-gray-800">{med.name}</h3>
                                                <p className="text-[#0057A3] font-medium mt-1">Prescribed by {med.doctor}</p>
                                            </div>
                                            <span className={`px-5 py-1.5 text-sm font-semibold rounded-full ${
                                                med.status === 'Active' 
                                                    ? 'bg-green-100 text-green-700' 
                                                    : 'bg-gray-100 text-gray-600'
                                            }`}>
                                                {med.status}
                                            </span>
                                        </div>

                                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-500">Dosage</p>
                                                <p className="font-medium">{med.dosage}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Frequency</p>
                                                <p className="font-medium">{med.frequency}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Started</p>
                                                <p className="font-medium">{med.startDate}</p>
                                            </div>
                                        </div>

                                        {med.refillStatus && (
                                            <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-2xl text-sm font-medium">
                                                🔄 {med.refillStatus}
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col gap-3 md:w-48">
                                        {med.status === 'Active' && (
                                            <>
                                                <button className="w-full py-3 border border-gray-300 hover:bg-gray-50 rounded-2xl text-sm font-medium transition-colors">
                                                    Request Refill
                                                </button>
                                                <button className="w-full py-3 bg-[#0057A3] text-white rounded-2xl hover:bg-[#003F7A] text-sm font-medium transition-all">
                                                    Message Doctor
                                                </button>
                                            </>
                                        )}
                                        {med.status === 'Completed' && (
                                            <button className="w-full py-3 border border-gray-300 hover:bg-gray-50 rounded-2xl text-sm font-medium transition-colors">
                                                View History
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                            <p className="text-6xl mb-4">💊</p>
                            <p className="text-xl font-medium text-gray-600">No medications found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}