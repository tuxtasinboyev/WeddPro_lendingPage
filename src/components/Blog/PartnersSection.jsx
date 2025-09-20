import React, { useState, useEffect } from "react";

const companies = [
    {
        name: "Bek Osiyo",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=200&h=100",
        category: "services"
    },
    {
        name: "LYAGAN",
        logo: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=200&h=100",
        category: "retail"
    },
    {
        name: "N'Medov",
        logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=200&h=100",
        category: "services"
    },
    {
        name: "Jumanji",
        logo: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=200&h=100",
        category: "restaurant"
    },
    {
        name: "XonXonim",
        logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=200&h=100",
        category: "restaurant"
    },
    {
        name: "Сыроварня",
        logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=200&h=100",
        category: "retail"
    },
    {
        name: "Lago Park",
        logo: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=200&h=100",
        category: "services"
    },
    {
        name: "Temir Darvozalar",
        logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200&h=100",
        category: "services"
    },
    {
        name: "Pishloq Do'koni",
        logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200&h=100",
        category: "retail"
    },
];

const testimonials = [
    {
        text: "Platforma bizga qulay telegram bot va buyurtmalar uchun veb-sayt yaratishda yordam berdi. Bu esa ko'proq mijozlarni jalb qilib, daromadimizni oshirdi.",
        author: "Kamil",
        company: "Temir Darvozalar",
        avatar: "K",
        rating: 5
    },
    {
        text: "Restoran egasi sifatida soddalik va funksionallikni qadrlayman. Bu platforma mijozlarimizga buyurtma qilish jarayonini tez va qulay qildi.",
        author: "Artur",
        company: "Jumanji",
        avatar: "A",
        rating: 5
    },
    {
        text: "Robosell onlayn savdolarimni butunlay o'zgartirdi! Bir necha daqiqada do'konim uchun telegram bot va sayt yaratishga muvaffaq bo'ldim.",
        author: "Rustam",
        company: "Pishloq do'koni",
        avatar: "R",
        rating: 4
    },
];

export default function PartnersSection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Kompaniyalarni kategoriya bo'yicha filtrlash
    const filteredCompanies = activeCategory === "all"
        ? companies
        : companies.filter(company => company.category === activeCategory);

    // Tasodifiy tartibda kompaniyalarni chiqarish
    const shuffledCompanies = [...filteredCompanies].sort(() => Math.random() - 0.5);

    // Yulduzchalarni yaratish funksiyasi
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 overflow-hidden">
            {/* Dekorativ elementlar */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Sarlavha */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Bizning Hamkorlar
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
                        Bizga <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ishonadilar</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Dunyoning yetakchi kompaniyalari bizning platformamizda ishonch topshirmoqda. Ularga qo'shiling va bizning hamjamiyatning bir qismiga aylaning.
                    </p>
                </div>

                {/* Kategoriyalar */}
                <div className={`flex justify-center mb-16 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl p-1.5 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                        {[
                            { id: "all", label: "Barchasi" },
                            { id: "retail", label: "Chakana Savdo" },
                            { id: "restaurant", label: "Restoranlar" },
                            { id: "services", label: "Xizmatlar" }
                        ].map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${activeCategory === category.id
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"}`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Kompaniyalar gridi */}
                <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mb-24 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {shuffledCompanies.map((company, index) => (
                        <div
                            key={index}
                            className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/80 p-5 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 h-44 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="h-16 w-16 mb-4 flex items-center justify-center p-2 bg-white rounded-xl shadow-sm z-10">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <span className="text-sm font-semibold text-gray-800 text-center z-10">
                                {company.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Statistik ma'lumotlar */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {[
                        { value: "98%", title: "Mijozlar qoniqishi", desc: "Platformamizdan foydalanayotgan mijozlarimizning qoniqish darajasi", icon: "😊" },
                        { value: "500+", title: "Faol foydalanuvchilar", desc: "Har oy platformamizdan foydalanayotgan kompaniyalar soni", icon: "🚀" },
                        { value: "24/7", title: "Qo'llab-quvvatlash", desc: "Doimiy texnik yordam va mijozlar bilan ishlash", icon: "🌐" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="text-5xl mb-3">{stat.icon}</div>
                            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">{stat.value}</div>
                            <div className="text-gray-800 font-semibold text-lg mb-2">{stat.title}</div>
                            <p className="text-gray-600 text-sm">{stat.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Fikr-mulohazalar */}
                <div className={`mb-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                            Hamkorlarimizning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Tajribalari</span>
                        </h3>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Bizning mijozlarimizning platformamiz haqidagi haqiqiy fikrlari va tajribalari
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                            >
                                <div className="flex items-start mb-6">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl mr-4 shadow-md">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                                        <div className="flex mt-2">
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <svg className="w-10 h-10 text-gray-200 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <p className="text-gray-700 text-lg relative z-10 pl-8">"{testimonial.text}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Siz ham bizning hamkorimiz bo'lishni xohlaysizmi?</h3>
                            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
                                Biz bilan bog'laning va bizning platformamizdan foydalanish imkoniyatiga ega bo'ling. 500+ kompaniya allaqachon bizga qo'shildi!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    Bog'lanish
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                                    Batafsil Ma'lumot
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}