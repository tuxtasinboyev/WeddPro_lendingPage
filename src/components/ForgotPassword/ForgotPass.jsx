import React, { useState } from 'react';
import { Heart, Smartphone, Mail, ArrowRight, ArrowLeft, Sparkles, Shield, Clock } from 'lucide-react';

export default function WeddProForgotPassword() {
    const [resetMethod, setResetMethod] = useState('mobile');
    const [step, setStep] = useState('request'); // 'request', 'verification', 'success'
    const [formData, setFormData] = useState({
        mobile: '',
        email: '',
        code: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSendCode = () => {
        // Simulate sending verification code
        setStep('verification');
    };

    const handleVerifyCode = () => {
        // Simulate code verification
        setStep('success');
    };

    const handleBackToLogin = () => {
        // Navigate back to login
        window.history.back();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Branding & Info */}
                <div className="hidden lg:block">
                    <div className="space-y-8">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-2xl">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <span className="text-3xl font-bold text-white">WeddPro</span>
                        </div>

                        {/* Hero Text */}
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold text-white leading-tight">
                                PAROLINGIZNI
                                <br />
                                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                    TIKLASHDA
                                </span>
                                <br />
                                YORDAM BERAMIZ
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Xavotir olmang! Parolni tiklash jarayoni oddiy va xavfsiz. Bir necha daqiqada hisobingizga qayta kirishingiz mumkin.
                            </p>
                        </div>

                        {/* Security Features */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="bg-green-500/20 p-2 rounded-lg">
                                    <Shield className="w-5 h-5 text-green-400" />
                                </div>
                                <span className="text-gray-300">Xavfsiz tasdiqlash jarayoni</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-500/20 p-2 rounded-lg">
                                    <Clock className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-gray-300">Tezkor parol tiklash</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-purple-500/20 p-2 rounded-lg">
                                    <Sparkles className="w-5 h-5 text-purple-400" />
                                </div>
                                <span className="text-gray-300">24/7 qo'llab-quvvatlash</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Forgot Password Form */}
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                        {/* Mobile Logo for small screens */}
                        <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-2xl">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">WeddPro</span>
                        </div>

                        {/* Step 1: Request Reset */}
                        {step === 'request' && (
                            <>
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-white mb-2">Parolni tiklash</h2>
                                    <p className="text-gray-300">Hisobingizga bog'langan telefon yoki email manzilini kiriting</p>
                                </div>

                                {/* Reset Method Toggle */}
                                <div className="flex bg-white/5 rounded-2xl p-1 mb-8">
                                    <button
                                        onClick={() => setResetMethod('mobile')}
                                        className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${resetMethod === 'mobile'
                                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                                : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <Smartphone className="w-5 h-5" />
                                        <span>SMS</span>
                                    </button>
                                    <button
                                        onClick={() => setResetMethod('email')}
                                        className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${resetMethod === 'email'
                                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                                : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <Mail className="w-5 h-5" />
                                        <span>Email</span>
                                    </button>
                                </div>

                                {/* Phone/Email Input */}
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        {resetMethod === 'mobile' ? 'Telefon raqami' : 'Email manzil'}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            {resetMethod === 'mobile' ? (
                                                <>
                                                    <span className="text-gray-400 text-sm mr-2">🇺🇿 +998</span>
                                                </>
                                            ) : (
                                                <Mail className="w-5 h-5 text-gray-400" />
                                            )}
                                        </div>
                                        <input
                                            type={resetMethod === 'mobile' ? 'tel' : 'email'}
                                            name={resetMethod}
                                            value={formData[resetMethod]}
                                            onChange={handleInputChange}
                                            placeholder={resetMethod === 'mobile' ? 'Telefon raqamini kiriting' : 'Email manzilingizni kiriting'}
                                            className={`w-full ${resetMethod === 'mobile' ? 'pl-20' : 'pl-12'
                                                } pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                                        />
                                    </div>
                                </div>

                                {/* Send Code Button */}
                                <button
                                    onClick={handleSendCode}
                                    disabled={!formData[resetMethod]}
                                    className={`w-full font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform shadow-xl flex items-center justify-center space-x-2 group ${!formData[resetMethod]
                                            ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                                            : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white hover:scale-[1.02]'
                                        }`}
                                >
                                    <span>Tasdiqlash kodi yuborish</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </>
                        )}

                        {/* Step 2: Verification */}
                        {step === 'verification' && (
                            <>
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-white mb-2">Kodni tasdiqlang</h2>
                                    <p className="text-gray-300">
                                        {resetMethod === 'mobile'
                                            ? `${formData.mobile} raqamiga yuborilgan 6 raqamli kodni kiriting`
                                            : `${formData.email} manziliga yuborilgan kodni kiriting`
                                        }
                                    </p>
                                </div>

                                {/* Verification Code Input */}
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Tasdiqlash kodi
                                    </label>
                                    <input
                                        type="text"
                                        name="code"
                                        value={formData.code}
                                        onChange={handleInputChange}
                                        placeholder="123456"
                                        maxLength="6"
                                        className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white text-center text-2xl tracking-widest placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Timer and Resend */}
                                <div className="text-center mb-8">
                                    <p className="text-gray-400 text-sm mb-4">
                                        Kod kelmadimi? <span className="text-pink-400">59 soniyada qayta yuborish</span>
                                    </p>
                                    <button className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors">
                                        Kodni qayta yuborish
                                    </button>
                                </div>

                                {/* Verify Button */}
                                <button
                                    onClick={handleVerifyCode}
                                    disabled={formData.code.length !== 6}
                                    className={`w-full font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform shadow-xl flex items-center justify-center space-x-2 group mb-4 ${formData.code.length !== 6
                                            ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                                            : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white hover:scale-[1.02]'
                                        }`}
                                >
                                    <span>Tasdiqlash</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                {/* Back Button */}
                                <button
                                    onClick={() => setStep('request')}
                                    className="w-full border border-white/20 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-200 hover:bg-white/5 flex items-center justify-center space-x-2"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    <span>Orqaga</span>
                                </button>
                            </>
                        )}

                        {/* Step 3: Success */}
                        {step === 'success' && (
                            <>
                                {/* Success Icon */}
                                <div className="text-center mb-8">
                                    <div className="bg-green-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                                            <ArrowRight className="w-5 h-5 text-white transform rotate-45" />
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Muvaffaqiyat!</h2>
                                    <p className="text-gray-300">
                                        Parol tiklash havolasi yuborildi. Emailingiz yoki SMS'ni tekshiring va ko'rsatmalarga amal qiling.
                                    </p>
                                </div>

                                {/* Instructions */}
                                <div className="bg-white/5 rounded-2xl p-6 mb-8">
                                    <h3 className="text-white font-semibold mb-4">Keyingi qadamlar:</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                                            <span className="text-gray-300 text-sm">
                                                {resetMethod === 'mobile' ? 'SMS' : 'Email'}ni tekshiring
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                                            <span className="text-gray-300 text-sm">Parol tiklash havolasini bosing</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                                            <span className="text-gray-300 text-sm">Yangi parol o'rnating</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Back to Login Button */}
                                <button
                                    onClick={handleBackToLogin}
                                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] shadow-xl flex items-center justify-center space-x-2 group"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    <span>Kirish sahifasiga qaytish</span>
                                </button>
                            </>
                        )}

                        {/* Help Link */}
                        {step === 'request' && (
                            <div className="text-center mt-8 pt-6 border-t border-white/10">
                                <p className="text-gray-400">
                                    Hisobingizga kirish esdan chiqdimi?{' '}
                                    <a href="#" onClick={handleBackToLogin} className="text-pink-400 hover:text-pink-300 font-semibold transition-colors">
                                        Kirish sahifasiga qaytish
                                    </a>
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Help Section */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-400 text-sm mb-2">Yordam kerakmi?</p>
                        <a href="#" className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors">
                            Qo'llab-quvvatlash xizmatiga murojaat qiling
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}