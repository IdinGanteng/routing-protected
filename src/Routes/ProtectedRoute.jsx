import React from "react";
import { Navigate, Outlet } from "react-router";

const isUserLogin = () => {
    const user = localStorage.getItem('username')
    if (!user){
        return false;
    } else {
        return true;
    }
}

export const ProtectedRoute = () => {
    const getIn = isUserLogin()
    return(
        getIn ? <Outlet /> : <Navigate to={"/login"} replace />
    )
}