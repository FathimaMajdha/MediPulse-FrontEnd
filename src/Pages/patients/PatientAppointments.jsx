"use client";
import { useState } from 'react';

export default function PatientAppointments() {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [searchTerm, setSearchTerm] = useState('');

    // Sample Appointments Data
    const appointments = [
        {
            id: 1,
            doctor: "Dr. Anjali Menon",
            specialty: "Cardiologist",
            date: "15 April 2026",
            time: "10:30 AM",
            type: "In-person",
            reason: "Follow-up Consultation",
            status: "Confirmed",
            avatar: "👩‍⚕️",
        },
        {
            id: 2,
            doctor: "Dr. Rajesh Kumar",
            specialty: "General Physician",
            date: "18 April 2026",
            time: "02:15 PM",
            type: "Video Call",
            reason: "Fever & Cough",
            status: "Pending",
            avatar: "👨‍⚕️",
        },
        {
            id: 3,
            doctor: "Dr. Priya Sharma",
            specialty: "Pediatrician",
            date: "20 April 2026",
            time: "11:00 AM",
            type: "In-person",
            reason: "Child Vaccination",
            status: "Confirmed",
            avatar: "👩‍⚕️",
        },
    ];

    const filteredAppointments = appointments.filter(app =>
        app.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.reason.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const upcoming = filteredAppointments.filter(a => a.status !== "Completed");
    const past = filteredAppointments.filter(a => a.status === "Completed");

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">My Appointments</h1>
                            <p className="text-gray-500 mt-1">Manage your upcoming and past visits</p>
                        </div>

                        <button 
                            className="bg-[#0057A3] hover:bg-[#003F7A] text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-sm"
                            onClick={() => alert("Book New Appointment - Modal would open here")}
                        >
                            <span className="text-xl">+</span>
                            Book New Appointment
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Search & Tabs */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search appointments by doctor or reason..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-[#0057A3] focus:ring-2 focus:ring-[#0057A3]/20"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    </div>

                    <div className="flex bg-white border border-gray-200 rounded-2xl p-1">
                        {['upcoming', 'past'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                                    activeTab === tab 
                                        ? 'bg-[#0057A3] text-white shadow-sm' 
                                        : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {tab === 'upcoming' ? 'Upcoming' : 'Past'}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Appointments List */}
                <div className="grid gap-6">
                    {(activeTab === 'upcoming' ? upcoming : past).length > 0 ? (
                        (activeTab === 'upcoming' ? upcoming : past).map((appointment) => (
                            <div 
                                key={appointment.id}
                                className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    {/* Doctor Info */}
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="w-16 h-16 bg-[#E6F0FA] rounded-2xl flex items-center justify-center text-4xl">
                                            {appointment.avatar}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-xl text-gray-800">
                                                {appointment.doctor}
                                            </h3>
                                            <p className="text-[#0057A3] font-medium">{appointment.specialty}</p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {appointment.date} • {appointment.time}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Visit Details */}
                                    <div className="flex-1 md:text-center">
                                        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-2xl">
                                            <span className="text-lg">{appointment.type === 'Video Call' ? '📹' : '🏥'}</span>
                                            <span className="font-medium text-gray-700">{appointment.type}</span>
                                        </div>
                                        <p className="mt-3 text-gray-600">{appointment.reason}</p>
                                    </div>

                                    {/* Status & Actions */}
                                    <div className="flex flex-col md:items-end gap-4">
                                        <span className={`px-5 py-1.5 text-sm font-semibold rounded-full ${
                                            appointment.status === 'Confirmed' 
                                                ? 'bg-green-100 text-green-700' 
                                                : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                            {appointment.status}
                                        </span>

                                        <div className="flex gap-3">
                                            <button className="px-5 py-2.5 text-sm border border-gray-300 hover:bg-gray-50 rounded-2xl transition-colors">
                                                Reschedule
                                            </button>
                                            <button className="px-5 py-2.5 text-sm bg-[#0057A3] text-white rounded-2xl hover:bg-[#003F7A] transition-all">
                                                Message Doctor
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
                            <p className="text-6xl mb-4">📅</p>
                            <p className="text-xl font-medium text-gray-600">No appointments found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}