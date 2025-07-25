import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { MyContext } from "../../App";

const LoginForm = ({ show }) => {
  const context = useContext(MyContext);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });
  const history = useNavigate();
  const forgotPassword = () => {
    context.openAlertBox("success", "OTP Sent");
    history("/verify");
  };

  const optinFor = {
    login: <>Remember Me</>,
    signup: (
      <>
        <p>
          By signing up you have agreed to our&nbsp;
          <span component={Link} className="link font-[500]" to="/">
            Terms
          </span>
          &nbsp;&&nbsp;
          <span component={Link} className="link font-[500]" to="/">
            Privacy Policy
          </span>
        </p>
      </>
    ),
  };

  return (
    <>
      <section className="section py-10">
        <div className="card m-auto w-[600px] rounded-md p-4 shadow-md">
          <h3 className="text-center text-[18px] text-black">
            Login to your account
          </h3>
          <form action="" className="mt-5 w-full">
            <div className="formGroup mb-5 w-full">
              <TextField
                type="email"
                id="email"
                label="Email Id *"
                variant="outlined"
                className="w-full"
                name="email"
              />
            </div>
            <div className="formGroup relative mb-5 w-full">
              <TextField
                type={isShowPassword === true ? "text" : "password"}
                id="password"
                label="Password *"
                variant="outlined"
                name="password"
                className="w-full"
              />
              <Button
                onClick={() => {
                  setIsShowPassword(!isShowPassword);
                }}
                className="!absolute right-[10px] top-[10px] z-50 !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !text-[#000] opacity-75"
              >
                {isShowPassword === true ? (
                  <IoIosEyeOff className="text-[35px]" />
                ) : (
                  <IoIosEye className="text-[35px]" />
                )}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              {show === "login" ? (
                <a
                  onClick={forgotPassword}
                  className="link cursor-pointer text-[16px] font-[500]"
                >
                  Forgot Password?
                </a>
              ) : (
                ""
              )}
              <FormControlLabel control={<Checkbox />} label={optinFor[show]} />
            </div>

            <div className="mb-3 mt-3 flex w-full items-center">
              {show === "login" ? (
                <Button className="btn-dark-border btn-lg w-full">Login</Button>
              ) : (
                <Button className="btn-dark-border btn-lg w-full !capitalize">
                  Create Account
                </Button>
              )}
            </div>
            {show === "login" ? (
              <p className="text-center text-[14px] font-[600]">
                Don’t have an account?&nbsp;
                <Link
                  className="link cursor-pointer text-primary hover:underline"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </p>
            ) : (
              <p className="text-center text-[14px] font-[600]">
                Already have an account?&nbsp;
                <Link
                  className="link cursor-pointer text-primary hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
