import "./App.css";
import ProductDetails from "./ProductDetails/ProductDetails";
import CartSlide from "./components/CartSlide/CartSlide";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ShowProductDetailsModal from "./components/ShowProductDetailsModal/ShowProductDetailsModal";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ProductListing from "./pages/ProductListing/ProductListing";
import Register from "./pages/Register/Register";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };
  const [openCartSlide, setOpenCartSlide] = useState(false);

  const toggleCartSlide = (newOpen) => () => {
    setOpenCartSlide(newOpen);
  };

  const values = { setOpenProductDetailsModal, setOpenCartSlide };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route
              path={"/product"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/cart"} exact={true} element={<Cart />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
        <CartSlide open={openCartSlide} toggleCart={toggleCartSlide} />
      </BrowserRouter>
      <ShowProductDetailsModal
        open={openProductDetailsModal}
        close={handleCloseProductDetailsModal}
      />
    </>
  );
}

export default App;
export { MyContext };
