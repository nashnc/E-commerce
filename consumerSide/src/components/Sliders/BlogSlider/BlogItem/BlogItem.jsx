import React from "react";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BlogItem = () => {
  return (
    <>
      <div className="blogItem group">
        <div className="imgWrapper relative w-full overflow-hidden rounded-md">
          <img
            src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg"
            alt="blogImage"
            className="w-full cursor-pointer transition-all group-hover:rotate-1 group-hover:scale-105"
          />
          <span className="absolute bottom-[15px] right-[15px] z-50 flex items-center justify-center gap-2 rounded-md bg-primary p-1 text-[11px] font-[500] text-white">
            <IoMdTime className="text-[16px]" /> 5 July, 2025
          </span>
        </div>
        <div className="info py-4">
          <h2 className="text-[16px] font-[600] text-black">
            <Link to="/"> Nullam ullamcorper ornare molestie</Link>
          </h2>
          <p className="mb-4 line-clamp-2 text-[13px] font-[400px] text-[rgba(0,0,0,0.7)]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
            deleniti. Voluptas laudantium odio nisi adipisci quia ullam
            veritatis
          </p>
          <Link
            to="/"
            className="link flex items-center gap-1 text-[14px] font-[500] underline"
          >
            Read More <IoIosArrowForward className="text-[15px]" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
