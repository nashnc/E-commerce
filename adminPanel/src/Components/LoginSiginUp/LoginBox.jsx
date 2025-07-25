import React, { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { LoadingButton } from "@mui/lab";

const loginWith = [
  { icon: <FcGoogle />, text: "Google" },
  { icon: <FaSquareFacebook color="#1877f2" />, text: "Facebook" },
];

const messages = {
  login: (
    <>
      Welcome Back! <br />
      Sign in with your credentials.
    </>
  ),
  signup: (
    <>
      Join us today! Get special <br />
      benefits and stay up-to-date.
    </>
  ),
};

const LoginBox = ({ show }) => {
  const image =
    "https://ecme-react.themenate.net/img/logo/logo-light-streamline.png";

  const [loadingIndex, setLoadingIndex] = useState(null);

  const handleLogin = (index) => {
    setLoadingIndex(index);

    setTimeout(() => {
      setLoadingIndex(null);
      console.log(`Logged in with ${loginWith[index].text}`);
    }, 2000);
  };

  return (
    <div className="loginBox card mx-auto mt-5 h-[300px] w-full">
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt="Streamline logo"
          className="h-[50px] w-[50px] min-w-[50px]"
        />
      </div>

      <h1 className="mt-4 text-center text-[35px] font-[800]">
        {messages[show]}
      </h1>

      <div className="mt-4 flex items-end justify-center gap-3">
        {loginWith.map((method, index) => (
          <LoadingButton
            key={method.text}
            className="btn-dark-border !capitalize"
            startIcon={method.icon}
            onClick={() => handleLogin(index)}
            loading={loadingIndex === index}
            loadingPosition="start"
            variant="outlined"
          >
            Continue with {method.text}
          </LoadingButton>
        ))}
      </div>
    </div>
  );
};

export default LoginBox;
