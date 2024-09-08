// import { createBrowserRouter } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";

// const router = createBrowserRouternpm install react-router-dom
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
])
export default router;