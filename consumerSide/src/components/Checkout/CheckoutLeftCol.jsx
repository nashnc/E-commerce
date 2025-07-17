import React from "react";
import TextField from "@mui/material/TextField";

const CheckoutLeftCol = () => {
  return (
    <>
      <div className="card rounded-md bg-white p-5 shadow-md">
        <h1>Billing Details</h1>
        <form action="" className="mt-5 w-full">
          <div className="item flex gap-3">
            <div className="col w-[50%]">
              <TextField
                type="text"
                className="w-full"
                label="Full Name"
                variant="outlined"
              />
            </div>
            <div className="col w-[50%]">
              <TextField
                type="email"
                className="w-full"
                label="e-mail"
                variant="outlined"
              />
            </div>
          </div>
          <h6 className="mb-3 mt-3 text-[14px] font-[500]">Street Address *</h6>

          <div className="col flex w-full flex-col gap-3">
            <TextField
              type="text"
              className="w-full"
              label="House Number and Street Name"
              variant="outlined"
            />

            <TextField
              type="text"
              className="w-full"
              label="Apartment, Suite, Unit, etc.(optional)"
              variant="outlined"
            />
          </div>
          <h6 className="mb-3 mt-3 text-[14px] font-[500]">Town / City *</h6>

          <div className="col flex w-full">
            <TextField
              type="text"
              className="w-full"
              label="City"
              variant="outlined"
            />
          </div>
          <h6 className="mb-3 mt-3 text-[14px] font-[500]">State *</h6>

          <div className="col flex w-full">
            <TextField
              type="text"
              className="w-full"
              label="State"
              variant="outlined"
            />
          </div>
          <h6 className="mb-3 mt-3 text-[14px] font-[500]">Country *</h6>

          <div className="col flex w-full">
            <TextField
              type="text"
              className="w-full"
              label="Country"
              variant="outlined"
            />
          </div>
          <h6 className="mb-3 mt-3 text-[14px] font-[500]">Postcode / ZIP *</h6>
          <div className="item flex gap-3">
            <div className="col w-[50%]">
              <TextField
                type="number"
                className="w-full"
                label="Postcode"
                variant="outlined"
              />
            </div>
            <div className="col w-[50%]">
              <TextField
                type="number"
                className="w-full"
                label="Phone"
                variant="outlined"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutLeftCol;
