import { useState } from 'react';

const LandingPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Formani yuborish logikasi
        console.log('Form yuborildi:', formData);
        alert('Xabaringiz yuborildi! Tez orada siz bilan bog\'lanamiz.');
        setFormData({ name: '', company: '', phone: '' });
    };

    const handleBack = () => {
        // Orqaga qaytish funktsiyasi
        window.history.back();
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
            {/* Orqaga qaytish tugmasi */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
                <button
                    onClick={handleBack}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-8 group"
                >
                    <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Orqaga qaytish
                </button>
            </div>

            {/* Blog Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Biznes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Yechimlari</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Telegram botlar, veb-saytlar va biznes avtomatlashtirish yechimlari bo'yicha so'nggi yangiliklar va imkoniyatlar
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Blog 1 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="h-56 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                                alt="Telegram botlar"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Yangilik</span>
                                <span className="text-xs text-gray-500 ml-3">01.01.2023</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                                Telegram botlar orqali biznesni avtomatlashtirish
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Biznesingizni rivojlantirish uchun Telegram botlaridan qanday samarali foydalanish mumkin
                            </p>
                            <a href="#" className="text-blue-600 font-semibold flex items-center group">
                                Ko'proq o'qish
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Blog 2 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="h-56 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
                                alt="Veb-saytlar"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <span className="text-xs font-semibold px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full">Yangilanish</span>
                                <span className="text-xs text-gray-500 ml-3">01.04.2024</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                                Veb-sayt yaratish platformasi yangi funksiyalar bilan
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Yangi interfeys va funksiyalar bilan biznes egalari uchun veb-sayt yaratish yanada osonlashdi
                            </p>
                            <a href="#" className="text-blue-600 font-semibold flex items-center group">
                                Ko'proq o'qish
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Blog 3 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                        <div className="h-56 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                alt="Biznes avtomatlashtirish"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center mb-3">
                                <span className="text-xs font-semibold px-3 py-1 bg-green-100 text-green-600 rounded-full">Maslahat</span>
                                <span className="text-xs text-gray-500 ml-3">29.04.2024</span>
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                                Biznesingizni avtomatlashtirish: Zamonaviy texnologiyalardan foydalanish
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Kichik biznes egalari uchun avtomatlashtirish bo'yicha amaliy maslahatlar va tavsiyalar
                            </p>
                            <a href="#" className="text-blue-600 font-semibold flex items-center group">
                                Ko'proq o'qish
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white py-16 mt-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Biz bilan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">bog'laning</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Biznesingiz uchun Telegram bot yoki veb-sayt yaratishni xohlaysizmi? Mutaxassislarimiz sizga yordam berishga tayyor
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                        <div className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ismingizni kiriting"
                                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Kompaniya nomini kiriting"
                                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Telefon raqamingizni kiriting"
                                    className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                                >
                                    Bog'lanish
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Yoki biz bilan ijtimoiy tarmoqlarda bog'laning</p>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 5.25v13.5L18.75 12 7.5 5.25z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;