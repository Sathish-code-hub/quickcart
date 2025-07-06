// components/client/AllProductsList.jsx
"use client";

import ProductCard from "../components/ProductCard";
import { useRouter } from "next/navigation";

const AllProductsList = ({ products, currency }) => {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12 pb-14 w-full">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          currency={currency}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default AllProductsList;
