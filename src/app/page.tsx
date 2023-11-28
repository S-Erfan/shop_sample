"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Index";
import ProductMain from "@/components/Products/ProductMain";

export default function Home() {
  const searchByTitle = (e: string) => {
    console.log(e);
  };

  return (
    <>
      <Header onSearched={searchByTitle} />
      <main className={"container "}>
        <ProductMain />
      </main>
      <Footer />
    </>
  );
}
