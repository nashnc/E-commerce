import React from "react";
import OtpBox from "../../components/OtpBox/OtpBox";

const Verification = () => {
  return (
    <section className="section py-10">
      <div className="container">
        <div className="card m-auto w-[400px] rounded-md bg-white p-4 shadow-md">
          <div className="flex items-center justify-center text-center">
            <img src="/otp.png" alt="" width="80" />
          </div>
          <h3 className="mt-4 text-center text-[18px] text-black">
            Verify OTP
          </h3>
          <p className="mt-0 text-center">
            OTP sent to{" "}
            <span className="font-bold text-primary">
              mernProject@testmail.com
            </span>
          </p>
          <OtpBox />
        </div>
      </div>
    </section>
  );
};
export default Verification;
