import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) =>{
    return localStorage.getItem('token')? children : <Navigate to={'/YouTube-SPA/'}/>
}

export default PrivateRoute;