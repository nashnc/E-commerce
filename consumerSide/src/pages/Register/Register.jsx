import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <section className="section py-10">
        <div className="container ">
          <div className="card shadow-md w-[400px] m-auto  rounded-md bg-white p-4">
            <h3 className="text-center text-[18px] text-black">
              Register with a new account
            </h3>
            <form action="" className="w-full mt-5">
              <div className="formGroup w-full mb-5">
                <TextField
                  type="text"
                  id="name"
                  label="EFull Name *"
                  variant="outlined"
                  className="w-full"
                />
                <TextField
                  type="email"
                  id="email"
                  label="Email Id *"
                  variant="outlined"
                  className="w-full"
                />
              </div>
              <div className="formGroup relative w-full mb-5">
                <TextField
                  type={isShowPassword === true ? "text" : "password"}
                  id="password"
                  label="Password *"
                  variant="outlined"
                  className="w-full"
                />
                <Button
                  onClick={() => {
                    setIsShowPassword(!isShowPassword);
                  }}
                  className="!absolute top-[10px] right-[10px]  z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000] opacity-75 "
                >
                  {isShowPassword === true ? (
                    <IoIosEyeOff className="text-[35px]" />
                  ) : (
                    <IoIosEye className="text-[35px] " />
                  )}
                </Button>
              </div>

              <div className="flex items-center w-full mt-3 mb-3">
                <Button className="btn-orange btn-lg w-full ">Register</Button>
              </div>
              <p className=" text-center text-[14px] font-[600]">
                Already have an account?
                <Link
                  className=" link cursor-pointer text-primary hover:underline"
                  to="/login"
                >
                  Login
                </Link>
              </p>
              <p className="text-center  font-[500] ">
                Or continue with social account
              </p>
            </form>

            <Button className=" flex gap-3 w-full text-[18px]  !bg-[#f1f1f1] btn-lg  !text-black !capitalize">
              <FcGoogle className="!text-[20px]" /> Sign in with Google
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
