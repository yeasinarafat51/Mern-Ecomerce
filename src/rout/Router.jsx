// import { createBrowserRouter } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Meals from "../Pages/Meals";
import Allmeals from "../Pages/Allmeals";
import Cart from "../Pages/Cart";

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
            {
                path:'/cart',
                element:<Cart/>
            },
        ]
    }
])
export default router;