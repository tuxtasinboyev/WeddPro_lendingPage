import React from 'react';
import {
    Heart,
    Users,
    TrendingUp,
    Globe,
    MessageSquare,
    Camera,
    Zap,
    Shield,
    ShoppingCart
} from 'lucide-react';

export default function WeddProAbout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <header className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-600 to-red-700 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative container mx-auto px-6 py-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                <Zap className="h-9 w-9 text-indigo-500" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                            WeddPro platformasi haqida
                        </h1>
                        <p className="text-xl md:text-2xl text-pink-100 leading-relaxed">
                            Biznesingizni avtomatlashtiring va yangi darajaga ko'taring
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-16 space-y-20">
                {/* Platform Description */}
                <section className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                <strong>WeddPro</strong> - bu HoReCa sohasidagi va har qanday turdagi do'konlar uchun
                                onlayn savdoni boshlashni istagan tadbirkorlar uchun ideal bo'lgan web-saytlar va
                                telegram-botlarni yaratish uchun to'liq funksional konstruktor.
                            </p>

                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Bizning platformamiz tadbirkorlarga onlayn biznesni boshlash va boshqarish uchun
                                barcha kerakli vositalarni taqdim etadi. WeddPro yordamida har qanday tadbirkor
                                o'z onlayn biznesini yaratishi va 24 soat ichida buyurtmalarni qabul qilishni boshlashi mumkin.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Bizning platformamizda</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Sizning biznesingizni samarali boshqarish uchun kerak bo'lgan hamma narsa mavjud
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature Cards */}
                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShoppingCart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Tovarlar katalogi</h3>
                            <p className="text-gray-600">Savdo, xodimlar, marketing, to'lov tizimlari, POS tizimlari va boshqalar</p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <MessageSquare className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Telegram bot</h3>
                            <p className="text-gray-600">Soddalik va tezlik: 15 daqiqada telegram-bot yoki web-sayt yarating</p>
                        </div>

                        <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Integratsiyalar</h3>
                            <p className="text-gray-600">To'lov tizimlari, POS tizimlari va ombor bilan integratsiyalardan foydalaning</p>
                        </div>
                    </div>
                </section>

                {/* Company Goal */}
                <section className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl text-white p-12 md:p-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <Users className="w-16 h-16 mx-auto mb-8 text-rose-200" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Kompaniyaning maqsadi</h2>
                        <p className="text-xl leading-relaxed text-rose-100">
                            Bizning vazifamiz - tadbirkorlarning hayotini osonlashtirish, onlayn biznesni boshlash va
                            boshqarish jarayonini oddiy va arzon qilish. Har kuni biz onlayn biznes dunyosini yaxshilashga
                            intilamiz, tadbirkorlarga o'z maqsadlariga erishishda va daromadlarini oshirishda yordam beramiz.
                        </p>
                    </div>
                </section>

                {/* Benefits */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">WeddPro qanday foyda keltirishi mumkin</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 rounded-lg p-3 mt-1">
                                    <TrendingUp className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Biznesni boshqarish</h3>
                                    <p className="text-gray-600">Bizning admin panelimiz yordamida biznesingizni to'liq nazorat qiling</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-green-100 rounded-lg p-3 mt-1">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Daromadlarni oshirish</h3>
                                    <p className="text-gray-600">Jarayonlarni soddalashtirish orqali biznesingizni rivojlantiring</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-100 rounded-lg p-3 mt-1">
                                    <Globe className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Mijozlarning sodiqligi</h3>
                                    <p className="text-gray-600">Buyurtma jarayonini qulay qilib qo'ying va mijozlarni doimiylarga aylantiring</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-orange-100 rounded-lg p-3 mt-1">
                                    <Zap className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Avtomatlashtirish</h3>
                                    <p className="text-gray-600">Buyurtma jarayonini avtomatlashtirish orqali vaqt va resurslarni tejang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistics */}
                <section className="bg-white rounded-3xl shadow-xl p-12 md:p-16 border border-gray-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Bizning natijalar</h2>
                        <p className="text-lg text-gray-600">Hozirda WeddPro platformasidan foydalanilmoqda</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">10,000+</div>
                            <div className="text-gray-600">Foydalanuvchi</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">20,000+</div>
                            <div className="text-gray-600">Telegram botlar</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">100,000+</div>
                            <div className="text-gray-600">Tovarlar sotilgan</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">50+</div>
                            <div className="text-gray-600">Integratsiyalar</div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center bg-gradient-to-r from-pink-600 to-red-700 rounded-3xl p-12 md:p-16 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Biznessingizning yuragini automatlashtiring va barcha jihatlarni samarali boshqaring
                    </h2>
                    <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
                        Biz bilan mijozlaringiz uchun buyurtma rasmiylashtirishni soddalashtiring va ularni doimiy mijozlarga aylantiring.
                    </p>
                    <button className="bg-white text-pink-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                        Boshlab ko'ring
                    </button>
                </section>
            </main>
        </div>
    );
}
