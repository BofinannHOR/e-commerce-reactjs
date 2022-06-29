import React from "react";
import Card from "../UI/Card";
import ProductItem from "./Product/ProductItem";
import { useEffect, useState } from "react";

const ProductInStock = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://matech-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
      );
      const data = await res.json();
      const fireBaseData = [];
      for (const key in data) {
        fireBaseData.push({
          id: key,
          product_title: data[key].product_title,
          product_price: data[key].product_price,
          product_desc: data[key].product_desc,
          product_slug: data[key].product_slug,
        });
      }

      setProducts(fireBaseData);
    };

    fetchData();
  }, []);

  const productList = products.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      product_title={product.product_title}
      product_desc={product.product_desc}
      product_price={product.product_price}
      product_slug={product.product_slug}
    />
  ));
  return (
    <section>
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span>

        <h2 className="relative inline-block px-4 text-2xl font-bold text-center bg-white">
          Recently Viewed
        </h2>
      </div>
      <Card>{productList}</Card>
    </section>
  );
};

export default ProductInStock;
