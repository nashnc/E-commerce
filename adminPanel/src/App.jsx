import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useState } from "react";

import Navigations from "./Components/Navigations/Navigations";

export const MyContext = createContext();

function App() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <Navigations />
        </>
      ),
    },
  ]);

  const values = { sideBarIsOpen, setSideBarIsOpen };

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
