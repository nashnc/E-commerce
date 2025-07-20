import React from "react";

const Badge = (props) => {
  return (
    <>
      <span
        className={`flex items-center justify-center rounded-full px-2 py-1 text-[12px] capitalize ${props.status === "pending" && "bg-primary text-white"} ${props.status === "delivered" && "bg-green-700 text-white"} ${props.status === "confirm" && "bg-green-500 text-white"} `}
      >
        {props.status}{" "}
      </span>
    </>
  );
};

export default Badge;
