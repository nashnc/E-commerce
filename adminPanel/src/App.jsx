import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";

import Navigations from "./Components/Navigations/Navigations";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Products from "./Pages/Products/Products";

export const MyContext = createContext();

function App() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const values = {
    sideBarIsOpen,
    setSideBarIsOpen,
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
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/product",
      element: <Products />,
    },
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;
