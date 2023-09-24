import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute =({ children}) => {

    if(localStorage.getItem('token') === undefined || localStorage.getItem("token") === null ){
        console.log("Y")
        return children
    }
    console.log("l")
    return <Navigate to = "/dashboard"/>
};
export default AuthRoute