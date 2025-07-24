import React from "react";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const LoginSignupNavs = () => {
  const image = [
    "https://ecme-react.themenate.net/img/logo/logo-light-full.png",
  ];
  return (
    <>
      <section>
        <header className="left-0 top-0 flex w-full items-center justify-between">
          <div className="logo">
            <Link to={"/"}>
              <img
                src={image}
                alt="logo"
                className="w-[140px] min-w-[140px] object-cover p-5"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4 p-5">
            <Button
              component={NavLink}
              exact={true}
              activeClassName="isActive"
              to="/login"
              className="btn-dark-border btn-sm"
            >
              Login
            </Button>
            <Button
              component={NavLink}
              exact={true}
              activeClassName="isActive"
              to="/signup"
              className="btn-dark-border btn-sm"
            >
              Signup
            </Button>
          </div>
        </header>
      </section>
    </>
  );
};

export default LoginSignupNavs;
