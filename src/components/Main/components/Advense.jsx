"use client"
import { useState, useEffect } from "react"

export default function HowItWorks() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeStep, setActiveStep] = useState(0)

    // Modal ochilganda body ga overflow: hidden qo'shish
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const steps = [
        { num: "01", title: "Ro'yxatdan o'ting", desc: "Shaxsiy hisobingizni yaratish uchun bir necha daqiqa vaqt sarflang" },
        { num: "02", title: "Platformani tanlang", desc: "O'zingizga mos platforma turini tanlang" },
        { num: "03", title: "Kategoriyalar qo'shing", desc: "Mahsulotlaringizni tartibga solish uchun kategoriyalar yarating" },
        { num: "04", title: "Mahsulotlarni yuklang", desc: "O'z mahsulotlaringizni osongina qo'shing va boshqaring" },
        { num: "05", title: "Buyurtmalarni qabul qiling", desc: "Mijozlaringizdan buyurtmalarni qabul qila boshlang" }
    ]

    return (
        <section id="how-it-works" className="bg-gradient-to-br from-slate-50 to-slate-100 py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Chap tomonda rasm va video element */}
                    <div className="relative group" data-aos="fade-right">
                        <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="WendroPro Dashboard"
                                className="w-full h-auto transform group-hover:scale-105 transition duration-700"
                            />
                            {/* Play tugma */}
                            <button
                                onClick={() => setIsOpen(true)}
                                className="absolute inset-0 flex items-center justify-center group/play"
                                aria-label="Video ni ko'rsatish"
                            >
                                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-xl transform group-hover/play:scale-110 transition duration-300">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>

                        {/* Dekorativ elementlar */}
                        <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                    </div>

                    {/* O'ng tomonda matn va qadamlar */}
                    <div data-aos="fade-left" data-aos-delay="200">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            WendroPro <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">qanday ishlaydi?</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Biznes platformangizni ishga tushirish uchun atigi <span className="font-semibold text-indigo-600">15 daqiqa</span> kifoya! Quyidagi oddiy qadamlarni bajaring va biznesingizni onlayn qiling.
                        </p>

                        <ul className="space-y-5">
                            {steps.map((step, index) => (
                                <li
                                    key={index}
                                    className="flex items-start group/item p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
                                    onMouseEnter={() => setActiveStep(index)}
                                    onMouseLeave={() => setActiveStep(-1)}
                                >
                                    <div className={`bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold text-lg rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 shadow-md transition-all duration-300 ${activeStep === index ? 'scale-110' : ''}`}>
                                        {step.num}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-800 text-lg">{step.title}</h3>
                                        <p className="text-slate-600 mt-1 text-sm md:text-base">{step.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Call-to-action tugmasi */}
                        <div className="mt-10">
                            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                Hoziroq boshlang
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal video */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors z-10 md:top-4 md:right-4 md:-top-0"
                            aria-label="Modalni yopish"
                        >
                            <div className="bg-slate-800 hover:bg-slate-700 rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </div>
                        </button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="WendroPro video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-[500px]"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* Global styles for animations */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .animate-scale-in {
                    animation: scaleIn 0.3s ease-out forwards;
                }
            `}</style>
        </section>
    )
}