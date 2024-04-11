import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FirstPage } from "./pages/first-page";
import App from "./pages/root/App";

const Root = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "first-page",
                    element: <FirstPage />,
                    // loader: teamLoader,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};
export default Root;