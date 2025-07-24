import React from "react";

const LoginDivider = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center gap-3">
        <hr className="flex h-[2px] w-[100px] items-end bg-slate-500" />
        <p>or, Signin in with e-mail </p>
        <hr className="flex h-[2px] w-[100px] items-end bg-slate-500" />
      </div>
    </>
  );
};

export default LoginDivider;
