import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "../../pages/loginPage/Login";
import Signup from "../../pages/signupPage/Signup";
import Home from "../../pages/homePage/Home";
import RequireAuth from "../auth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Explore from "../../pages/explorePage/Explore";

import Bookmark from "../../pages/bookmarksPage/Bookmark";
import LikePost from "../../pages/likePostPage/LikePost";
import AppLayout from "./AppLayout";
import Error from "../../pages/errorPage/Error";
import UserDetail from "../../pages/userDetailPage/UserDetail";

const Router = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <AppLayout />
        </RequireAuth>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/bookmark",
          element: <Bookmark />,
        },
        {
          path: "/likepost",
          element: <LikePost />,
        },
        {
          path: "/user/:username",
          element: <UserDetail />,
        },
      ],
      errorElement: <Error />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
      <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </div>
  );
};

export default Router;
