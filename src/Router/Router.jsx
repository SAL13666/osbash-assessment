import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Quiz from "../Pages/Quiz/Quiz";
import Scores from "../Pages/Scores/Scores";
function Router() {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<App/>,
            children: [
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path: "/Quiz",
                    element:<Quiz/>
                },
                {
                    path: "/Scores",
                    element:<Scores/>
                },
            ]
        },
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default Router;