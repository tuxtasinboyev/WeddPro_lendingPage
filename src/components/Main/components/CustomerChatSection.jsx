"use client";
import React, { useState, useEffect } from 'react';

export default function CustomerChatSection() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Video yuklanishini aniqlash
    useEffect(() => {
        const video = document.querySelector('video');
        if (video) {
            video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
        }
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
            {/* Video background with loading state */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoLoaded ? 'opacity-20' : 'opacity-0'}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    src="https://cdn.coverr.co/videos/coverr-a-typing-hand-6709/1080p.mp4"
                ></video>

                {/* Fallback gradient if video doesn't load */}
                {!isVideoLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>
                )}
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-soft-light opacity-20 animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Mijozlaringiz bilan doimo <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-gradient">
                            aloqada bo'ling
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Endi mijozlar bilan muloqot qilish yanada qulay. Admin panelidan
                        chiqmasdan turib yozishmalarni kuzating va boshqaring.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="px-8 py-4 text-lg font-medium rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2">
                            <span>Boshlash</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <button className="px-8 py-4 text-lg font-medium rounded-xl bg-slate-700/50 hover:bg-slate-700/70 backdrop-blur-sm transition-all duration-300 border border-slate-600">
                            Ko'proq o'rganish
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
                        <div className="text-center lg:text-left">
                            <div className="text-3xl font-bold text-indigo-300">98%</div>
                            <div className="text-gray-300">Mijozlar qoniqishi</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-3xl font-bold text-indigo-300">24/7</div>
                            <div className="text-gray-300">Qo'llab-quvvatlash</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-3xl font-bold text-indigo-300">5min</div>
                            <div className="text-gray-300">O'rtacha javob vaqti</div>
                        </div>
                    </div>
                </div>

                {/* Device Preview */}
                <div className="flex-1 relative flex justify-center items-center">
                    <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-[350px] overflow-hidden border-4 border-slate-700 transform hover:scale-105 transition-transform duration-500">
                        {/* Device notch */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-slate-800 rounded-b-lg z-10"></div>

                        <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4 flex items-center gap-3 border-b border-slate-600">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <div className="flex-1 text-center text-white text-sm font-medium">Chat</div>
                        </div>

                        {/* Chat messages */}
                        <div className="p-4 bg-gradient-to-b from-slate-100 to-slate-50 h-[380px] overflow-hidden">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Jacob Jones • 11:24</p>
                                        <p className="text-slate-700 bg-slate-200 p-3 rounded-xl rounded-tl-none mt-1">
                                            Men buyurtma haqida yozdim…
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 justify-end">
                                    <div>
                                        <p className="text-xs text-slate-500 text-right font-medium">Siz • 11:25</p>
                                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl rounded-tr-none mt-1 max-w-[240px] ml-auto">
                                            Assalomu alaykum, buyurtmangiz holatini tekshirib beramiz.
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex-shrink-0"></div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Jacob Jones • 11:26</p>
                                        <p className="text-slate-700 bg-slate-200 p-3 rounded-xl rounded-tl-none mt-1">
                                            Rahmat! Qancha kutarishim kerak?
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 justify-end">
                                    <div>
                                        <p className="text-xs text-slate-500 text-right font-medium">Siz • 11:27</p>
                                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-xl rounded-tr-none mt-1 max-w-[240px] ml-auto">
                                            10-15 daqiqa ichida javob beramiz.
                                        </div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex-shrink-0"></div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Jacob Jones • 11:28</p>
                                        <div className="text-slate-700 bg-slate-200 p-3 rounded-xl rounded-tl-none mt-1">
                                            Rahmat! Juda yaxshi xizmat ko'rsatyapsiz.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message input */}
                            <div className="absolute bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 flex items-center">
                                <input
                                    type="text"
                                    placeholder="Xabar yozing..."
                                    className="flex-1 bg-slate-100 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                />
                                <button className="ml-2 bg-indigo-500 rounded-full p-2 hover:bg-indigo-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-500/10 rounded-full backdrop-blur-sm"></div>
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500/10 rounded-full backdrop-blur-sm"></div>
                </div>
            </div>
        </section>
    );
}