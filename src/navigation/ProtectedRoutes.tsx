// import { Navigate, Outlet } from "react-router-dom"
// // import { useAuth } from "../context/AuthContext";


// export default function ProtectedRoute({ redirectTo = "/", children }) {
//     // console.log("Protected route mounted")
//     const { isAuthenticated } = useAuth();

//     // console.log(isAuthenticated)
//     if (!isAuthenticated) {
//         return <Navigate to={redirectTo} />
//     }
//     return children ? children : <Outlet />
// }