import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const EditProfilePage = () => {
    const [formData, setFormData] = useState({
        name: "Nguyễn Văn A",
        email: "vana@example.com",
        phone: "0901234567",
        address: "123 Đường ABC, Quận 1, TP.HCM",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
        }));
        console.log(formData)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thông tin đã được cập nhật!");
        // Bạn có thể gọi API ở đây để lưu dữ liệu
    };

    return (
        <>
        <Header/>
        <div className="min-h-screen bg-gray-50 w-100 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-teal-700 mb-6 text-center">
                Chỉnh Sửa Thông Tin Cá Nhân
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 mb-1">Họ và tên</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Số điện thoại</label>
                    <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Địa chỉ</label>
                    <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-teal-700 text-white py-2 rounded-xl hover:bg-teal-800 transition"
                >
                    Lưu Thay Đổi
                </button>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default EditProfilePage;
