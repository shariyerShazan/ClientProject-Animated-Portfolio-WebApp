import MainLayout from "@/layouts/MainLayout"
import Error from "@/main/pages/Error/Error"
import Home from "@/main/pages/home/Home"
import { createBrowserRouter} from "react-router"
export const Router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element : <Home />
            }
        ]
    }
])