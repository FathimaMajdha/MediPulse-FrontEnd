import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';

export default function ProviderSchedule() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');

  const appointments = [
      { id: 1, patient: "John Doe", time: "09:00 AM", type: "Follow-up", status: "Checked In", reason: "Blood pressure check" },
      { id: 2, patient: "Alice Smith", time: "09:30 AM", type: "Annual Physical", status: "Confirmed", reason: "Yearly exam" },
      { id: 3, patient: "Robert Johnson", time: "10:15 AM", type: "Lab Review", status: "Pending", reason: "Discuss lipid panel" },
      { id: 4, patient: "Emily Davis", time: "11:00 AM", type: "New Patient", status: "Completed", reason: "Initial consultation" },
      { id: 5, patient: "Michael Brown", time: "01:00 PM", type: "Telehealth", status: "Confirmed", reason: "Cold symptoms" },
  ];

  const filteredAppointments = appointments.filter(app => 
      app.patient.toLowerCase().includes(searchTerm.toLowerCase()) || 
      app.reason.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedAppointments = filteredAppointments.filter(app => 
      activeTab === 'upcoming' ? app.status !== 'Completed' : app.status === 'Completed'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
                <h1 className="text-4xl font-bold text-gray-900">My Schedule</h1>
                <p className="text-gray-500 mt-2">Manage your appointments for today.</p>
            </div>
            <button className="px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-[#0057A3] rounded-xl font-medium transition-all shadow-sm">
                + New Block
            </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
                <input
                    type="text"
                    placeholder="Search by patient name or reason..."
                    className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#0057A3] focus:ring-2 focus:ring-[#0057A3]/20 text-gray-800 placeholder-gray-400 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
            <div className="flex bg-white border border-gray-200 rounded-2xl p-1">
                {['upcoming', 'past'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-2 rounded-xl font-medium transition-all capitalize ${
                            activeTab === tab 
                                ? 'bg-[#0057A3] text-white shadow-sm' 
                                : 'text-gray-600 hover:bg-gray-100'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        <div className="space-y-4">
            {displayedAppointments.length > 0 ? displayedAppointments.map((appt) => (
                <div key={appt.id} className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center gap-6 group">
                    <div className="w-24 text-center border-r border-gray-100 pr-6">
                        <p className="text-2xl font-bold text-[#0057A3]">{appt.time.split(' ')[0]}</p>
                        <p className="text-sm text-gray-500 font-bold">{appt.time.split(' ')[1]}</p>
                    </div>
                    <div className="flex-1 pl-2">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                            {appt.patient}
                            <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 font-medium">{appt.type}</span>
                        </h3>
                        <p className="text-gray-500 mt-1">{appt.reason}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-3">
                        <span className={`px-4 py-1 text-xs font-semibold rounded-full ${
                            appt.status === 'Checked In' ? 'bg-green-100 text-green-700' :
                            appt.status === 'Confirmed' ? 'bg-blue-100 text-blue-700' :
                            appt.status === 'Completed' ? 'bg-gray-100 text-gray-600' :
                            'bg-yellow-100 text-yellow-700'
                        }`}>
                            {appt.status}
                        </span>
                        <div className="flex gap-2">
                            {activeTab === 'upcoming' && (
                                <button className="px-4 py-2 text-sm bg-[#0057A3] hover:bg-[#003F7A] text-white font-medium rounded-lg transition-colors">
                                    Start Visit
                                </button>
                            )}
                            <button className="px-4 py-2 text-sm bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-lg transition-colors">
                                View Chart
                            </button>
                        </div>
                    </div>
                </div>
            )) : (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
                    <p className="text-6xl mb-4">📅</p>
                    <p className="text-xl font-medium text-gray-500">No {activeTab} appointments found.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
