import React from "react";

const LoginDivider = (props) => {
  return (
    <>
      <div className="flex w-full items-center justify-center gap-3">
        <hr className="flex h-[2px] w-[100px] items-end bg-[rgba(0,0,0,0.5)]" />
        <p>or, {props.text} in with e-mail </p>
        <hr className="flex h-[2px] w-[100px] items-end bg-[rgba(0,0,0,0.5)]" />
      </div>
    </>
  );
};

export default LoginDivider;
