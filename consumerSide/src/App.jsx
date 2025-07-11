import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./ProductDetails/ProductDetails";
function App() {
     return (
          <>
               <BrowserRouter>
                    <Header />
                    <Routes>
                         <Route path={"/"} exact={true} element={<Home />} />
                         <Route
                              path={"/items"}
                              exact={true}
                              element={<ProductListing />}
                         />
                         <Route
                              path={"/seeitems/:id"}
                              exact={true}
                              element={<ProductDetails />}
                         />
                    </Routes>
                    <Footer />
               </BrowserRouter>
          </>
     );
}

export default App;
 