import React from 'react';
import Navbar from '../../Components/Navbar';

export default function MobileAccess() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-hidden">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your practice, right in your pocket.</h1>
            <p className="text-xl text-gray-600 mb-8">
              The MediPulse Provider App gives you full access to patient charts, schedules, and secure messaging from anywhere. Available for iOS and Android.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start">
                <span className="text-[#00A86B] mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900">Mobile E-Prescribe</h4>
                  <p className="text-gray-500 text-sm">Send prescriptions and respond to refill requests on the go.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A86B] mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900">Dictate Notes</h4>
                  <p className="text-gray-500 text-sm">Use your phone's microphone for highly accurate clinical dictation.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#00A86B] mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-bold text-gray-900">Secure Image Capture</h4>
                  <p className="text-gray-500 text-sm">Take photos of wounds or documents that save directly to the chart, not your camera roll.</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white rounded-xl font-bold shadow-md hover:bg-gray-800 transition-colors flex items-center gap-2">
                <span>🍎</span> App Store
              </button>
              <button className="px-6 py-3 bg-black text-white rounded-xl font-bold shadow-md hover:bg-gray-800 transition-colors flex items-center gap-2">
                <span>🤖</span> Google Play
              </button>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative flex justify-center">
            {/* Phone Mockup Frame */}
            <div className="w-[300px] h-[600px] bg-black rounded-[40px] border-[14px] border-black shadow-2xl relative overflow-hidden flex flex-col">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-xl w-32 mx-auto z-20"></div>
              
              {/* Screen Content */}
              <div className="bg-gray-50 flex-1 overflow-hidden">
                <div className="bg-[#0057A3] text-white p-6 pb-8 pt-10">
                  <h3 className="font-bold text-xl">Today's Schedule</h3>
                  <p className="text-blue-200 text-sm">3 remaining</p>
                </div>
                <div className="p-4 -mt-4 space-y-3">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative">
                    <p className="text-xs font-bold text-[#0057A3]">02:00 PM</p>
                    <p className="font-bold text-gray-800">Sarah Jenkins</p>
                    <p className="text-xs text-gray-500">Telehealth</p>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">🎥</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <p className="text-xs font-bold text-[#0057A3]">03:15 PM</p>
                    <p className="font-bold text-gray-800">Marcus Reed</p>
                    <p className="text-xs text-gray-500">Follow-up</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-red-100">
                    <div className="flex gap-2">
                        <span>⚠️</span>
                        <div>
                            <p className="font-bold text-red-600 text-sm">Critical Lab Alert</p>
                            <p className="text-xs text-gray-600">Review K+ for John D.</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="h-16 bg-white border-t border-gray-200 flex justify-around items-center px-4 z-10 pb-2">
                <div className="text-[#0057A3] font-bold text-xl">📅</div>
                <div className="text-gray-400 text-xl">👥</div>
                <div className="text-gray-400 text-xl">💬</div>
                <div className="text-gray-400 text-xl">⚙️</div>
              </div>
            </div>
            
            {/* Background Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
