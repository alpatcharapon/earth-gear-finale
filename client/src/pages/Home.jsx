// rafce
import React from "react";
import ContentCarousel from "../components/home/ContentCarousel";
import BestSeller from "../components/home/BestSeller";
import NewProduct from "../components/home/NewProduct";

const Home = () => {
  return (
    <div>
      <ContentCarousel />

      <p className="text-2xl text-center my-4">Best Sellers</p>
      <BestSeller />

      <p className="text-2xl text-center my-4">Our Products</p>
      <NewProduct />



    </div>
  );
};

export default Home;
