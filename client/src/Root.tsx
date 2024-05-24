import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Cars } from "./pages/Cars";
import App from "./pages/root/App";
import HomePage from "./pages/HomePage";

const Root = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "",
                    element: <Navigate to="home" replace />,
                },
                {
                    path: "home",
                    element: <HomePage />,
                    // loader: teamLoader,
                },
                {
                    path: "cars",
                    element: <Cars />,
                    // loader: teamLoader,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};
export default Root;
