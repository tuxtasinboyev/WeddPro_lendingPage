import { ArrowRight, Check, Eye, EyeOff, Heart, Lock, Mail, Shield, Smartphone, Sparkles, User, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WeddProRegister() {
    const [registerMethod, setRegisterMethod] = useState('mobile');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        localStorage.setItem(demo, formData)
        navigate('/home')
    };

    const passwordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;
        return strength;
    };

    const getStrengthColor = (strength) => {
        switch (strength) {
            case 1: return 'bg-red-500';
            case 2: return 'bg-yellow-500';
            case 3: return 'bg-blue-500';
            case 4: return 'bg-green-500';
            default: return 'bg-gray-300';
        }
    };

    const getStrengthText = (strength) => {
        switch (strength) {
            case 1: return 'Zaif';
            case 2: return 'O\'rta';
            case 3: return 'Yaxshi';
            case 4: return 'Kuchli';
            default: return '';
        }
    };

    const strength = passwordStrength(formData.password);

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
                                    BUGUN BOSHLANG
                                </span>
                                <br />
                                VA RIVOJLANTIRING
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Minglab tadbirkorlar WeddPro bilan o'z bizneslarini muvaffaqiyatli boshqarishmoqda. Siz ham qo'shiling!
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="bg-green-500/20 p-2 rounded-lg">
                                    <Check className="w-5 h-5 text-green-400" />
                                </div>
                                <span className="text-gray-300">Bepul 14 kunlik sinov muddati</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-500/20 p-2 rounded-lg">
                                    <Shield className="w-5 h-5 text-blue-400" />
                                </div>
                                <span className="text-gray-300">100% xavfsiz va ishonchli</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="bg-purple-500/20 p-2 rounded-lg">
                                    <Sparkles className="w-5 h-5 text-purple-400" />
                                </div>
                                <span className="text-gray-300">24/7 qo'llab-quvvatlash</span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">10K+</div>
                                <div className="text-sm text-gray-400">Faol foydalanuvchi</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">50K+</div>
                                <div className="text-sm text-gray-400">Yaratilgan botlar</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">99.9%</div>
                                <div className="text-sm text-gray-400">Ishonch darajasi</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Register Form */}
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
                            <h2 className="text-3xl font-bold text-white mb-2">Hisobingizni yarating</h2>
                            <p className="text-gray-300">Biznesni boshqarishga tayyor bo'ling</p>
                        </div>

                        {/* Register Form */}
                        <div className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    To'liq ismingiz
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Ismingizni kiriting"
                                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            {/* Register Method Toggle */}
                            <div className="flex bg-white/5 rounded-2xl p-1 mb-4">
                                <button
                                    onClick={() => setRegisterMethod('mobile')}
                                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${registerMethod === 'mobile'
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    <Smartphone className="w-5 h-5" />
                                    <span>Telefon</span>
                                </button>
                                <button
                                    onClick={() => setRegisterMethod('email')}
                                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${registerMethod === 'email'
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Email</span>
                                </button>
                            </div>

                            {/* Phone/Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    {registerMethod === 'mobile' ? 'Telefon raqami' : 'Email manzil'}
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        {registerMethod === 'mobile' ? (
                                            <>
                                                <span className="text-gray-400 text-sm mr-2">🇺🇿 +998</span>
                                            </>
                                        ) : (
                                            <Mail className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>
                                    <input
                                        type={registerMethod === 'mobile' ? 'tel' : 'email'}
                                        name={registerMethod}
                                        value={formData[registerMethod]}
                                        onChange={handleInputChange}
                                        placeholder={registerMethod === 'mobile' ? 'Telefon raqamini kiriting' : 'Email manzilingizni kiriting'}
                                        className={`w-full ${registerMethod === 'mobile' ? 'pl-20' : 'pl-12'
                                            } pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Parol yarating
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
                                        placeholder="Kuchli parol yarating"
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

                                {/* Password Strength */}
                                {formData.password && (
                                    <div className="mt-3">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs text-gray-400">Parol kuchi</span>
                                            <span className="text-xs text-gray-400">{getStrengthText(strength)}</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full transition-all duration-300 ${getStrengthColor(strength)}`}
                                                style={{ width: `${(strength / 4) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Confirm Password Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Parolni tasdiqlang
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Parolni qayta kiriting"
                                        className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                                        ) : (
                                            <Eye className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                                        )}
                                    </button>
                                </div>

                                {/* Password Match Indicator */}
                                {formData.confirmPassword && (
                                    <div className="mt-2">
                                        {formData.password === formData.confirmPassword ? (
                                            <div className="flex items-center space-x-2 text-green-400 text-xs">
                                                <Check className="w-4 h-4" />
                                                <span>Parollar mos keldi</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center space-x-2 text-red-400 text-xs">
                                                <span>Parollar mos kelmayapti</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Terms Checkbox */}
                            <div className="flex items-start space-x-3">
                                <button
                                    onClick={() => setAgreeTerms(!agreeTerms)}
                                    className={`mt-1 w-5 h-5 rounded border-2 transition-all ${agreeTerms
                                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 border-pink-500'
                                        : 'border-white/20 bg-white/5'
                                        } flex items-center justify-center`}
                                >
                                    {agreeTerms && <Check className="w-3 h-3 text-white" />}
                                </button>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    Men{' '}
                                    <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                                        Foydalanish shartlari
                                    </a>{' '}
                                    va{' '}
                                    <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                                        Maxfiylik siyosati
                                    </a>{' '}
                                    bilan tanishdim va roziman
                                </p>
                            </div>

                            {/* Register Button */}
                            <button
                                disabled={!agreeTerms || formData.password !== formData.confirmPassword || !formData.name || (!formData.mobile && !formData.email)}
                                className={`w-full font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform shadow-xl flex items-center justify-center space-x-2 group ${!agreeTerms || formData.password !== formData.confirmPassword || !formData.name || (!formData.mobile && !formData.email)
                                    ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                                    : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white hover:scale-[1.02]'
                                    }`}
                            >
                                <span>Ro'yxatdan o'tish</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <div className="text-center mt-8 pt-6 border-t border-white/10">
                            <p className="text-gray-400">
                                Allaqachon hisobingiz bormi?{' '}
                                <p className="text-pink-400 hover:text-pink-300 font-semibold transition-colors">
                                    <Link to={'/login'}>Kirish</Link>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}