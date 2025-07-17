import React from "react";
import CheckoutLeftCol from "../../components/Checkout/CheckoutLeftCol";
import "./Checkout.css";
import CheckoutRightCol from "../../components/Checkout/CheckoutRightCol";

const Checkout = () => {
  return (
    <>
      <section className="py-10">
        <div className="container flex gap-5">
          <div className="leftCol w-[70%]">
            <CheckoutLeftCol />
          </div>
          <div className="leftCol w-[30%]">
            <CheckoutRightCol />
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
