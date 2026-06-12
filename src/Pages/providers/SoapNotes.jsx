import React from 'react';
import Navbar from '../../Components/Navbar';

export default function SoapNotes() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Clinical SOAP Note</h1>
        <p className="text-gray-500 mb-8">Document your encounter.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                {/* Subjective */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm focus-within:border-[#0057A3] focus-within:ring-1 focus-within:ring-[#0057A3] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#E6F0FA] text-[#0057A3] flex items-center justify-center font-bold">S</div>
                        <h2 className="text-xl font-bold text-gray-800">Subjective</h2>
                    </div>
                    <textarea 
                        rows="4" 
                        placeholder="Patient's chief complaint, history of present illness..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-800 focus:outline-none focus:bg-white resize-none transition-all"
                    ></textarea>
                </div>

                {/* Objective */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm focus-within:border-[#0057A3] focus-within:ring-1 focus-within:ring-[#0057A3] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-[#E6F0FA] text-[#0057A3] flex items-center justify-center font-bold">O</div>
                        <h2 className="text-xl font-bold text-gray-800">Objective</h2>
                    </div>
                    <textarea 
                        rows="4" 
                        placeholder="Vital signs, physical exam findings, lab results..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-800 focus:outline-none focus:bg-white resize-none transition-all"
                    ></textarea>
                </div>

                {/* Assessment */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm focus-within:border-[#00A86B] focus-within:ring-1 focus-within:ring-[#00A86B] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-green-50 text-[#00A86B] flex items-center justify-center font-bold">A</div>
                        <h2 className="text-xl font-bold text-gray-800">Assessment</h2>
                    </div>
                    <textarea 
                        rows="3" 
                        placeholder="Diagnosis, differential diagnosis..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-800 focus:outline-none focus:bg-white resize-none transition-all"
                    ></textarea>
                </div>

                {/* Plan */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm focus-within:border-[#00A86B] focus-within:ring-1 focus-within:ring-[#00A86B] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-green-50 text-[#00A86B] flex items-center justify-center font-bold">P</div>
                        <h2 className="text-xl font-bold text-gray-800">Plan</h2>
                    </div>
                    <textarea 
                        rows="4" 
                        placeholder="Treatment plan, medications prescribed, follow-up..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-800 focus:outline-none focus:bg-white resize-none transition-all"
                    ></textarea>
                </div>

                <div className="flex justify-end gap-4">
                    <button className="px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium transition-all">Save Draft</button>
                    <button className="px-8 py-3 bg-[#0057A3] hover:bg-[#003F7A] text-white font-bold rounded-xl shadow-sm transition-all">
                        Sign & Submit Note
                    </button>
                </div>
            </div>

            {/* Sidebar Tools */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-gray-800 mb-4">Patient Context</h3>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:border-[#0057A3] appearance-none mb-4 font-medium">
                        <option>Select Patient...</option>
                        <option>John Doe (DOB: 1980-01-15)</option>
                        <option>Alice Smith (DOB: 1994-05-22)</option>
                    </select>
                    <div className="p-4 bg-[#E6F0FA] rounded-xl border border-blue-100 space-y-2">
                        <div className="flex justify-between"><span className="text-[#0057A3] text-sm font-semibold">Vitals</span><span className="text-[#0057A3] font-bold text-sm cursor-pointer hover:underline">Import ↓</span></div>
                        <div className="text-sm text-gray-700">BP: 120/80 mmHg<br/>HR: 72 bpm<br/>Temp: 98.6 °F</div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-gray-800">AI Scribe <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded font-semibold ml-2">Beta</span></h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">Record your patient conversation to automatically generate a SOAP note draft.</p>
                    <button className="w-full py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-xl transition-all flex items-center justify-center gap-2 font-bold group shadow-sm">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span> Start Recording
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
