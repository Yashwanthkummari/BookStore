import React from "react";
import { Navigate } from "react-router-dom";

const Protectedroute =({ children }) =>{
    
    if (localStorage.getItem("token")){
        return children
    }
    return <Navigate to ="/" />
}
export default Protectedroute