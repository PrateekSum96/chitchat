import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "../pages/About";
import Auth from "../pages/loginPage/Login";
import Signup from "../pages/signupPage/Signup";
import Home from "../pages/homePage/Home";

const Router = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Auth />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Router;
