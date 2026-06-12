import React from 'react';
import Navbar from '../../Components/Navbar';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h1>
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-gray-600 text-lg">Read success stories from practices that scaled with MediPulse.</p>
        </div>
      </div>
    </div>
  );
}
