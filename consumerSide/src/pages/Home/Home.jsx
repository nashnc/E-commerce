import React from "react";
import HomeSlider from "../../components/Sliders/HomeSlider/HomeSlider";
import HomeCatSlider from "../../components/Sliders/HomeCatSlider/HomeCatSlider";
import AdsBannerSlider from "../../components/Sliders/AdsBannerSlider/AdsBannerSlider";
import FreeShipping from "../../components/FreeShipping/FreeShipping";
import LeftSection from "../../components/Sections/LeftSection";
import RightSection from "../../components/Sections/RightSection";
import ProductSlider from "../../components/Sliders/ProductSlider/ProductSlider";
import BlogSection from "../../components/BlogSection/BlogSection";
import Footer from "../../components/Footer/Footer";
import HomeSliderV2 from "../../components/Sliders/HomeSliderV2/HomeSliderV2";
import BannerBoxV2 from "../../components/Sliders/AdsBannerSlider/BannerBoxv2/BannerBoxV2";
const Home = () => {
  return (
    <>
      {/* <HomeSlider /> */}
      <section className="py-6">
        <div className="container flex gap-5">
          <div className="part1 w-[70%] overflow-hidden">
            <HomeSliderV2 />
          </div>
          <div className="part2 flex w-[30%] flex-col items-center justify-between gap-5 overflow-hidden">
            <BannerBoxV2
              info="left"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              }
              title={
                <>
                  Samsung Gear <br /> VR Camera
                </>
              }
            />
            <BannerBoxV2
              info="right"
              image={
                "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              }
              title={
                <>
                  Marcel Dining
                  <br />
                  Room Chair
                </>
              }
            />
          </div>
        </div>
      </section>
      <HomeCatSlider />
      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <LeftSection />
            <RightSection />
          </div>
          <ProductSlider items={6} />
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

          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="bg-white py-5 pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>

          <ProductSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      <section className="blogSection bg-white py-5 pb-8 pt-0">
        <div className="container">
          <h2 className="mb-4 text-[20px] font-[600]">From The Blog</h2>
          <BlogSection />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
