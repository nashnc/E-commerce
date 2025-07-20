import React from "react";
import MyAccountLeft from "../../components/MyAccount/MyAccountLeft";
import MyAccountRight from "../../components/MyAccount/MyAccountRight";

const MyAccount = () => {
  return (
    <>
      <section className="w-full py-10">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <MyAccountLeft />
          </div>
          <div className="col2 w-[80%] over">
            <MyAccountRight />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
