import React from 'react';
import Navbar from '../../Components/Navbar';

export default function ProviderAnalytics() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Practice Analytics</h1>
        <p className="text-gray-500 mb-8">Performance insights for the last 30 days.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">👥</div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Total Patients Seen</p>
                <p className="text-4xl font-bold text-[#0057A3]">428</p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1 font-medium">↑ 12% from last month</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">⏱️</div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Avg. Wait Time</p>
                <p className="text-4xl font-bold text-indigo-600">14 min</p>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1 font-medium">↓ 3 min from last month</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">⭐</div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Patient Satisfaction</p>
                <p className="text-4xl font-bold text-yellow-600">4.9 / 5</p>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1 font-medium">Based on 112 reviews</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm h-80 flex flex-col items-center justify-center">
                <p className="text-xl text-gray-700 font-medium mb-4">📊 Patient Demographics</p>
                <div className="w-48 h-48 rounded-full border-[16px] border-[#0057A3] border-t-indigo-400 border-r-blue-300 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm text-gray-500 font-medium">Interactive</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm h-80 flex flex-col justify-end p-8 relative">
                <p className="absolute top-6 left-6 text-xl text-gray-700 font-medium">📈 Appointments Trend</p>
                <div className="flex items-end gap-4 h-40 w-full">
                    {[40, 60, 45, 80, 50, 90, 75].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-blue-100 to-[#0057A3] rounded-t-sm" style={{height: `${h}%`}}></div>
                    ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
