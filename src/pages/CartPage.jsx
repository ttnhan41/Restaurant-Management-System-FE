import React, { useState } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CartPage = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Món Bò Sốt Vang", price: 120000, quantity: 2 },
    { id: 2, name: "Gỏi Cuốn Tôm Thịt", price: 35000, quantity: 3 },
  ]);

  return (
    <>
      <Header/>
      <div className="bg-gray-50 min-h-screen p-4">
        <Cart
          items={items}
          onRemove={(id) => setItems(items.filter(i => i.id !== id))}
          onCheckout={() => alert("Cảm ơn bạn đã đặt hàng!")}
        />
      </div>
      <Footer/>
    </>
  );
};

export default CartPage;

