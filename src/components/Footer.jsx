import { Link } from "react-router-dom"
import {
    Zap,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    MessageCircle,
} from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Grid bo'lim */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <Zap className="h-9 w-9 text-indigo-500" />
                            <span className="text-2xl font-bold tracking-tight">WeddPro</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            WeddPro – onlayn biznesni yaratish va boshqarishda sizning ishonchli hamkoringiz.
                        </p>
                        <div className="space-y-3 text-gray-400 text-sm">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+998 (78) 113 82 12</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>info@weddpro.uz</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>Toshkent, O'zbekiston</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Tezkor havolalar</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                <Link to="/features" className="hover:text-indigo-400 transition-colors">
                                    Imkoniyatlar
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="hover:text-indigo-400 transition-colors">
                                    Tariflar
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-indigo-400 transition-colors">
                                    Biz haqimizda
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="hover:text-indigo-400 transition-colors">
                                    Yangiliklar
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-indigo-400 transition-colors">
                                    Aloqa
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Xizmatlar</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>Telegram bot yaratish</li>
                            <li>Veb-sayt yaratish</li>
                            <li>CRM tizimi</li>
                            <li>Onlayn do'kon</li>
                            <li>Marketing avtomatlashtirish</li>
                            <li>Analytics va hisobotlar</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">Ijtimoiy tarmoqlar</h3>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                                <Youtube className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                <MessageCircle className="h-5 w-5" />
                            </a>
                        </div>
                        <div className="space-y-1 text-gray-400 text-sm">
                            <div>Bizni kuzatib boring:</div>
                            <div>@weddpro_uz</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © 2025 WeddPro. Barcha huquqlar himoyalangan.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                Maxfiylik siyosati
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                                Foydalanish shartlari
                            </Link>
                            <Link to="/help" className="text-gray-400 hover:text-white transition-colors">
                                Yordam
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
