import { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Star, TrendingUp, Users, Menu, X, ChevronDown, ShoppingCart, Package, CreditCard, MessageCircle, Settings } from "lucide-react";

export default function HeroWeddPro() {
    const [activeTab, setActiveTab] = useState('shop');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

            {/* HERO SECTION */}
            <section className="relative text-center py-20 px-4 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-100 rounded-full opacity-50 blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-100 rounded-full opacity-40 blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-pink-100 rounded-full opacity-40 blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight animate-fade-in">
                        WeddPro – Sizning <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">ishonchli biznes</span> hamkoringiz
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
                        WeddPro bilan hayotingizni yengillashtiring va biznesingiz daromadini oshiring. Barcha biznes ehtiyojlaringiz uchun bitta platforma.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
                        <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1">
                            Bepul sinab ko‘ring
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white text-gray-800 border-2 border-gray-200 hover:border-indigo-300 px-8 py-4 rounded-full font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                            Demo ko'rish
                        </button>
                    </div>

                    {/* Rating stats */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-600 animate-fade-in-up">
                        <div className="flex items-center gap-1">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="font-medium">4.9/5</span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <Users size={18} className="text-indigo-500" />
                            <span>10,000+ foydalanuvchi</span>
                        </div>
                        <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <TrendingUp size={18} className="text-green-500" />
                            <span>Bizneslarni rivojlantirish</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 relative max-w-5xl mx-auto animate-float">
                    <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl blur-lg opacity-50"></div>
                    <img
                        src="https://img.freepik.com/premium-vector/responsive-website-design-with-laptop-computer-mobile-phone-screen-illustration_47012-81.jpg"
                        alt="Wedding management app preview"
                        className="relative rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
                    />
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WeddPro Xususiyatlari</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bizning platforma turli xil biznes ehtiyojlaringizni qondirish uchun mo'ljallangan</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1 rounded-full flex">
                        <button
                            onClick={() => setActiveTab('shop')}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'shop' ? 'bg-white text-indigo-600 shadow-md' : 'text-gray-600'}`}
                        >
                            Do'kon
                        </button>
                        <button
                            onClick={() => setActiveTab('management')}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'management' ? 'bg-white text-indigo-600 shadow-md' : 'text-gray-600'}`}
                        >
                            Boshqaruv
                        </button>
                        <button
                            onClick={() => setActiveTab('analytics')}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === 'analytics' ? 'bg-white text-indigo-600 shadow-md' : 'text-gray-600'}`}
                        >
                            Analitika
                        </button>
                    </div>
                </div>

                {activeTab === 'shop' && (
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">WeddPro do‘kon</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    O‘z veb-saytingizda va Telegram messenjeri orqali mahsulotlarni soting. Barcha biznes operatsiyalaringizni boshqarish uchun keng imkoniyatlar.
                                </p>

                                <ul className="space-y-5">
                                    {[
                                        "Mahsulot parametrlari — rang, o‘lcham va boshqa xususiyatlarni belgilang",
                                        "Mahsulotning bir nechta tasvirlari — turli rakurslardan rasm yuklang",
                                        "To‘lov turi — naqd yoki to‘lov tizimlari orqali qabul qiling",
                                        "Xodimlar — mahsulot va narxlarni nazorat qilish uchun qo‘shing",
                                        "Chat — mijozlar bilan bevosita muloqot qiling",
                                    ].map((text) => (
                                        <li key={text} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="bg-indigo-100 p-1 rounded-full flex-shrink-0">
                                                <CheckCircle2 className="text-indigo-600" size={20} />
                                            </div>
                                            <span className="text-gray-700">{text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="mt-8 group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1">
                                    Hoziroq boshlash
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 flex justify-center relative">
                            <div className="relative max-w-md">
                                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl blur-lg opacity-50"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80"
                                    alt="Product view"
                                    className="relative rounded-2xl shadow-2xl w-full"
                                />

                                {/* Floating security badge */}
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 flex items-center gap-2 animate-bounce">
                                    <Shield className="text-green-500" size={20} />
                                    <span className="text-sm font-medium">100% xavfsiz</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'management' && (
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center relative">
                            <div className="relative max-w-md">
                                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl blur-lg opacity-50"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
                                    alt="Management dashboard"
                                    className="relative rounded-2xl shadow-2xl w-full"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Keng qamrovli boshqaruv</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Barcha biznes jarayonlaringizni bitta platformada boshqaring. Buyurtmalar, mijozlar, xodimlar va moliyaviy hisobotlar.
                                </p>

                                <ul className="space-y-5">
                                    {[
                                        "Buyurtmalarni real vaqt rejimida kuzatish",
                                        "Mijozlar bazasini boshqarish va segmentatsiya qilish",
                                        "Xodimlar uchun individual ruxsatlar sozlash",
                                        "Avtomatik hisobotlar va analitika",
                                        "Ko'p tilli interfeys va valyuta sozlash",
                                    ].map((text) => (
                                        <li key={text} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="bg-indigo-100 p-1 rounded-full flex-shrink-0">
                                                <CheckCircle2 className="text-indigo-600" size={20} />
                                            </div>
                                            <span className="text-gray-700">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'analytics' && (
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Chuqur analitika</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Biznesingiz rivojlanishini kuzatish va to'g'ri qarorlar qabul qilish uchun batafsil statistik ma'lumotlar.
                                </p>

                                <ul className="space-y-5">
                                    {[
                                        "Sotuvlar va daromadlarning dinamikasi",
                                        "Mijozlar xarid qilish xulq-atvori tahlili",
                                        "Mahsulotlar bo'yicha sotuv statistikasi",
                                        "Marketing kampaniyalari samaradorligi",
                                        "Mobil ilova orqali har qanday joydan monitoring",
                                    ].map((text) => (
                                        <li key={text} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="bg-indigo-100 p-1 rounded-full flex-shrink-0">
                                                <CheckCircle2 className="text-indigo-600" size={20} />
                                            </div>
                                            <span className="text-gray-700">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center relative">
                            <div className="relative max-w-md">
                                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl blur-lg opacity-50"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                                    alt="Analytics dashboard"
                                    className="relative rounded-2xl shadow-2xl w-full"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* FEATURE CARDS SECTION */}
            <section className="bg-gray-50 py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qo'shimcha Imkoniyatlar</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">WeddPro sizga biznesingizni rivojlantirish uchun barcha kerakli vositalarni taqdim etadi</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: ShoppingCart, title: "Onlayn Do'kon", desc: "O'z veb-do'koningizni yarating va mahsulotlaringizni internetga chiqaring" },
                            { icon: Package, title: "Inventarizatsiya", desc: "Mahsulotlar zaxirasi va buyurtmalarni avtomatik boshqarish" },
                            { icon: CreditCard, title: "To'lov Tizimlari", desc: "Turli xil to'lov usullari va avtomatik to'lovlar" },
                            { icon: MessageCircle, title: "Mijozlar bilan Muloqot", desc: "Mijozlar bilan bevosita chat orqali bog'lanish" },
                            { icon: Users, title: "Jamoa Boshqaruvi", desc: "Xodimlaringiz uchun individual login va parol yaratish" },
                            { icon: Settings, title: "Moslashtirish", desc: "Platformani o'z biznesingizga moslashtirish" },
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform">
                                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                    <feature.icon className="text-indigo-600" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-fade-in-up {
                    opacity: 0;
                    animation: fadeIn 0.8s ease-out 0.3s forwards;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}