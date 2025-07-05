import React from "react";
import { Link } from "react-router-dom";

const Bannerbox = (props) => {
  return (
    <>
      <div className="box bannerBox group overflow-hidden rounded-lg">
        <Link to={props.link}>
          <img
            src={props.img}
            className="w-full transition-all group-hover:rotate-1 group-hover:scale-110"
            alt="banner"
          />
        </Link>
      </div>
    </>
  );
};

export default Bannerbox;
