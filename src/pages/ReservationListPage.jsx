// src/components/ReservationList.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const initialReservations = [
  {
    id: "RES001",
    name: "Nguyễn Văn A",
    datetime: "2025-06-08T19:00",
    people: 4,
    note: "Yêu cầu bàn gần cửa sổ",
    status: "Chờ xác nhận",
  },
  {
    id: "RES002",
    name: "Trần Thị B",
    datetime: "2025-06-09T12:30",
    people: 2,
    note: "",
    status: "Đã xác nhận",
  },
  {
    id: "RES003",
    name: "Lê Văn C",
    datetime: "2025-06-07T18:00",
    people: 6,
    note: "Sinh nhật",
    status: "Đã huỷ",
  },
];

const statusColor = {
  "Chờ xác nhận": "text-yellow-500",
  "Đã xác nhận": "text-green-600",
  "Đã huỷ": "text-red-500",
};

const formatDateTime = (datetime) => {
  const date = new Date(datetime);
  return date.toLocaleString("vi-VN", {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default function ReservationList() {
     const [reservations, setReservations] = useState(initialReservations);

    const handleCancel = (id) => {
        const confirmCancel = window.confirm("Bạn có chắc muốn huỷ đặt bàn này?");
        if (!confirmCancel) return;

        const updated = reservations.map((r) =>
        r.id === id ? { ...r, status: "Đã huỷ" } : r
        );
        setReservations(updated);
    };
    return (
        <>
        <Header/>
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Danh Sách Đặt Bàn
                </h1>
                <div className="space-y-4">
                {reservations.map((res) => (
                    <div
                    key={res.id}
                    className="bg-white border border-gray-200 shadow rounded-2xl p-5"
                    >
                    <div className="flex justify-between items-center mb-3">
                        <div>
                        <p className="text-lg font-semibold text-gray-700">
                            Mã đặt bàn: {res.id}
                        </p>
                        <p className="text-sm text-gray-500">
                            Thời gian: {formatDateTime(res.datetime)}
                        </p>
                        </div>
                        <div className="flex items-center gap-3">
                        <span
                        className={`font-medium ${statusColor[res.status]}`}
                        >
                        {res.status}
                        </span>
                        {res.status === "Chờ xác nhận" && (
                            <button
                                onClick={() => handleCancel(res.id)}
                                className="text-sm text-red-600 border border-red-500 rounded px-3 py-1 hover:bg-red-50"
                            >
                                Huỷ đơn
                            </button>
                        )}
                    </div>
                    </div>
                    <div className="text-gray-600">
                        <p>
                        <strong>Khách:</strong> {res.name}
                        </p>
                        <p>
                        <strong>Số người:</strong> {res.people}
                        </p>
                        {res.note && (
                        <p>
                            <strong>Ghi chú:</strong> {res.note}
                        </p>
                        )}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
