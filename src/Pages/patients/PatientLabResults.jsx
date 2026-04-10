"use client";
import { useState } from 'react';

export default function PatientLabResults() {
    const [activeTab, setActiveTab] = useState('recent');
    const [searchTerm, setSearchTerm] = useState('');

    // Sample Lab Results Data
    const labResults = [
        {
            id: 1,
            testName: "Complete Blood Count (CBC)",
            date: "10 April 2026",
            lab: "MediLab Diagnostics",
            status: "Normal",
            doctor: "Dr. Anjali Menon",
            emoji: "🩸",
            results: [
                { name: "Hemoglobin", value: "13.8 g/dL", normal: "12.0 - 15.5", flag: "normal" },
                { name: "White Blood Cells", value: "7.2 x10³/µL", normal: "4.0 - 11.0", flag: "normal" },
                { name: "Platelets", value: "245 x10³/µL", normal: "150 - 450", flag: "normal" },
            ]
        },
        {
            id: 2,
            testName: "Lipid Profile",
            date: "05 April 2026",
            lab: "MediLab Diagnostics",
            status: "Abnormal",
            doctor: "Dr. Rajesh Kumar",
            emoji: "🧪",
            results: [
                { name: "Total Cholesterol", value: "248 mg/dL", normal: "< 200", flag: "high" },
                { name: "LDL Cholesterol", value: "162 mg/dL", normal: "< 100", flag: "high" },
                { name: "HDL Cholesterol", value: "42 mg/dL", normal: "> 40", flag: "normal" },
            ]
        },
        {
            id: 3,
            testName: "Blood Glucose (Fasting)",
            date: "28 March 2026",
            lab: "City Diagnostics",
            status: "Normal",
            doctor: "Dr. Priya Sharma",
            emoji: "🩸",
            results: [
                { name: "Fasting Blood Sugar", value: "92 mg/dL", normal: "70 - 99", flag: "normal" },
            ]
        },
    ];

    const filteredResults = labResults.filter(result =>
        result.testName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        result.doctor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const recentResults = filteredResults;
    const abnormalResults = filteredResults.filter(r => r.status === "Abnormal");

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Lab Results</h1>
                            <p className="text-gray-500 mt-1">View and track your laboratory test results</p>
                        </div>

                        <button 
                            className="bg-[#0057A3] hover:bg-[#003F7A] text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-sm"
                            onClick={() => alert("Upload New Lab Report - Feature coming soon")}
                        >
                            📤 Upload Report
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
                            placeholder="Search test name or doctor..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#0057A3] focus:ring-2 focus:ring-[#0057A3]/20"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    </div>

                    <div className="flex bg-white border border-gray-200 rounded-2xl p-1">
                        {['recent', 'abnormal'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                                    activeTab === tab 
                                        ? 'bg-[#0057A3] text-white shadow-sm' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {tab === 'recent' ? 'Recent Results' : 'Abnormal Results'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lab Results List */}
                <div className="grid gap-6">
                    {(activeTab === 'recent' ? recentResults : abnormalResults).length > 0 ? (
                        (activeTab === 'recent' ? recentResults : abnormalResults).map((result) => (
                            <div 
                                key={result.id}
                                className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-[#E6F0FA] rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                                        {result.emoji}
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-semibold text-2xl text-gray-800">{result.testName}</h3>
                                                <p className="text-gray-500 mt-1">{result.date} • {result.lab}</p>
                                                <p className="text-[#0057A3] text-sm mt-1">Ordered by {result.doctor}</p>
                                            </div>
                                            <span className={`px-5 py-1.5 text-sm font-semibold rounded-full ${
                                                result.status === 'Normal' 
                                                    ? 'bg-green-100 text-green-700' 
                                                    : 'bg-red-100 text-red-700'
                                            }`}>
                                                {result.status}
                                            </span>
                                        </div>

                                        {/* Results Table */}
                                        <div className="mt-6 overflow-x-auto">
                                            <table className="w-full min-w-full text-sm">
                                                <thead>
                                                    <tr className="border-b border-gray-200">
                                                        <th className="text-left py-3 font-medium text-gray-600">Test Parameter</th>
                                                        <th className="text-left py-3 font-medium text-gray-600">Your Result</th>
                                                        <th className="text-left py-3 font-medium text-gray-600">Normal Range</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {result.results.map((item, index) => (
                                                        <tr key={index} className="border-b border-gray-100 last:border-none">
                                                            <td className="py-3 text-gray-700">{item.name}</td>
                                                            <td className="py-3 font-medium">
                                                                {item.value}
                                                                {item.flag === 'high' && <span className="text-red-500 ml-2">↑</span>}
                                                                {item.flag === 'low' && <span className="text-blue-500 ml-2">↓</span>}
                                                            </td>
                                                            <td className="py-3 text-gray-500">{item.normal}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col gap-3 md:w-48 pt-2">
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
                            <p className="text-6xl mb-4">🧪</p>
                            <p className="text-xl font-medium text-gray-600">No lab results found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}