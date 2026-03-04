export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <span className="text-3xl">🏥</span>
                            <span className="font-bold text-2xl">MediPulse</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Transforming healthcare through innovative EHR solutions. 
                            Trusted by 500+ practices nationwide.
                        </p>
                        <div className="flex space-x-4">
                            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0057A3] transition-colors">
                                <span className="text-xl">📘</span>
                            </button>
                            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0057A3] transition-colors">
                                <span className="text-xl">🐦</span>
                            </button>
                            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0057A3] transition-colors">
                                <span className="text-xl">📷</span>
                            </button>
                            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0057A3] transition-colors">
                                <span className="text-xl">🔗</span>
                            </button>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><button className="text-gray-400 hover:text-white transition-colors">Features</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">Pricing</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">Integrations</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">API</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">Roadmap</button></li>
                        </ul>
                    </div>

                    {/* Solutions Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Solutions</h3>
                        <ul className="space-y-2">
                            <li><button className="text-gray-400 hover:text-white transition-colors">For Patients</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">For Providers</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">For Clinics</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">For Hospitals</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">Telehealth</button></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><button className="text-gray-400 hover:text-white transition-colors">Documentation</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">Help Center</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">Contact Us</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">Status Page</button></li>
                            <li><button className="text-gray-400 hover:text-white transition-colors">Security</button></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="border-t border-gray-800 pt-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="font-semibold text-lg mb-1">Stay Updated</h3>
                            <p className="text-gray-400 text-sm">Get the latest news and updates from MediPulse</p>
                        </div>
                        <div className="flex w-full md:w-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#0057A3]"
                            />
                            <button className="px-6 py-2 bg-[#0057A3] text-white rounded-r-lg hover:bg-[#003F7A] transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                    <div className="mb-4 md:mb-0">
                        © 2024 MediPulse. All rights reserved. HIPAA Compliant.
                    </div>
                    <div className="flex space-x-6">
                        <button className="hover:text-white transition-colors">Privacy Policy</button>
                        <button className="hover:text-white transition-colors">Terms of Service</button>
                        <button className="hover:text-white transition-colors">Cookie Policy</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}