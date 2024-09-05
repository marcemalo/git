import { useRoutes } from "react-router-dom"
import Home from "./Home"
import Auth from "./Auth"
import Login from "./Login"
import Profile from "./Profile"

const RouteController = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/auth",
        element: <Auth/>,
        children: [
            {
                path: "/auth/login",
                element: <Login/>
            }
            
        ]
    },
    {
        path: "/profile",
        element: <Profile/>
    }
  ])
}

export default RouteController