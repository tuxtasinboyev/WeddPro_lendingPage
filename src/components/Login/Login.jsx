import { ArrowRight, Eye, EyeOff, Lock, Mail, Smartphone, Sparkles, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function WeddProLogin() {
    const navigate = useNavigate()
    const [loginMethod, setLoginMethod] = useState('mobile');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        mobile: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };
    const handleButton = (e) => {
        e.preventDefault()

        localStorage.setItem(demo, formData)
        navigate('/home')
    }

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
                                <Zap className="h-9 w-9 text-indigo-500" />
                            </div>
                            <span className="text-3xl font-bold text-white">WeddPro</span>
                        </div>

                        {/* Hero Text */}
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold text-white leading-tight">
                                BIZNESINGIZNI
                                <br />
                                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                    YANGI DARAJAGA
                                </span>
                                <br />
                                OLIB CHIQING
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Biznesingizni boshqarish, avtomatlashtirish va rivojlantirish uchun barcha kerakli vositalar bir joyda.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="bg-green-500/20 p-2 rounded-lg">
                                    <Sparkles className="w-5 h-5 text-green-400" />
                                </div>
                                <span className="text-gray-300">15 daqiqada telegram bot yarating</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-500/20 p-2 rounded-lg">
                                    <Sparkles className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-gray-300">Professional web-sayt va katalog</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-purple-500/20 p-2 rounded-lg">
                                    <Sparkles className="w-5 h-5 text-purple-400" />
                                </div>
                                <span className="text-gray-300">Barcha to'lov tizimlari bilan integratsiya</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="w-full max-w-md mx-auto lg:mx-0">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                        {/* Mobile Logo for small screens */}
                        <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
                            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-2xl">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-white">WeddPro</span>
                        </div>

                        {/* Welcome Text */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white mb-2">Xush kelibsiz!</h2>
                            <p className="text-gray-300">Hisobingizga kiring va ishni boshlang</p>
                        </div>

                        {/* Login Method Toggle */}
                        <div className="flex bg-white/5 rounded-2xl p-1 mb-8">
                            <button
                                onClick={() => setLoginMethod('mobile')}
                                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${loginMethod === 'mobile'
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <Smartphone className="w-5 h-5" />
                                <span>Telefon</span>
                            </button>
                            <button
                                onClick={() => setLoginMethod('email')}
                                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${loginMethod === 'email'
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <Mail className="w-5 h-5" />
                                <span>Email</span>
                            </button>
                        </div>

                        {/* Login Form */}
                        <div className="space-y-6">
                            {/* Phone/Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    {loginMethod === 'mobile' ? 'Telefon raqami' : 'Email manzil'}
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        {loginMethod === 'mobile' ? (
                                            <>
                                                <span className="text-gray-400 text-sm mr-2">🇺🇿 +998</span>
                                            </>
                                        ) : (
                                            <Mail className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>
                                    <input
                                        type={loginMethod === 'mobile' ? 'tel' : 'email'}
                                        name={loginMethod}
                                        value={formData[loginMethod]}
                                        onChange={handleInputChange}
                                        placeholder={loginMethod === 'mobile' ? 'Telefon raqamini kiriting' : 'Email manzilingizni kiriting'}
                                        className={`w-full ${loginMethod === 'mobile' ? 'pl-20' : 'pl-12'
                                            } pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Parol
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Parolingizni kiriting"
                                        className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                                        ) : (
                                            <Eye className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right">
                                <p href="#" className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors">
                                    <Link to={'/forgotPass'}>Parolni unutdingizmi?</Link>
                                </p>
                            </div>

                            {/* Login Button */}
                            <button onClick={handleButton}
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] shadow-xl flex items-center justify-center space-x-2 group"
                            >
                                <span>Kirish</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center mt-8 pt-6 border-t border-white/10">
                            <p className="text-gray-400">
                                Hisobingiz yo'qmi?{' '}
                                <p className="text-pink-400 hover:text-pink-300 font-semibold transition-colors">
                                    <Link to={'/register'}>Ro'yxatdan o'ting</Link>
                                </p>
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-8 grid grid-cols-3 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">10K+</div>
                            <div className="text-sm text-gray-400">Foydalanuvchi</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">50K+</div>
                            <div className="text-sm text-gray-400">Telegram bot</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">99.9%</div>
                            <div className="text-sm text-gray-400">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}