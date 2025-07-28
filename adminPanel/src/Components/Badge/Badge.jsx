import React from "react";

const Badge = (props) => {
  return (
    <>
      {props.titles === "" ? (
        <p
          className={` ${props.status === "delivered" && "bg-green-700 text-white"} ${props.status === "confirm" && "bg-green-500 text-white"} `}
        >
          {props.status}
        </p>
      ) : (
        <>
          {props.titles.map((title, index) => (
            <p
              key={index}
              className="m-2 inline-block rounded-full bg-primary px-2 py-1 text-[14px] text-white"
            >
              {title}
            </p>
          ))}
        </>
      )}
    </>
  );
};

export default Badge;
