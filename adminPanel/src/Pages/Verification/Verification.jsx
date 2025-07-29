import React from "react";
import OtpBox from "../../components/OtpBox/OtpBox";
import LoginSignupNavs from "../../Components/LoginSiginUp/LoginSignupNavs";

const Verification = () => {
  return (
    <>
      <img
        src="/bkgnd.jpg"
        className="absolute left-0 top-0 -z-10 h-screen w-full object-cover opacity-25"
        alt=""
      />
      <LoginSignupNavs />
      <section className="section py-10">
        <div className="card m-auto w-[600px] min-w-[400px] rounded-md p-4 shadow-md">
          <div className="flex items-center justify-center text-center">
            <img src="/otp.png" alt="" width="80" />
          </div>
          <h3 className="mt-4 text-center text-[18px] text-black">
            Verify OTP
          </h3>
          <p className="mt-0 text-center">
            OTP sent to&nbsp;
            <span className="font-bold text-primary">
              mernProject@testmail.com
            </span>
          </p>
          <OtpBox />
        </div>
      </section>
    </>
  );
};
export default Verification;
