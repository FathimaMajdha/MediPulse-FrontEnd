import React, { useState } from 'react';
import Navbar from '../../Components/Navbar';

export default function ProviderLabOrders() {
  const [activeTab, setActiveTab] = useState('pending');

  const orders = [
      { id: "ORD-928", patient: "Alice Smith", test: "Comprehensive Metabolic Panel", date: "12 Jun 2026", status: "Pending", priority: "Routine" },
      { id: "ORD-929", patient: "John Doe", test: "Lipid Panel", date: "11 Jun 2026", status: "Completed", priority: "Routine" },
      { id: "ORD-930", patient: "Robert Johnson", test: "HbA1c", date: "10 Jun 2026", status: "Completed", priority: "Routine" },
      { id: "ORD-931", patient: "Emily Davis", test: "CBC with Differential", date: "12 Jun 2026", status: "Pending", priority: "STAT" },
  ];

  const displayedOrders = orders.filter(o => activeTab === 'pending' ? o.status === 'Pending' : o.status === 'Completed');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-4xl font-bold text-gray-900">Lab Orders</h1>
                <p className="text-gray-500 mt-2">Order tests and review results.</p>
            </div>
            <button className="px-6 py-3 bg-[#0057A3] hover:bg-[#003F7A] text-white font-medium rounded-xl shadow-sm transition-all">
                + New Lab Order
            </button>
        </div>

        <div className="flex mb-6 bg-white border border-gray-200 rounded-xl p-1 max-w-sm">
            {['pending', 'completed'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2 rounded-lg font-medium transition-all capitalize ${
                        activeTab === tab 
                            ? 'bg-gray-100 text-[#0057A3] shadow-sm' 
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-500 uppercase tracking-wider">
                        <th className="p-4 font-semibold">Order ID</th>
                        <th className="p-4 font-semibold">Patient</th>
                        <th className="p-4 font-semibold">Test Name</th>
                        <th className="p-4 font-semibold">Date Ordered</th>
                        <th className="p-4 font-semibold">Priority</th>
                        <th className="p-4 font-semibold text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {displayedOrders.map(order => (
                        <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 text-gray-500 font-mono text-sm">{order.id}</td>
                            <td className="p-4 font-bold text-gray-800">{order.patient}</td>
                            <td className="p-4 text-[#0057A3] font-medium">{order.test}</td>
                            <td className="p-4 text-gray-600 text-sm">{order.date}</td>
                            <td className="p-4">
                                <span className={`px-2 py-1 rounded text-xs font-bold ${order.priority === 'STAT' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
                                    {order.priority}
                                </span>
                            </td>
                            <td className="p-4 text-right">
                                {order.status === 'Completed' ? (
                                    <button className="px-4 py-1.5 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 rounded-lg text-sm font-medium transition-all">View Results</button>
                                ) : (
                                    <button className="px-4 py-1.5 bg-white hover:bg-gray-50 text-gray-600 border border-gray-200 rounded-lg text-sm font-medium transition-all">Edit Order</button>
                                )}
                            </td>
                        </tr>
                    ))}
                    {displayedOrders.length === 0 && (
                        <tr><td colSpan="6" className="p-8 text-center text-gray-500 font-medium">No {activeTab} orders.</td></tr>
                    )}
                </tbody>
            </table>
        </div>

      </div>
    </div>
  );
}
