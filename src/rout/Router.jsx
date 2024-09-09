// import { createBrowserRouter } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Meals from "../Pages/Meals";
import Allmeals from "../Pages/Allmeals";

// const router = createBrowserRouternpm install react-router-dom
const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/product',
                element:<Allmeals/>
            },
            {
                path:'/product/:id',
                element:<Meals/>
            },
        ]
    }
])
export default router;