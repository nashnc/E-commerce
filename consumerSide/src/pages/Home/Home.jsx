import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import CatSlider from "../../components/CatSlider/CatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <section className="bg-white py-16">
        <div className="container">
          <div className="freeShipping flex w-full items-center justify-between rounded-md border-2 border-[#ff5252] p-4 py-2">
            {/* col1 */}
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">Free Shipping</span>
            </div>
            {/* col1 */}
            {/* col2 */}
            <div className="col2">
              <p className="font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>{" "}
            </div>
            {/* col2 */}
            {/* col3 */}
            <div className="col3">
              <p className="text-[25px] font-bold">- Only $200*</p>
            </div>

            {/* col3 */}
          </div>
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
