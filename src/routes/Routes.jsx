import { createBrowserRouter } from "react-router-dom";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import Main from "../main/Main";
let routes=createBrowserRouter([
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/",
        element:<Login></Login>
    }, {
        path:"/home ",
        element:<Main></Main>
    }
])
export default routes