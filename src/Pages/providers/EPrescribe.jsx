import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';

export default function EPrescribe() {
  const [medication, setMedication] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">E-Prescribe</h1>
        <p className="text-gray-500 mb-8">Securely prescribe and route medications to pharmacies.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Prescription Form */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6">New Prescription</h2>
                
                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Patient</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#0057A3] focus:bg-white appearance-none">
                            <option>Select Patient...</option>
                            <option>John Doe</option>
                            <option>Alice Smith</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Medication Search</label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type medication name (e.g. Amoxicillin)"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#0057A3] focus:bg-white text-gray-900"
                                value={medication}
                                onChange={(e) => setMedication(e.target.value)}
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">💊</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Dose</label>
                            <input type="text" placeholder="e.g. 500mg" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-[#0057A3] focus:bg-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Frequency</label>
                            <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#0057A3] focus:bg-white appearance-none">
                                <option>BID (Twice daily)</option>
                                <option>QD (Once daily)</option>
                                <option>TID (Three times daily)</option>
                                <option>PRN (As needed)</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Dispense</label>
                            <input type="number" placeholder="Quantity" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-[#0057A3] focus:bg-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Refills</label>
                            <input type="number" placeholder="0" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-900 focus:outline-none focus:border-[#0057A3] focus:bg-white" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Pharmacy Routing</label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#0057A3] focus:bg-white appearance-none">
                            <option>Patient's Default: CVS #1234 (Main St)</option>
                            <option>Walgreens #5678 (Oak Ave)</option>
                            <option>Mail Order: Express Scripts</option>
                        </select>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-200 flex justify-end">
                        <button className="px-8 py-3 bg-[#0057A3] hover:bg-[#003F7A] text-white font-bold rounded-xl shadow-sm transition-all flex items-center gap-2">
                            <span>Send to Pharmacy</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Active Prescriptions Panel */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Patient Active Meds</h2>
                <div className="p-4 mb-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
                    <p className="text-sm text-gray-500 font-medium">Select a patient to view their active medication list and check for drug interactions.</p>
                </div>

                <div className="space-y-3 opacity-60 pointer-events-none">
                    <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg bg-gray-50">
                        <div>
                            <p className="font-bold text-gray-800">Lisinopril 20mg</p>
                            <p className="text-xs text-gray-500">1 tab PO QD</p>
                        </div>
                        <button className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded text-xs font-medium">Refill</button>
                    </div>
                    <div className="flex justify-between items-center p-3 border border-gray-200 rounded-lg bg-gray-50">
                        <div>
                            <p className="font-bold text-gray-800">Atorvastatin 40mg</p>
                            <p className="text-xs text-gray-500">1 tab PO QHS</p>
                        </div>
                        <button className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded text-xs font-medium">Refill</button>
                    </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <p className="text-sm text-green-800 font-medium">No known drug-drug interactions detected for pending prescription.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
