import React from 'react';
import Navbar from '../../Components/Navbar';

export default function FeaturesLabIntegration() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-[#0057A3] font-bold rounded-full text-sm mb-4">CONNECTIVITY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bi-directional Lab Integrations</h1>
          <p className="text-xl text-gray-600">
            Order tests and receive results directly within the patient chart. No more faxing or logging into separate portals.
          </p>
        </div>

        {/* Integration Graphic */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 mb-20 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-4 md:space-x-12 w-full max-w-4xl">
            {/* EHR Side */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[#E6F0FA] rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-blue-100 mb-4 z-10">🏥</div>
              <p className="font-bold text-gray-800">MediPulse EHR</p>
            </div>
            
            {/* Arrows */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
               <div className="h-0.5 w-full bg-gray-200 absolute top-1/2"></div>
               <div className="bg-white px-4 z-10 text-[#0057A3] text-sm font-bold flex flex-col items-center">
                 <span>Order →</span>
                 <span>← Result</span>
               </div>
            </div>

            {/* Lab Side */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-gray-200 mb-4 z-10">🔬</div>
              <p className="font-bold text-gray-800">National Labs</p>
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Supported Lab Networks</h3>
            <p className="text-gray-600 mb-6">We maintain active HL7 interfaces with all major national laboratories, and can build custom connections for local hospital labs.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 text-center shadow-sm">Quest Diagnostics</div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 text-center shadow-sm">LabCorp</div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 text-center shadow-sm">BioReference</div>
              <div className="p-4 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 text-center shadow-sm">Local Hospital HL7</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex">
              <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold mr-4">1</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Automated Result Matching</h4>
                <p className="text-gray-600">Results are automatically parsed and attached to the correct patient chart using demographic matching.</p>
              </div>
            </div>
            <div className="flex">
              <div className="shrink-0 w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold mr-4">2</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Critical Value Alerts</h4>
                <p className="text-gray-600">Abnormal and panic values immediately trigger push notifications to the provider's dashboard and mobile app.</p>
              </div>
            </div>
            <div className="flex">
              <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">3</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Patient Portal Sharing</h4>
                <p className="text-gray-600">With one click, approve results to be shared directly to the patient's secure portal along with your notes.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
