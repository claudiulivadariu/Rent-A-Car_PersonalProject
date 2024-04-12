import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cars } from "./pages/Cars";
import App from "./pages/root/App";

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
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};
export default Root;
