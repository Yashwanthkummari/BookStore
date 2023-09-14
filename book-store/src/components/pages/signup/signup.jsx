import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import './signup.css'
import bookstoreImage from '../../../components/images/bookStore.jpg'
import { Button } from "@mui/material";

class SignUp extends Component {
    render() {
        return (
            <div className="Container">
                <div className="Container1">
                    <div className="Container2">
                        <div className="image">
                            <img id="Image" src={bookstoreImage} alt="BookStorelogo"></img>
                        </div>
                        <div className="Text">
                            <p>ONLINE BOOK SHOPPING</p>
                        </div>
                    </div>
                    <div className="Container3">
                        <div className="Container4">
                            <div className="Sign">
                                <div > <a href="/signup" className="Signin" id="Signin" > LOGIN</a></div>
                                <div > <a href="/signin" className="Signin" id="Signin"> SIGNUP</a></div>
                            </div>

                            <div className="Details">
                                <div className="details"><label >FullName</label></div>
                                <div><TextField className="Box" /></div>

                            </div>
                            <div className="Details">
                               <div className="details"> <label >Email</label></div>
                                <div><TextField className="Box" /></div>

                            </div>
                            <div className="Details">
                                <div className="details"><label >Password</label></div>
                                <div><TextField className="Box" /></div>

                            </div>
                            
                            <div className="Details">
                                <div className="details"><label>Mobilenumber</label></div>
                                <div><TextField className="Box" /></div>

                            </div>

            
                            <div className="Signup">
                                <Button id="Signup" Variant="contained">Signup</Button>
                            </div>
                            

                        </div>
                    </div>
                </div>



            </div>
        )
    }
}
export default SignUp