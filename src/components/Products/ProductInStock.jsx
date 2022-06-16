import React from "react";
import Card from "../UI/Card";
import ProductItem from "./Product/ProductItem";

const INIT_DATA = [
  {
    id: "a1",
    product_title: "ROG Strix Scar 17",
    product_desc: "i9-12900H, 16GB (DDR5), 1TB M.2, NVIDIA RTX 3080 8GB",
    product_price: 2899,
    product_slug:
      "https://dlcdnwebimgs.asus.com/files/media/E2F08C81-7CDB-42B7-9657-C106E47C4941/v2/images/large/1x/8__design_laptop_purple.png",
  },
  {
    id: "a2",
    product_title: "ROG Zephyrus M16",
    product_desc: "i7-12700H, 16GB | 256GB M.2 PCIe, NVIDIA RTX3060 6GB",
    product_price: 1869,
    product_slug:
      "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/EDIT20.jpg",
  },
  {
    id: "a3",
    product_title: "MacBook Pro 14.2",
    product_desc: "M1 Pro, 16GB | 512GB, 14-Core GPU",
    product_price: 1999,
    product_slug:
      "https://www.bhphotovideo.com/images/images2500x2500/apple_mkgp3ll_a_14_2_macbook_pro_with_1668197.jpg",
  },
  {
    id: "a4",
    product_title: "MSI GP76",
    product_desc: "i7-11800H,  8GB (DDR4), 512GB M.2, NVIDIA RTX 3060 6GB",
    product_price: 1665,
    product_slug:
      "https://asset.msi.com/resize/image/global/product/product_16389311078fdb771d50936ce21010bbaf5457bdec.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
  },
];
const ProductInStock = () => {
  const productList = INIT_DATA.map((product) => (
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
