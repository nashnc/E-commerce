import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const MyAccountRight = () => {
  return (
    <>
      <div className="card rounded-md bg-white p-5 shadow-md">
        <h2 className="border-b border-[rgba(0,0,0,0.1)] pb-3">My Profile</h2>
        <form action="" className="mt-5">
          <div className="flex items-center gap-5">
            <div className="w-[50%]">
              <TextField
                type="text"
                className="w-full"
                label="Full Name"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="w-[50%]">
              <TextField
                type="email"
                className="w-full"
                label="e-mail"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-5">
            <div className="w-full">
              <TextField
                type="number"
                className="w-full"
                label="Mobile"
                variant="outlined"
                size="small"
              />
            </div>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <Button className="btn-orange btn-lg w-[40%]">Update</Button>
            <Button className="btn-orange btn-border btn-lg w-[40%]">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyAccountRight;
