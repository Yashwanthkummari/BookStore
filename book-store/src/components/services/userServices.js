import React from "react";
import axios from "axios";

export const signup = async (object) => {
    let response = await axios.post(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",
        object
    )
    return response
}

export const signin = async (object) => {
    let response = await axios.post(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/login",
        object

    );
    return response;
};
