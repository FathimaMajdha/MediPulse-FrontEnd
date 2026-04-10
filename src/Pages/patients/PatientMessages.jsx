"use client";
import { useState } from 'react';

export default function PatientMessages() {
    const [selectedChat, setSelectedChat] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    // Sample Conversations
    const conversations = [
        {
            id: 1,
            doctor: "Dr. Anjali Menon",
            specialty: "Cardiologist",
            avatar: "👩‍⚕️",
            lastMessage: "Your latest lipid profile looks better. Please continue the medication.",
            time: "2 min ago",
            unread: 2,
            messages: [
                { id: 1, from: "doctor", text: "Hello! How are you feeling after the last visit?", time: "10:15 AM" },
                { id: 2, from: "patient", text: "Much better, thank you doctor.", time: "10:17 AM" },
                { id: 3, from: "doctor", text: "Your latest lipid profile looks better. Please continue the medication.", time: "10:20 AM" },
            ]
        },
        {
            id: 2,
            doctor: "Dr. Rajesh Kumar",
            specialty: "General Physician",
            avatar: "👨‍⚕️",
            lastMessage: "Please take the prescribed antibiotics for 5 days.",
            time: "Yesterday",
            unread: 0,
            messages: [
                { id: 1, from: "doctor", text: "Did you start the antibiotics?", time: "Yesterday" },
                { id: 2, from: "patient", text: "Yes doctor, started yesterday.", time: "Yesterday" },
            ]
        },
        {
            id: 3,
            doctor: "Dr. Priya Sharma",
            specialty: "Pediatrician",
            avatar: "👩‍⚕️",
            lastMessage: "Vaccination schedule updated for your child.",
            time: "2 days ago",
            unread: 1,
            messages: []
        }
    ];

    const currentChat = conversations.find(chat => chat.id === selectedChat);

    const sendMessage = () => {
        if (!newMessage.trim() || !currentChat) return;
        alert("Message sent! (In real app, this would be added to chat)");
        setNewMessage('');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Messages</h1>
                            <p className="text-gray-500 mt-1">Communicate securely with your healthcare providers</p>
                        </div>
                        <button 
                            className="bg-[#0057A3] hover:bg-[#003F7A] text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all"
                            onClick={() => alert("New Message - Select Provider")}
                        >
                            ✉️ New Message
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-180px)]">
                    
                    {/* Chat List Sidebar */}
                    <div className="lg:col-span-5 bg-white rounded-3xl border border-gray-200 overflow-hidden flex flex-col">
                        <div className="p-5 border-b border-gray-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search messages..."
                                    className="w-full pl-11 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#0057A3]"
                                />
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            {conversations.map((chat) => (
                                <div
                                    key={chat.id}
                                    onClick={() => setSelectedChat(chat.id)}
                                    className={`p-5 border-b border-gray-100 hover:bg-[#E6F0FA] cursor-pointer transition-all ${
                                        selectedChat === chat.id ? 'bg-[#E6F0FA]' : ''
                                    }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#E6F0FA] rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                                            {chat.avatar}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-center">
                                                <h4 className="font-semibold text-gray-800 truncate">{chat.doctor}</h4>
                                                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{chat.time}</span>
                                            </div>
                                            <p className="text-sm text-[#0057A3]">{chat.specialty}</p>
                                            <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                                                {chat.lastMessage}
                                            </p>
                                        </div>
                                        {chat.unread > 0 && (
                                            <div className="bg-[#0057A3] text-white text-xs font-medium w-5 h-5 flex items-center justify-center rounded-full">
                                                {chat.unread}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chat Window */}
                    <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 flex flex-col overflow-hidden">
                        {currentChat ? (
                            <>
                                {/* Chat Header */}
                                <div className="p-5 border-b border-gray-100 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#E6F0FA] rounded-2xl flex items-center justify-center text-3xl">
                                        {currentChat.avatar}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-xl">{currentChat.doctor}</h3>
                                        <p className="text-sm text-gray-500">{currentChat.specialty}</p>
                                    </div>
                                </div>

                                {/* Messages Area */}
                                <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50">
                                    {currentChat.messages.length > 0 ? (
                                        currentChat.messages.map((msg) => (
                                            <div
                                                key={msg.id}
                                                className={`flex ${msg.from === 'patient' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div
                                                    className={`max-w-[75%] px-5 py-3 rounded-3xl ${
                                                        msg.from === 'patient'
                                                            ? 'bg-[#0057A3] text-white rounded-br-none'
                                                            : 'bg-white border border-gray-200 rounded-bl-none'
                                                    }`}
                                                >
                                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                                    <p className={`text-xs mt-2 ${msg.from === 'patient' ? 'text-blue-200' : 'text-gray-400'}`}>
                                                        {msg.time}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="h-full flex items-center justify-center text-gray-400">
                                            No messages yet. Start the conversation.
                                        </div>
                                    )}
                                </div>

                                {/* Message Input */}
                                <div className="p-5 border-t border-gray-100 bg-white">
                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                            placeholder="Type your message here..."
                                            className="flex-1 px-5 py-4 border border-gray-200 rounded-3xl focus:outline-none focus:border-[#0057A3]"
                                        />
                                        <button
                                            onClick={sendMessage}
                                            className="bg-[#0057A3] hover:bg-[#003F7A] text-white px-8 rounded-3xl font-medium transition-all"
                                        >
                                            Send
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-400 text-center mt-3">
                                        Messages are end-to-end encrypted and secure
                                    </p>
                                </div>
                            </>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-10">
                                <div className="text-7xl mb-6">💬</div>
                                <h3 className="text-2xl font-medium text-gray-700">Your Messages</h3>
                                <p className="text-gray-500 mt-3 max-w-md">
                                    Select a conversation from the left to start chatting with your healthcare provider.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}