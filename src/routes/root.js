import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import TeacherDashboard from "../pages/Dashboard/Teacher/TeacherDashboard";
import StudentDashboard from "../pages/Dashboard/Student/StudentDashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "teacher",
        element: <TeacherDashboard />,
      },
      {
        path: "student",
        element: <StudentDashboard />,
      },
    ],
  },
]);

export default routes;
