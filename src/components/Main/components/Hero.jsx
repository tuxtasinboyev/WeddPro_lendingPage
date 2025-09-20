"use client"

export default function Hero() {
    return (
        <section className="relative bg-slate-950 text-white overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid-slate-800/10 pointer-events-none"></div>

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://winpro.uz/_next/image?url=https%3A%2F%2Fstorage.winpro.uz%5Cwinpro%5Cbanner_winpro_1920x520.jpg&w=3840&q=75"
                    alt="WeddPro Dashboard"
                    className="w-full h-full object-cover opacity-40"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/60 to-slate-950/10"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-pink-400 to-indigo-500 bg-clip-text text-transparent">
                        15 daqiqada onlayn biznesingizni boshlang
                    </h1>
                    <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                        Onlayn biznesdagi muvaffaqiyatingizning yangi namunasi bo‘ling.
                        Hammasi bitta platformada — <span className="font-semibold text-indigo-400">WeddPro</span> yordamida.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors">
                            Bepul boshlash
                        </button>
                        <button className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/20">
                            Demo ko‘rish
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )   
}
