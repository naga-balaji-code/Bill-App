import { createBrowserRouter } from "react-router-dom";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import Main from "../main/Main";
import About from "../main/about/About";
import AddBills from "../main/addBills/AddBills";
import FilterBills from "../main/filterBills/FilterBills";
import Home from "../main/home/Home";
let routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/",
        element:<Login></Login>
    }, {
        path:"/home",
        element:<Main></Main>,
         children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:"about",
                element:<About></About>
            },{
                path:"addBills",
                element:<AddBills></AddBills>
            },{
                path:"filter",
                element:<FilterBills></FilterBills>
            }
        ]
    }
])
export default routes