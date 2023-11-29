import { URLS } from "@/Api/routes";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Index";
import ProductMain from "@/components/Products/ProductMain";
import { ProductType } from "@/types/products";
import axios from "axios";

const getData = async () => {
  const response: {
    status: number | string;
    result: ProductType[];
    error: any;
  } = {
    result: [],
    status: "",
    error: "",
  };
  try {
    const { status, data } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    response.status = status;
    response.result = data;
  } catch (error) {
    response.error = error;
  } finally {
    return response;
  }
};

export default async function Home() {
  let products = await getData();

  return (
    <>
      <Header />
      <main className={"container "}>
        <ProductMain products={products} />
      </main>
      <Footer />
    </>
  );
}
