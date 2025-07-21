import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigtions from "./Components/Navigations/Navigtions";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <Navigtions />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
