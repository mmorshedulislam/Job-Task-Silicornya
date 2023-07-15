import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Dashboard from "../layouts/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: "Register page",
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "teacher",
        element: <div>Teacher</div>,
      },
      {
        path: "student",
        element: <div>student</div>,
      },
    ],
  },
]);

export default routes;
