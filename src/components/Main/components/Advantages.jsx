"use client"

import {
    PieChart, Pie, Cell,
    BarChart, Bar, XAxis, YAxis, Tooltip,
    LineChart, Line, CartesianGrid, ResponsiveContainer,
} from 'recharts'

// Uzbek oy nomlari ro'yxati
const months = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
    'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
]

// Oxirgi N oy nomlarini va random qiymatlarni olish
function getLastMonthsData(n = 4, dataKey = 'orders', min = 100, max = 600) {
    const now = new Date()
    const data = []
    for (let i = n - 1; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
        const monthName = months[d.getMonth()]
        data.push({
            name: monthName,
            [dataKey]: Math.floor(Math.random() * (max - min + 1) + min),
        })
    }
    return data
}

export default function Advantages() {
    const pieData = [
        { name: 'Telegram', value: 400 },
        { name: 'Veb-sayt', value: 300 },
        { name: 'Instagram', value: 300 },
    ]
    const COLORS = ['#6366F1', '#EC4899', '#14B8A6']

    // Dinamik bar va line data
    const barData = getLastMonthsData(3, 'orders', 200, 500)
    const lineData = getLastMonthsData(4, 'growth', 150, 700)

    const features = [
        {
            title: "Trafik manbalari",
            desc: "Barcha trafik manbalarini bitta boshqaruv panelida kuzating.",
            value: "709",
            type: "pie",
        },
        {
            title: "Savdo statistikasi",
            desc: "Savdolar va mijozlaringiz haqidagi statistikani kuzating.",
            value: "3 465 698 UZS",
            type: "bar",
        },
        {
            title: "Platforma hisobotlari",
            desc: "Platformangiz ishlashini, buyurtmalar kelib tushishini tahlil qiling.",
            value: "205 Orders",
            type: "bar",
        },
        {
            title: "Top 10 mahsulot",
            desc: "Eng ko‘p sotilayotgan mahsulotlarni kuzating.",
            value: "10+",
            type: "bar",
        },
        {
            title: "Savdolar dinamikasi",
            desc: "Biznesingizning vaqt bo‘yicha o‘sishini kuzating.",
            value: "Growth",
            type: "line",
        },
    ]

    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900">
                    WendroPro Afzalliklari
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-center text-gray-500 text-lg">
                    Biznesingizni oson va samarali boshqarishingiz uchun qulay platforma.
                </p>

                {/* Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-50 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
                        >
                            {/* Chart */}
                            <div className="relative w-full h-40 p-4 bg-white">
                                <ResponsiveContainer width="100%" height="100%">
                                    {item.type === 'pie' ? (
                                        <PieChart>
                                            <Pie
                                                data={pieData}
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={60}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {pieData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    ) : item.type === 'bar' ? (
                                        <BarChart data={barData}>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Bar dataKey="orders" fill="#6366F1" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    ) : item.type === 'line' ? (
                                        <LineChart data={lineData}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Line
                                                type="monotone"
                                                dataKey="growth"
                                                stroke="#EC4899"
                                                strokeWidth={3}
                                                dot={{ r: 4 }}
                                            />
                                        </LineChart>
                                    ) : (
                                        <div />
                                    )}
                                </ResponsiveContainer>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-slate-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
                                <div className="mt-4">
                                    <span className="inline-block text-indigo-600 font-bold text-sm bg-indigo-50 px-3 py-1 rounded-full">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
