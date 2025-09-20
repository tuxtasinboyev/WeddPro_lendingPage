"use client";

import React, { useState } from "react";
import {
    Heart,
    Check,
    Star,
    Zap,
    Globe,
    MessageSquare,
    Camera,
    Instagram,
    Smartphone,
    Crown,
    TrendingUp,
    Menu,
    X,
} from "lucide-react";

export default function WeddProPricing() {
    const [billingPeriod, setBillingPeriod] = useState("monthly");
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const plans = [
        {
            name: "Start",
            price:
                billingPeriod === "monthly"
                    ? 240000
                    : billingPeriod === "half-yearly"
                        ? 400000
                        : 720000,
            originalPrice:
                billingPeriod === "monthly"
                    ? 300000
                    : billingPeriod === "half-yearly"
                        ? 500000
                        : 900000,
            currency: "UZS",
            period:
                billingPeriod === "monthly"
                    ? "3 oylik"
                    : billingPeriod === "half-yearly"
                        ? "6 oylik"
                        : "12 oylik",
            popular: false,
            features: [
                { icon: MessageSquare, text: "Telegram bot (WebApp)", included: true },
                { icon: Globe, text: "Web-sayt (Faqat subdomen)", included: true },
                { icon: Check, text: "50 mahsulot limiti", included: true },
                { icon: Check, text: "Asosiy analitika", included: true },
            ],
            buttonStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50",
            cardStyle: "bg-white border border-gray-200",
        },
        {
            name: "Basic",
            price:
                billingPeriod === "monthly"
                    ? 400000
                    : billingPeriod === "half-yearly"
                        ? 600000
                        : 1000000,
            originalPrice:
                billingPeriod === "monthly"
                    ? 500000
                    : billingPeriod === "half-yearly"
                        ? 750000
                        : 1250000,
            currency: "UZS",
            period:
                billingPeriod === "monthly"
                    ? "3 oylik"
                    : billingPeriod === "half-yearly"
                        ? "6 oylik"
                        : "12 oylik",
            popular: billingPeriod === "half-yearly",
            discount: billingPeriod !== "monthly" ? "-20%" : null,
            features: [
                { icon: MessageSquare, text: "Telegram bot (WebApp)", included: true },
                { icon: Globe, text: "Web-sayt", included: true },
                { icon: Camera, text: "QR Menyu/Katalog", included: true },
                { icon: Instagram, text: "Instagram", included: true },
                { icon: Check, text: "Cheksiz mahsulotlar", included: true },
                { icon: Check, text: "Kengaytirilgan analitika", included: true },
            ],
            buttonStyle:
                "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700",
            cardStyle:
                "bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 shadow-lg",
        },
        {
            name: "Professional",
            price:
                billingPeriod === "monthly"
                    ? 720000
                    : billingPeriod === "half-yearly"
                        ? 900000
                        : 1400000,
            originalPrice:
                billingPeriod === "monthly"
                    ? 900000
                    : billingPeriod === "half-yearly"
                        ? 1125000
                        : 1750000,
            currency: "UZS",
            period:
                billingPeriod === "monthly"
                    ? "3 oylik"
                    : billingPeriod === "half-yearly"
                        ? "6 oylik"
                        : "12 oylik",
            popular: billingPeriod === "yearly",
            discount: billingPeriod !== "monthly" ? "-20%" : null,
            crown: true,
            features: [
                { icon: MessageSquare, text: "Telegram bot (WebApp)", included: true },
                { icon: Globe, text: "Web-sayt", included: true },
                { icon: Camera, text: "QR Menyu/Katalog", included: true },
                { icon: Instagram, text: "Instagram", included: true },
                { icon: Smartphone, text: "ClickSuperApp", included: true },
                { icon: Zap, text: "Premium integratsiyalar", included: true },
                { icon: Check, text: "Cheksiz mahsulotlar", included: true },
                { icon: Check, text: "Premium qo'llab-quvvatlash", included: true },
            ],
            buttonStyle:
                "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700",
            cardStyle:
                "bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 shadow-xl",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
            {/* HEADER */}
            <header className="relative overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0 bg-black/10"></div>


                {/* HERO */}
                <div className="relative container mx-auto px-6 py-16 text-center">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-gray-300 mb-4">
                            Yetarli! Biznesingizni onlayn qilish uchun 10 barobar ko'p pul sarflashingiz shart emas. 💸
                        </p>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8">
                            <span className="text-white">WEDDPRO BILAN TEZROQ TARIFNI TANLANG</span><br />
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                VA SAMARADORLIKNI OSHIRING! 🎯
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
            </header>

            {/* BILLING TOGGLE */}
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
                        {[
                            { key: "monthly", label: "3 oylik" },
                            { key: "half-yearly", label: "6 oylik", badge: "-20%" },
                            { key: "yearly", label: "12 oylik", badge: "-20%" },
                        ].map(btn => (
                            <button
                                key={btn.key}
                                onClick={() => setBillingPeriod(btn.key)}
                                className={`relative px-8 py-3 rounded-xl font-semibold transition-all ${billingPeriod === btn.key
                                    ? "bg-slate-950 text-white shadow-lg"
                                    : "text-gray-600 hover:text-gray-800"
                                    }`}
                            >
                                {btn.label}
                                {btn.badge && (
                                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">{btn.badge}</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* PRICING CARDS */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.cardStyle}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                                    <Star className="w-4 h-4" /><span>Eng mashhur</span>
                                </div>
                            )}
                            {plan.crown && (
                                <div className="absolute -top-4 right-4">
                                    <Crown className="w-8 h-8 text-purple-600" />
                                </div>
                            )}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                                <div className="mb-4">
                                    <div className="flex items-center justify-center space-x-2 mb-2">
                                        <span className="text-4xl md:text-5xl font-bold text-gray-800">{plan.price.toLocaleString()}</span>
                                        <span className="text-gray-600 text-lg">{plan.currency}</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <span className="text-red-500 line-through text-lg">
                                            {plan.originalPrice.toLocaleString()} {plan.currency}
                                        </span>
                                        {plan.discount && (
                                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">{plan.discount}</span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-gray-600">{plan.period}</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((f, i) => (
                                    <div key={i} className="flex items-center space-x-3">
                                        <div className={`p-1 rounded-full ${f.included ? "bg-green-100" : "bg-gray-100"}`}>
                                            <f.icon className={`w-4 h-4 ${f.included ? "text-green-600" : "text-gray-400"}`} />
                                        </div>
                                        <span className={f.included ? "text-gray-700" : "text-gray-400"}>{f.text}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg ${plan.buttonStyle}`}>
                                Boshlash
                            </button>
                        </div>
                    ))}
                </div>

                {/* Additional Features */}
                <div className="text-center mt-16">
                    <button
                        onClick={() => setShowAllFeatures(!showAllFeatures)}
                        className="bg-gradient-to-r from-slate-800 to-slate-950 text-white px-8 py-4 rounded-2xl font-semibold hover:from-slate-900 hover:to-black transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                        {showAllFeatures ? 'Yashirish' : 'Xususiyatlarning to\'liq ro\'yxati'}
                    </button>
                </div>

                {/* All Features Modal/Section */}
                {showAllFeatures && (
                    <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Barcha xususiyatlar
                            </h3>
                            <p className="text-lg text-gray-600">
                                WeddPro platformasining to'liq imkoniyatlari
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* E-commerce Features */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                                        <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    E-commerce
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Onlayn do'kon</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Mahsulotlar katalogi</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Buyurtmalar boshqaruvi</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Ombor nazorati</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Chegirmalar va kupunlar</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment & Integration */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                        <Zap className="w-5 h-5 text-blue-600" />
                                    </div>
                                    To'lov va Integratsiya
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Click va Payme</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Uzcard to'lovlar</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">POS terminal</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Bank kartalar</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Naqd to'lov</span>
                                    </div>
                                </div>
                            </div>

                            {/* Marketing Tools */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                                        <Star className="w-5 h-5 text-purple-600" />
                                    </div>
                                    Marketing
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">SMS xabarlar</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Email marketing</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Mijozlar bazasi</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Sadoqat dasturi</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Referral tizimi</span>
                                    </div>
                                </div>
                            </div>

                            {/* Analytics */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <div className="bg-orange-100 p-2 rounded-lg mr-3">
                                        <TrendingUp className="w-5 h-5 text-orange-600" />
                                    </div>
                                    Analitika
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Sotuv hisobotlari</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Mijozlar analitikasi</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Moliyaviy hisobotlar</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Real-time statistika</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Export qilish</span>
                                    </div>
                                </div>
                            </div>

                            {/* Support */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <div className="bg-red-100 p-2 rounded-lg mr-3">
                                        <MessageSquare className="w-5 h-5 text-red-600" />
                                    </div>
                                    Qo'llab-quvvatlash
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">24/7 chat yordam</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Video darsliklar</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Telefon qo'llab-quvvatlash</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">O'rnatish yordami</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Trening dasturlari</span>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Features */}
                            <div className="space-y-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                                        <Globe className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    Texnik imkoniyatlar
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">SSL sertifikat</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">CDN tarmog'i</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Backup xizmati</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">API dostup</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <span className="text-gray-700">Multi-til qo'llab-quvvatlash</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* CTA */}
            <section className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Bugun boshlang va biznesingizni o'zgartiring!</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Minglab tadbirkorlar WeddPro yordamida o'z bizneslarini muvaffaqiyatli boshqarishmoqda
                    </p>
                    <button className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                        Bepul sinab ko'ring
                    </button>
                </div>
            </section>
            <hr className="text-white"/>
        </div>
    );
}