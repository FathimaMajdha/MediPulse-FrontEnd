import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';

export default function ProviderPatientList() {
  const [searchTerm, setSearchTerm] = useState('');

  const patients = [
      { id: "PT-1001", name: "John Doe", age: 45, gender: "M", lastVisit: "12 May 2026", condition: "Hypertension", risk: "Medium" },
      { id: "PT-1002", name: "Alice Smith", age: 32, gender: "F", lastVisit: "02 Jun 2026", condition: "Healthy", risk: "Low" },
      { id: "PT-1003", name: "Robert Johnson", age: 68, gender: "M", lastVisit: "10 Jun 2026", condition: "Diabetes Type II", risk: "High" },
      { id: "PT-1004", name: "Emily Davis", age: 28, gender: "F", lastVisit: "New Patient", condition: "Pregnancy", risk: "Medium" },
      { id: "PT-1005", name: "Michael Brown", age: 52, gender: "M", lastVisit: "28 Apr 2026", condition: "Asthma", risk: "Low" },
  ];

  const filteredPatients = patients.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
                <h1 className="text-4xl font-bold text-gray-900">Patient Roster</h1>
                <p className="text-gray-500 mt-2">Manage and view your assigned patients.</p>
            </div>
            <button className="px-6 py-3 bg-[#0057A3] hover:bg-[#003F7A] text-white font-medium rounded-xl transition-all shadow-sm">
                + Add Patient
            </button>
        </div>

        <div className="relative mb-8 max-w-xl">
            <input
                type="text"
                placeholder="Search by patient name or ID..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#0057A3] focus:ring-2 focus:ring-[#0057A3]/20 text-gray-900 placeholder-gray-400 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                            <th className="p-4 font-semibold">Patient ID</th>
                            <th className="p-4 font-semibold">Name</th>
                            <th className="p-4 font-semibold">Demographics</th>
                            <th className="p-4 font-semibold">Primary Condition</th>
                            <th className="p-4 font-semibold">Last Visit</th>
                            <th className="p-4 font-semibold">Risk Level</th>
                            <th className="p-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredPatients.map(p => (
                            <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 text-[#0057A3] font-mono text-sm">{p.id}</td>
                                <td className="p-4 font-bold text-gray-800 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#E6F0FA] text-[#0057A3] flex items-center justify-center text-xs font-bold">
                                        {p.name.charAt(0)}
                                    </div>
                                    {p.name}
                                </td>
                                <td className="p-4 text-gray-600 text-sm">{p.age} y.o. • {p.gender}</td>
                                <td className="p-4 text-gray-700">{p.condition}</td>
                                <td className="p-4 text-gray-600 text-sm">{p.lastVisit}</td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        p.risk === 'High' ? 'bg-red-100 text-red-700' :
                                        p.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                        'bg-green-100 text-green-700'
                                    }`}>
                                        {p.risk}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <button className="px-4 py-2 bg-white hover:bg-gray-50 text-[#0057A3] border border-gray-200 rounded-lg text-sm font-medium transition-all">
                                        View Chart
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {filteredPatients.length === 0 && (
                            <tr>
                                <td colSpan="7" className="p-8 text-center text-gray-500 font-medium">No patients found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </div>
  );
}
