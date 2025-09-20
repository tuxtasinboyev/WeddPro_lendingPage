"use client";
import { useNavigate } from "react-router-dom";

const posts = [
    {
        id: 1,
        title: "Telegram botlari orqali biznesni boshqarish",
        date: "15:30, 01.01.2023",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 2,
        title: "WeddPro 2-versiya: yangi imkoniyatlar",
        date: "11:45, 01.04.2024",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        title: "Onlayn biznesni boshlash bo‘yicha qo‘llanma",
        date: "09:30, 29.04.2024",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60",
    },
];

export default function BlogSection() {
    const navigate = useNavigate()
    return (
        <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Bizning blogimizni o‘qing
                    </h2>
                    <p className="text-gray-500 mt-3 text-lg">
                        Yangi texnologiyalarni o‘rganing va biznesingizni rivojlantiring
                    </p>
                </div>

                {/* Posts */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="group relative rounded-2xl overflow-hidden shadow hover:shadow-lg transition bg-white"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-56 object-cover transform group-hover:scale-105 transition"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-5 text-white">
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-300 transition">
                                    {post.title}
                                </h3>
                                <span className="text-sm opacity-80">{post.date}</span>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-12 text-center">
                    <button onClick={() => navigate('/blog')} className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                        Barchasini ko‘rish
                    </button>
                </div>
            </div>
        </section>
    );
}
