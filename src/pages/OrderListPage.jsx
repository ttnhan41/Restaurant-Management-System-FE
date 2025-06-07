import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const initialOrders = [
  {
    id: "ORD001",
    time: "2025-06-06 18:30",
    items: [
      { name: "Phở Bò", quantity: 2, price: 50000 },
      { name: "Trà Đào", quantity: 1, price: 25000 },
    ],
    status: "Đang xử lý",
  },
  {
    id: "ORD002",
    time: "2025-06-05 12:15",
    items: [{ name: "Bánh Mì Thịt", quantity: 1, price: 30000 }],
    status: "Đã giao",
  },
  {
    id: "ORD003",
    time: "2025-06-04 20:00",
    items: [{ name: "Bún Chả", quantity: 2, price: 45000 }],
    status: "Đã huỷ",
  },
];

const statusColor = {
  "Đang xử lý": "text-yellow-500",
  "Đã giao": "text-green-600",
  "Đã huỷ": "text-red-500",
};

const formatCurrency = (amount) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);

export default function OrderListPage() {
  const [orders, setOrders] = useState(initialOrders);

  const handleCancel = (orderId) => {
    const confirmed = window.confirm("Bạn có chắc muốn huỷ đơn này?");
    if (!confirmed) return;

    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "Đã huỷ" } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Danh Sách Đơn Gọi Món
            </h1>
            <div className="space-y-4">
            {orders.map((order) => {
                const total = order.items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
                );

                return (
                <div
                    key={order.id}
                    className="bg-white rounded-2xl shadow p-5 border border-gray-200"
                >
                    <div className="flex justify-between items-center mb-2">
                    <div>
                        <p className="text-lg font-semibold text-gray-700">
                        Mã đơn: {order.id}
                        </p>
                        <p className="text-sm text-gray-500">
                        Thời gian: {order.time}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span
                        className={`font-medium ${statusColor[order.status]}`}
                        >
                        {order.status}
                        </span>
                        {order.status === "Đang xử lý" && (
                        <button
                            onClick={() => handleCancel(order.id)}
                            className="text-sm text-red-600 border border-red-500 rounded px-3 py-1 hover:bg-red-50"
                        >
                            Huỷ đơn
                        </button>
                        )}
                    </div>
                    </div>
                    <ul className="pl-5 list-disc text-gray-600 mb-3">
                    {order.items.map((item, idx) => (
                        <li key={idx}>
                        {item.name} × {item.quantity} —{" "}
                        {formatCurrency(item.price * item.quantity)}
                        </li>
                    ))}
                    </ul>
                    <div className="text-right font-semibold text-gray-800">
                    Tổng tiền:{" "}
                    <span className="text-blue-600">{formatCurrency(total)}</span>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}

