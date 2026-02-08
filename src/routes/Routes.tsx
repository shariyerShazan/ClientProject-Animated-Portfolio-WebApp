import MainLayout from "@/layouts/MainLayout"
import About from "@/main/pages/about/About"
import Error from "@/main/pages/Error/Error"
import HomePageEmailUs from "@/main/pages/home/_components/HomePageEmailUs"
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
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact" ,
                element: <HomePageEmailUs />
            }
        ]
    }
])