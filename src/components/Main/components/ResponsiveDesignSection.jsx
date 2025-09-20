import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Smartphone, RotateCw } from "lucide-react";

export default function MobileDesignShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const mobileDesigns = [
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/04/attachment_114008277-1-e1618926655621.jpeg?auto=format&q=60&fit=max&w=930",
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === mobileDesigns.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? mobileDesigns.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Sarlavha va tavsif */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Mobil Dizaynlar
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Bizning mobil ilovamizning zamonaviy va foydalanuvchilar uchun qulay interfeysi.
                        Har qanday qurilmada mukammal ishlaydi.
                    </p>
                </div>

                {/* Mobil ko'rgazma */}
                <div className="relative flex flex-col items-center justify-center mb-12">
                    <div className={`relative ${isExpanded ? 'w-full max-w-4xl' : 'w-full max-w-md'}`}>
                        {/* Mobil qurilma ramkasi */}
                        <div className="relative mx-auto bg-gray-800 rounded-[40px] border-4 border-gray-700 shadow-2xl p-4">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-1 w-32 h-6 bg-gray-800 rounded-b-lg z-10"></div>
                            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>

                            <div className="overflow-hidden rounded-[32px] bg-gray-900">
                                <img
                                    src={mobileDesigns[currentIndex]}
                                    alt={`Mobil dizayn ${currentIndex + 1}`}
                                    className="w-full h-auto transition-transform duration-500"
                                />
                            </div>

                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                        </div>

                        {/* Navigatsiya tugmalari */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Kichik rasmlar galereyasi */}
                    <div className="flex justify-center mt-8 space-x-4">
                        {mobileDesigns.map((design, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-16 h-28 overflow-hidden rounded-lg border-2 ${currentIndex === index ? 'border-blue-500' : 'border-gray-700'} transition-all`}
                            >
                                <img
                                    src={design}
                                    alt={`Kichik ko'rinish ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Kengaytirish/qisqartirish tugmasi */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-6 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full transition-colors"
                    >
                        <RotateCw size={18} />
                        {isExpanded ? 'Kichraytirish' : 'Kengaytirish'}
                    </button>
                </div>

                {/* Xususiyatlar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <Smartphone className="text-white" size={24} />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Qulay Interfeys</h3>
                        <p className="text-gray-400">Foydalanuvchilar uchun intuitiv va oson navigatsiya</p>
                    </div>

                    <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Tez Ishlash</h3>
                        <p className="text-gray-400">Yuqori tezlikda ishlaydi va tez yuklanadi</p>
                    </div>

                    <div className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">Xavfsiz</h3>
                        <p className="text-gray-400">Ma'lumotlaringiz maxfiyligi kafolatlangan</p>
                    </div>
                </div>
            </div>

            {/* Dekorativ elementlar */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </section>
    );
}