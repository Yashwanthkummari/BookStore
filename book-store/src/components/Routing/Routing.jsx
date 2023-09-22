import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/signin/signin";
import SignUp from "../pages/signup/signup";
import Dashboard1 from "../dashboard1/dashboard1";
import Cardd from "../dashboard/card/card";
import BookDetails from "../dashboard/bookDetails/bookDetails";
import Cart from "../dashboard/cart/cart";
import CustomerDetails from "../dashboard/customerDetails/customerDetails";
import OrderSucessful from "../dashboard/ordersucessful/ordersucessful";
import Headerlayout from "../dashboard1/headerlayout";


function Router() {
    return (
        <div>
            <BrowserRouter>
            <Headerlayout>
                <Routes>
                    
                    <Route exact path={"/"} element={<SignIn/>} />
                    <Route path={"/SignUp"} element={<SignUp />} />
                    <Route path={"/dashboard"} element={<Dashboard1/>}/>
                    <Route path={"/card"}element={<Cardd/>}/>
                    <Route path={"/bookdetails"} element={<BookDetails/>}/>
                    <Route path={"cart"} element={<Cart/>}/>
                    <Route path={"customerdetails"} element={<CustomerDetails/>}/>
                    <Route path={"/ordersucessful"} element={<OrderSucessful/>}/>
                </Routes>
                </Headerlayout>
            </BrowserRouter>
        </div>
    )
}

export default Router