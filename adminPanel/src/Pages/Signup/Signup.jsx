import React from "react";
import LoginSignupNavs from "../../Components/LoginSiginUp/LoginSignupNavs";
import LoginBox from "../../Components/LoginSiginUp/LoginBox";
import LoginDivider from "../../Components/LoginSiginUp/LoginDivider";
import LoginForm from "../../Components/LoginSiginUp/LoginForm";

const Signup = () => {
  return (
    <>
      <img
        src="/bkgnd.jpg"
        className="absolute left-0 top-0 -z-10 h-screen w-full object-cover opacity-25"
        alt=""
      />
      <LoginSignupNavs />
      <LoginBox show="signup" />
      <LoginDivider text="Signup" />
      <LoginForm show="signup" />
    </>
  );
};

export default Signup;
