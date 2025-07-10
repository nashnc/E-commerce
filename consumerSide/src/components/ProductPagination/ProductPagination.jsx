import React from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import './ProductPagination.css'

const ProductPagination = () => {
     return (
          <>
               <Stack spacing={2}>
                    <Pagination count={10} showFirstButton showLastButton />
               </Stack>
          </>
     );
};

export default ProductPagination;
