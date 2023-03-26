import { createBrowserRouter, redirect } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import Card from "../views/Card";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    // loader: async () => {
    //   if (!localStorage.access_token) {
    //     return redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "/",
        element: <Card />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      }
    ],
  }
]);

export default router;