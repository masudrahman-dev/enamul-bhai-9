import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader:  () => fetch("https://raw.githubusercontent.com/masudrahman-dev/enamul-bhai-7-data/main/category.json"),
      },
     {
      path:"/serviceDetails",
      element:<ServiceDetails></ServiceDetails>,
     },
    ],
  },
]);

export default router;
