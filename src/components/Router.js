import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "../pages/About";
import Login from "../pages/loginPage/Login";
import Signup from "../pages/signupPage/Signup";
import Home from "../pages/homePage/Home";
import RequireAuth from "./auth/RequireAuth";

const Router = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <Home />
        </RequireAuth>
      ),
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
      path: "/about",
      element: (
        <RequireAuth>
          <About />
        </RequireAuth>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Router;
