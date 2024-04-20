import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Xizmatlar from "../Pages/Xizmatlar/Xizmatlar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Xizmatlar",
        element: <Xizmatlar />,
      },
    ],
  },
]);

export default router;
