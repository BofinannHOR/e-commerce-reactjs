import React from "react";
import Card from "../UI/Card";
import ProductItem from "./Product/ProductItem";
import { useEffect, useState } from "react";

const ProductInStock = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://matech-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
      );
      if (!res.ok) {
        throw new Error("something went wrong when try to get data");
      }
      const data = await res.json();
      console.log(data);
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
      setLoading(false);
    };
    fetchData().catch((error) => {
      setLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (loading) {
    return (
      <section className="spinner-container">
        <div className="loading-spinner"></div>
      </section>
    );
  }
  if (httpError) {
    return (
      <div
        className="p-4 text-red-700 rounded border-red-900/10 bg-red-50"
        role="alert"
      >
        <strong className="text-sm font-medium">{httpError} !</strong>
      </div>
    );
  }

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
