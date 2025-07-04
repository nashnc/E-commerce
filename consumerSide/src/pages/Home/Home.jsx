import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import CatSlider from "../../components/CatSlider/CatSlider";
import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import FreeShipping from "../../components/FreeShipping/FreeShipping";
import LeftSection from "../../components/Sections/LeftSection";
import RightSection from "../../components/Sections/RightSection";
import ProductsSlider from "../../components/ProductsSlider";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <LeftSection />
            <RightSection />
          </div>
          <ProductsSlider items={6} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <FreeShipping />
          <AdsBannerSlider items={4} />
        </div>
      </section>

      <section className="bg-white py-5 pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>

          <ProductsSlider items={6} />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
