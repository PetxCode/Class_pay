import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/auth/LoginScreen";
import Private from "./Private";
import CartScreen from "../pages/CartScreen";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Private>
        <Layout />
      </Private>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "/cart",
        element: <CartScreen />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginScreen />,
  },
]);
