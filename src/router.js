import { createBrowserRouter, RouterProvider } from "react-router-dom";
import mainLoader from "./loaders/main";
import Main from "./Pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
