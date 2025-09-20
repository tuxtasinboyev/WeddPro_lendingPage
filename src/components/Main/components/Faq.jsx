import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Xizmatlaringiz nima?",
            answer: "Biz onlayn biznesni boshqarish uchun avtomatlashtirilgan xizmatlar taqdim etamiz. Bizning platformamiz orqali Telegram botlari, veb-saytlar yaratish, mijozlar bilan aloqani avtomatlashtirish va savdo jarayonlarini boshqarish imkoniyatiga ega bo'lasiz.",
            category: "umumiy"
        },
        {
            question: "Narxlar qaysi darajada?",
            answer: "Bizda bir nechta tariflar mavjud: Asosiy (₽100/oy), Standart (₽250/oy) va Premium (₽500/oy). Har bir tarifda turli xususiyatlar va imkoniyatlar mavjud. Yillik to'lovda chegirmalar ham mavjud.",
            category: "narx"
        },
        {
            question: "Qanday qilib boshlashim mumkin?",
            answer: "Boshlash juda oson! Saytimizda ro'yxatdan o'ting, o'zingizga mos tarifni tanlang va to'lovni amalga oshiring. Shundan so'ng bizning mutaxassislarimiz siz bilan bog'lanib, kerakli sozlamarni amalga oshirishda yordam beradi.",
            category: "boshlash"
        },
        {
            question: "Mijozlarga yordamni qanday olishim mumkin?",
            answer: "Mijozlarimiz uchun 24/7 qo'llab-quvvatlash xizmati mavjud. Telefon, elektron pochta, Telegram yoki saytimizdagi onlayn chat orqali bog'lanishingiz mumkin. Javob olish uchun maksimal 1 soat kutishingiz kerak.",
            category: "qollab-quvvatlash"
        },
        {
            question: "Xizmatlar qanday vaqt davomida faoliyat ko'rsatadi?",
            answer: "Bizning xizmatlarimiz yilning 365 kuni, kunining 24 soati davomida ishlaydi. Texnik ishlar uchun oldindan xabar berilgan holda qisqa muddatli tanaffuslar bo'lishi mumkin, ular asosan tunda amalga oshiriladi.",
            category: "davomiylik"
        },
        {
            question: "To'lov usullari qanday?",
            answer: "Biz turli xil to'lov usullarini qo'llab-quvvatlaymiz: bank kartalari (Visa, Mastercard), elektron hamyonlar (PayPal, WebMoney), kriptovalyutalar va bank o'tkazmalari. Barcha to'lovlar xavfsiz shifrlangan kanallar orqali amalga oshiriladi.",
            category: "tolov"
        },
        {
            question: "Bot yoki veb-saytni sozlash uchun qancha vaqt ketadi?",
            answer: "Oddiy bot yoki veb-saytni sozlash 1-3 ish kuni davom etadi. Murakkab loyihalar uchun bu muddat 1 haftagacha cho'zilishi mumkin. Biz har doim mijozlar bilan kelishilgan muddatlar doirasida ish olib boramiz.",
            category: "muddat"
        },
        {
            question: "Xizmatlarimni keyinchalik kengaytirish imkoniyati bormi?",
            answer: "Albatta! Bizning platforma miqyoslanuvchan dizaynga ega. Siz har qanday payt o'z tarifingizni oshirishingiz yoki qo'shimcha xizmatlar qo'shishingiz mumkin. Buning uchun qo'shimcha to'lovlar minimal darajada bo'ladi.",
            category: "kengaytirish"
        }
    ];

    const filteredFaqs = searchTerm
        ? faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
        : faqs;

    const categories = [...new Set(faqs.map(faq => faq.category))];

    return (
        <div className="bg-gradient-to-b from-blue-50 to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Tez-tez So'raladigan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Savollar</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Bizning platforma va xizmatlarimiz haqida eng ko'p so'raladigan savollarga javoblar
                    </p>
                </div>

                {/* Qidiruv qutisi */}
                <div className="mb-10">
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Savollarni qidirish..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pl-12"
                        />
                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                {/* Kategoriyalar (agar kerak bo'lsa) */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setSearchTerm('')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!searchTerm ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        Barchasi
                    </button>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setSearchTerm(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${searchTerm === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* FAQ ro'yxati */}
                <div className="space-y-4">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                            >
                                <button
                                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                                    onClick={() => toggleAnswer(index)}
                                    aria-expanded={activeIndex === index}
                                >
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </h3>
                                    <span className="flex-shrink-0 ml-4">
                                        <svg
                                            className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 pt-2">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10">
                            <svg
                                className="w-16 h-16 mx-auto text-gray-400 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <p className="text-xl text-gray-600">Hech narsa topilmadi. Boshqa kalit so'zlar bilan qayta urunib ko'ring.</p>
                        </div>
                    )}
                </div>

                {/* Qo'shimcha yordam */}
                <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Yana savollaringiz bormi?</h3>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                        Bizning qo'llab-quvvatlash jamoamiz sizning barcha savollaringizga javob berishga tayyor
                    </p>
                    <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300">
                        Bog'lanish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;