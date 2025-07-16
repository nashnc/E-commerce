import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const ForgotPassword = () => {
  const context = useContext(MyContext);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [formField, setFormField] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const forgotPassword = () => {
    if (formField.password !== formField.confirmPassword) {
      context.openAlertBox("error", "Passwords do not match");
      return;
    }
    context.openAlertBox("success", "OTP Sent");
    history("/verify");
  };

  return (
    <>
      <section className="section py-10">
        <div className="container">
          <div className="card m-auto w-[400px] rounded-md bg-white p-4 shadow-md">
            <h3 className="text-center text-[18px] text-black"></h3>
            <form action="" className="mt-5 w-full">
              <div className="formGroup relative mb-5 w-full">
                <TextField
                  type={isShowPassword === true ? "text" : "password"}
                  id="password"
                  label="Password *"
                  variant="outlined"
                  name="password"
                  className="w-full"
                  value={formField.password}
                  onChange={handleChange}
                />
                <Button
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                  className="!absolute right-[10px] top-[10px] z-50 !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !text-[#000] opacity-75"
                  type="button"
                >
                  {isShowPassword === true ? (
                    <IoIosEyeOff className="text-[35px]" />
                  ) : (
                    <IoIosEye className="text-[35px]" />
                  )}
                </Button>
              </div>

              <div className="formGroup relative mb-5 w-full">
                <TextField
                  type={isShowConfirmPassword === true ? "text" : "password"}
                  id="confirmPassword"
                  label="Confirm Password *"
                  variant="outlined"
                  name="confirmPassword"
                  className="w-full"
                  value={formField.confirmPassword}
                  onChange={handleChange}
                />
                <Button
                  onClick={() => {
                    setIsShowConfirmPassword(!isShowConfirmPassword);
                  }}
                  className="!absolute right-[10px] top-[10px] z-50 !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !text-[#000] opacity-75"
                  type="button"
                >
                  {isShowConfirmPassword === true ? (
                    <IoIosEyeOff className="text-[35px]" />
                  ) : (
                    <IoIosEye className="text-[35px]" />
                  )}
                </Button>
              </div>

              <div className="mb-3 mt-3 flex w-full items-center">
                <Button className="btn-orange btn-lg w-full">
                  Change Password
                </Button>
              </div>
              <p className="text-center text-[14px] font-[600]">
                Not registered?
                <Link
                  className="link cursor-pointer text-primary hover:underline"
                  to="/register"
                >
                  Sign Up
                </Link>
              </p>
              <p className="text-center font-[500]">
                Or continue with social account
              </p>
            </form>

            <Button className="btn-lg flex w-full gap-3 !bg-[#f1f1f1] text-[18px] !capitalize !text-black">
              <FcGoogle className="!text-[20px]" /> Sign in with Google
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
