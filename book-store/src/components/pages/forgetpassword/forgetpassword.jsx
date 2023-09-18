import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


import './forgetpassword.css';
function ForgetPassword() {
    return (
        <div className="Fbox">

            <h2 >Forget Your Password</h2>
            <div className="Fbox2">

                <div className="Fbox3">
                    <div className="Fbox4">
                    <div className="ftext1"><div className="ftext"> <label > Enter your email address and we'll send you a link to update your password</label></div></div>
                       <div className="fdetails1"> <div className="fDetails"><label >Email Id</label></div>
                        <TextField className="Box" />
                        </div>
                        <Button id="FSignup" Variant="contained">ResetPassword</Button>
                    </div>

                </div>
                <div className="Fdetails"><Button id="FCignup" Variant="contained">create account</Button></div>

            </div>
        </div>

    )
}
export default ForgetPassword