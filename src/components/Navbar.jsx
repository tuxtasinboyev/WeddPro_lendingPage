"use client"

import { Menu, X, Zap } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-slate-950 backdrop-blur-md border-b border-slate-950 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Zap className="h-9 w-9 text-indigo-500" />
                        <span className="text-2xl font-bold text-white tracking-tight">WeddPro</span>
                    </div>
                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
                        <p className="hover:text-indigo-600 transition-colors"><Link to={'/home'}>Home</Link></p>
                        <p className="hover:text-indigo-600 transition-colors"><Link to={'/adventages'}>Imkoniyatlar</Link></p>
                        <p className="hover:text-indigo-600 transition-colors"><Link to={'/pricing'}>Tariflar</Link></p>
                        <p className="hover:text-indigo-600 transition-colors"><Link to={'/contact'}>Aloqa</Link></p>
                        <p className="hover:text-indigo-600 transition-colors"><Link to={'/news'}>Yangiliklar</Link></p>
                        <p className="hover:text-indigo-600 transition-colors"><Link to={'/about'}>Biz haqimizda</Link></p>
                    </nav>

                    {/* CTA button */}
                    <div className="hidden md:flex">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl shadow transition-colors">
                            Bepul boshlash
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <nav className="flex flex-col space-y-2 px-4 py-4 text-gray-700 font-medium">
                    <a href="#features" className="hover:text-indigo-600">Imkoniyatlar</a>
                    <a href="#pricing" className="hover:text-indigo-600">Tariflar</a>
                    <a href="#contact" className="hover:text-indigo-600">Aloqa</a>
                    <a href="#news" className="hover:text-indigo-600">Yangiliklar</a>
                    <a href="#about" className="hover:text-indigo-600">Biz haqimizda</a>
                    <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl shadow transition-colors">
                        Bepul boshlash
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
