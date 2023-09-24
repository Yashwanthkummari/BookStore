import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import './signin.css'
import bookstoreImage from '../../../components/images/bookStore.jpg'
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../services/userServices";



function SignIn() {

    const navigate = useNavigate()
    
    const forgetpass=()=>{
        navigate("/forgetpassword")
    }
    
    const [userdata, setUserdata] = useState({
        email: "",
        password: "",
    });
    let name, value;

    const handleInputdata = (y) => {
        name = y.target.name;
        value = y.target.value
        setUserdata({ ...userdata, [name]: value });

    }
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

    const [errorObj, setErrorObj] = useState({
        emailError: false,
        emailHelper: "",
        passwordError: false,
        passwordHelper: ""
    })
    const LoginClick = async () => {
        let emailTest = emailRegex.test(userdata.email);
        let passwordTest = passwordRegex.test(userdata.password);
        if (emailTest == false) {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: true,
                emailHelper: "enter correct email"
            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: false,
                emailHelper: ""
            }));
        }
        if (passwordTest == false) {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: true,
                passwordHelper: "enter correct password"

            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                passwordError: false,
                passwordHelper: ""
            }));
        }

        console.log(userdata);
        if (emailTest === true && passwordTest === true) {
            let response = await signin(userdata);
            console.log(response);
            localStorage.setItem("token", response.data.result.accessToken);
            navigate("/dashboard")
        }

    }


    return (
        <div className="container">
            <div className="container1">
                <div className="container2">
                    <div className="Image">
                        <img id="image" src={bookstoreImage} alt="BookStorelogo"></img>
                    </div>
                    <div className="text">
                        <p>ONLINE BOOK SHOPPING</p>
                    </div>
                </div>
                <div className="container3">
                    <div className="container4">
                        <div className="sign">
                            <div> <Link className="signin" id="signin" to='/'> LOGIN </Link></div>
                            <div><Link className="signin" id="signin" to='/SignUp'> SIGNUP</Link></div>

                        </div>
                        <div className="Detail">
                            <div className="detail"> <label className="em" >Email</label></div>
                            <div><TextField className="Box" name="email" value={userdata.email} onChange={handleInputdata} error={errorObj.emailError} helperText={errorObj.emailHelper} /></div>

                        </div>
                        <div className="Detail">
                            <div className="detail"><label className="ps" >Password</label></div>
                            <div><TextField className="Box" name="password" type="password" value={userdata.password} onChange={handleInputdata} error={errorObj.passwordError} helperText={errorObj.passwordHelper} /></div>
                            <label className="fp" onClick={forgetpass}>ForgetPassword?</label>

                        </div>


                        <div className="signup">
                            <Button id="signup" Variant="contained" onClick={LoginClick}>Login</Button>
                        </div>
                        <label className="or">-----------------OR---------------------</label>
                        <div className="google">
                            <div className="signuppp">
                                <Button id="facebook" Variant="contained">FaceBook</Button>
                            </div>
                            <div className="signu">
                                <Button id="google" Variant="contained">Google</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )

}
export default SignIn