import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import './signin.css'
import bookstoreImage from '../../../components/images/bookStore.jpg'
import { Button } from "@mui/material";

class SignIn extends Component {
    render() {
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
                                <div > <a href="/SignIn" className="signin" id="signin" > LOGIN</a></div>
                                <div > <a href="/SignUp" className="signin" id="signin"> SIGNUP</a></div>
                            </div>
                            <div className="Detail">
                               <div className="detail"> <label className="em" >Email</label></div>
                                <div><TextField className="Box" /></div>

                            </div>
                            <div className="Detail">
                                <div className="detail"><label className="ps" >Password</label></div>
                                <div><TextField className="Box" /></div>
                                <label className="fp">ForgetPassword?</label>

                            </div>
                           
                           
                            <div className="signup">
                                <Button id="signup" Variant="contained">Login</Button>
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
}
export default SignIn