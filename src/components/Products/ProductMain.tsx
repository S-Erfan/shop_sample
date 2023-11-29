"use client";
import { CategoryCreated, ProductType } from "@/types/products";
import React, { FC, useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface IProps {
  products?: {
    status: number | string;
    result: ProductType[];
    error: any;
  };
}

const ProductMain: FC<IProps> = ({ products }) => {
  const [categories, setCategories] = useState<CategoryCreated[]>([]);

  useEffect(() => {
    if (!products?.error) {
      const uniqueCategoriesSet = new Set(
        products?.result.map((product) => product.category)
      );

      const uniqueCategoriesArray: CategoryCreated[] = Array.from(
        uniqueCategoriesSet
      ).map((category, index) => ({
        label: category,
        id: index + 1,
        checked: false,
      }));

      setCategories(uniqueCategoriesArray);
    }
  }, [products?.result]);

  return (
    <section className="w-full h-full flex flex-col md:flex-row justify-between items-start gap-5 py-5 ">
      <aside className="hidden md:block w-1/4 py-5 px-3 bg-white rounded-lg shadow-lg sticky top-[calc(80px+1rem)] bottom-0 ">
        <div className="flex flex-col items-start justify-start ">
          <h1 className="text-2xl">filter</h1>
          <h3 className="text-lg">categories:</h3>
          <ul className="w-1/2 gap-2 pl-4 flex flex-col mt-4 ">
            {categories.map((cate) => (
              <li key={cate.id} className="w-full rounded-lg  ">
                {cate.label}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <aside className="w-full px-5 py-2 md:hidden flex justify-start items-center gap-4 ">
        <div className="inline">filter</div>
        <div className="flex-1 overflow-x-scroll w-full">
          <div className="w-fit flex justify-start items-center gap-3">
            {[1, 2, 3, 4, 5].map((it) => (
              <div
                className="bg-neutral-400/60 h-6 rounded-lg animate-pulse w-[85px]"
                key={it}
              ></div>
            ))}
          </div>
        </div>
      </aside>
      <section className="w-full md:w-3/4 bg-white rounded-lg shadow-lg p-5">
        <div className="flex justify-start flex-wrap items-center -m-4">
          {products?.status === 200 &&
            products?.result?.map((i) => (
              <div className="p-4 w-full sm:w-1/2 lg:w-1/3 h-auto " key={i.id}>
                <ProductCard
                  id={i.id}
                  category={i.category}
                  image={i.image}
                  title={i.title}
                  price={i.price}
                />
              </div>
            ))}
        </div>
      </section>
    </section>
  );
};

export default ProductMain;
