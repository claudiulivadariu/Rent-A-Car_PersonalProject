import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
                    path: "cars",
                    element: <Cars />,
                    // loader: teamLoader,
                },
                {
                    path: "home",
                    element: <HomePage />,
                    // loader: teamLoader,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};
export default Root;
