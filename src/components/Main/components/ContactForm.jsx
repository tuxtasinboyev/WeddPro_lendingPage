import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validatePhone = (phone) => {
        // Regular expression to check for Uzbek phone numbers starting with +998
        const phoneRegex = /^\+998\d{9}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const { name, phone, company } = formData;

        if (!name || !phone || !company) {
            setError('Iltimos, barcha maydonlarni to\'ldiring.');
            return;
        }

        if (!validatePhone(phone)) {
            setError('Telefon raqami noto\'g\'ri. Iltimos, +998 bilan boshlang.');
            return;
        }

        // You can send the form data here, or display a success message
        alert('Form ma\'lumotlari muvaffaqiyatli yuborildi!');
        setFormData({ name: '', phone: '', company: '' });
    };

    return (
        <div className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center text-purple-600 mb-8">Biz bilan Bog'laning</h2>

                {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Ismingiz</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Ismingizni kiriting"
                            required
                        />
                    </div>

                    {/* Company Field */}
                    <div>
                        <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">Kompaniya</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="Kompaniyani kiriting"
                            required
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Telefon raqami</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                            placeholder="+998"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white py-4 rounded-lg shadow-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                        >
                            Yuborish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
