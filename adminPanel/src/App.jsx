import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";

import Navigations from "./Components/Navigations/Navigations";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Products from "./Pages/Products/Products";
import HomeBanners from "./Pages/HomeBanners/HomeBanners";
import CategoryList from "./Pages/Category/CategoryList";
import SubCategoryList from "./Pages/Category/SubCategoryList";
import Users from "./Pages/Users/Users";
import Orders from "./Pages/Orders/Orders";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Verification from "./Pages/Verification/Verification";
import toast, { Toaster } from "react-hot-toast";

export const MyContext = createContext();

function App() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    sideBarIsOpen,
    setSideBarIsOpen,
    openAlertBox,
    isLogin,
    setIsLogin,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigations />,
    },
    {
      path: "/login",
      element: <Login type />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgot",
      element: <ForgotPassword />,
    },
    {
      path: "/verify",
      element: <Verification />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/homeBanners/list",
      element: <HomeBanners />,
    },
    {
      path: "/homeBanners/list",
      element: <HomeBanners />,
    },
    {
      path: "/category/list",
      element: <CategoryList />,
    },
    {
      path: "/subcategory/list",
      element: <SubCategoryList />,
    },
    {
      path: "/users/list",
      element: <Users />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
      <Toaster />
    </MyContext.Provider>
  );
}

export default App;
