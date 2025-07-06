// components/AddToCartButtons.jsx

"use client";

import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const AddToCartButtons = ({ productId }) => {
  const { user, addToCart, router } = useAppContext();

  if (!user) {
    return (
      <div className="flex items-center mt-10 gap-4">
        <button
          onClick={() => toast.error("⚠️ Please login to add items to cart.")}
          className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={() => toast.error("⚠️ Please login to buy products.")}
          className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition"
        >
          Buy now
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center mt-10 gap-4">
      <button
        onClick={() => addToCart(productId)}
        className="w-full py-3.5 bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition"
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
          addToCart(productId);
          router.push("/cart");
        }}
        className="w-full py-3.5 bg-orange-500 text-white hover:bg-orange-600 transition"
      >
        Buy now
      </button>
    </div>
  );
};

export default AddToCartButtons;
