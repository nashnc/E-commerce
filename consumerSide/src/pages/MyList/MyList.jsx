import React from "react";
import MyListLeftSection from "../../components/MyList/MyListLeftSection";
import "./MyList.css";
import MyAccountLeft from "../../components/MyAccount/MyAccountLeft";
const MyList = () => {
  return (
    <>
      <section className="w-full py-10">
        <div className="container flex gap-5">
          <div className="col1 w-[20%]">
            <MyAccountLeft />
          </div>
          <div className="col2 w-[50%]">
            <MyListLeftSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default MyList;
