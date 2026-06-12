import React from 'react';
import Navbar from '../../Components/Navbar';

export default function HipaaCompliance() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
          <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Bank-Grade Security & HIPAA Compliance</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Your patient data is your most valuable asset. We protect it with enterprise-level encryption and strict access controls.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Security Pillar 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-[#0057A3] rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Encryption</h3>
            <p className="text-gray-600">All data is encrypted in transit using TLS 1.3 and at rest using AES-256 military-grade encryption. We utilize dedicated key management systems to ensure absolute data isolation.</p>
          </div>

          {/* Security Pillar 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Audit Logs</h3>
            <p className="text-gray-600">Track who viewed what, and when. Our immutable audit logs record every action taken in the system, ensuring complete accountability for HIPAA audits.</p>
          </div>

          {/* Security Pillar 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Role-Based Access</h3>
            <p className="text-gray-600">Enforce principle of least privilege. Custom roles allow you to restrict access so staff only see the PHI necessary for their specific job functions.</p>
          </div>
        </div>

        <div className="mt-16 bg-[#0057A3] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-xl">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">Need our BAA?</h2>
            <p className="text-blue-100">We sign a Business Associate Agreement (BAA) with every covered entity on our platform. You can review our standard agreement or contact legal.</p>
          </div>
          <button className="px-8 py-3 bg-white text-[#0057A3] font-bold rounded-xl shadow hover:bg-gray-50 transition-colors whitespace-nowrap">
            Download BAA Template
          </button>
        </div>

      </div>
    </div>
  );
}
