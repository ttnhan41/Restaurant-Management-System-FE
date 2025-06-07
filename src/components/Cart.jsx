import React from "react";

const Cart = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-xl mx-auto p-4 mt-10 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Giỏ Hàng</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Giỏ hàng của bạn đang trống.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} className="py-4 flex justify-between items-center">
              <div>
                <p className="font-semibold text-teal-800">{item.name}</p>
                <p className="text-gray-500">x{item.quantity}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-teal-600 font-medium">
                  {(item.price * item.quantity).toLocaleString()} đ
                </span>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Xoá
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <>
          <div className="mt-4 text-right text-lg text-teal-800 font-bold">
            Tổng: {total.toLocaleString()} đ
          </div>
          <button
            onClick={onCheckout}
            className="mt-4 w-full bg-teal-700 text-white py-2 rounded-xl hover:bg-teal-800 transition"
          >
            Thanh Toán
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

