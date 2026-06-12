import React from 'react';
import Navbar from '../../Components/Navbar';

export default function ProviderDashboard() {
  const stats = [
    { label: "Patients Today", value: "24", icon: "👨‍⚕️", color: "blue-600", bg: "blue-50" },
    { label: "Pending Labs", value: "7", icon: "🧪", color: "green-600", bg: "green-50" },
    { label: "Messages", value: "12", icon: "💬", color: "blue-600", bg: "blue-50" },
    { label: "Refills Needed", value: "5", icon: "💊", color: "green-600", bg: "green-50" }
  ];

  const schedule = [
    { time: "09:00 AM", name: "John Doe", type: "Follow-up", status: "In Waiting Room" },
    { time: "09:30 AM", name: "Alice Smith", type: "Annual Physical", status: "Scheduled" },
    { time: "10:15 AM", name: "Robert Johnson", type: "Lab Review", status: "Scheduled" },
    { time: "11:00 AM", name: "Emily Davis", type: "New Patient", status: "Scheduled" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Good morning, Dr. Chen</h1>
                <p className="text-gray-600">Here's what's happening at your practice today.</p>
            </div>
            <button className="px-6 py-3 bg-[#0057A3] text-white rounded-xl font-medium shadow-sm hover:bg-[#003F7A] transition-all">
                Start Telehealth
            </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">{stat.label}</p>
                            <p className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-xl bg-${stat.bg} flex items-center justify-center text-2xl`}>
                            {stat.icon}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Schedule */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Today's Schedule</h2>
                    <button className="text-sm text-[#0057A3] hover:underline">View Calendar →</button>
                </div>
                <div className="space-y-4">
                    {schedule.map((appt, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="text-[#0057A3] font-bold w-20">{appt.time}</div>
                                <div>
                                    <p className="font-bold text-gray-800">{appt.name}</p>
                                    <p className="text-xs text-gray-500">{appt.type}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`text-xs px-3 py-1 rounded-full font-medium ${appt.status === 'In Waiting Room' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-200 text-gray-700'}`}>
                                    {appt.status}
                                </span>
                                <button className="p-2 text-gray-400 hover:text-[#0057A3] hover:bg-blue-50 rounded-lg transition-colors border border-gray-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Alerts */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Critical Alerts</h2>
                <div className="space-y-4">
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                        <div className="flex items-start gap-3">
                            <span className="text-red-500 mt-1">⚠️</span>
                            <div>
                                <p className="text-sm font-bold text-gray-800">Abnormal Lab Result</p>
                                <p className="text-xs text-gray-600 mt-1">Patient: Mark Wilson<br/>Test: CMP - Potassium 6.8</p>
                                <button className="mt-3 text-xs font-bold text-red-600 hover:text-red-800">Review Now →</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-xl">
                        <div className="flex items-start gap-3">
                            <span className="text-yellow-600 mt-1">💊</span>
                            <div>
                                <p className="text-sm font-bold text-gray-800">Refill Request Escalation</p>
                                <p className="text-xs text-gray-600 mt-1">Pharmacy requires PA for Lisinopril 20mg.</p>
                                <button className="mt-3 text-xs font-bold text-yellow-600 hover:text-yellow-800">Action Required →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
