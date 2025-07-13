import ProductItemRating from "../../Sliders/ProductSlider/ProductItemRating";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

const AdditionalDetailsOfProductsReviewTextField = () => {
     return (
          <>
               <div>
                    <form action="" className="w-full mt-5">
                         <TextField
                              id="outlined-multiline-static"
                              label="Write a review ..."
                              multiline
                              rows={5}
                              className="w-full"
                         />
                    </form>
                    <br />
                    <br />

                    <ProductItemRating readAble="false" />

                    <div className="flex items-center mt-5">
                         <Button className="btn-orange">Submit Review</Button>
                    </div>
               </div>
          </>
     );
};
export default AdditionalDetailsOfProductsReviewTextField;
