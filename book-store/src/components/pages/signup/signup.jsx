import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import './signup.css'
import bookstoreImage from '../../../components/images/bookStore.jpg'
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {

    const navigate = useNavigate()

    const [inputdata, setInputdata] = useState({
        fullName: "",
        email: "",
        password: "",
        mobileNumber: ""
    })
    const fullname = (fname) => {
        setInputdata({ ...inputdata, fullName: fname.target.value })
    }
    const emal = (em) => {
        setInputdata({ ...inputdata, email: em.target.value })
    }
    const pass = (pw) => {
        setInputdata({ ...inputdata, password: pw.target.value })
    }
    const mobnum =(mn) =>{
        setInputdata({...inputdata,mobileNumber:mn.target.value})
    }
    const [error,setError] = useState({
        fullNameerror:false,
        fullNamehelper:"",
        emailError:false,
        emailHelper:"",
        passWorderror:false,
        passWorderrorhelper:"",
        mobileNumbererror:false,
        mobileNumberhelper:""
    })
    const fullNameregex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
    const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
    const mobileNumberregex = /^[+91]{3}[0-9]{10}$/;

    const signup = async ()=>{
        let fullNamecheck = fullNameregex.test(inputdata.fullName)
        let emailCheck = emailRegex.test(inputdata.email)
        let passWordcheck= passwordRegex.test(inputdata.password)
        let mobileNumbercheck=mobileNumberregex.test(inputdata.mobileNumber)

        if ( fullNamecheck==false){
            setError((prevState) => ({
                ...prevState,
                fullNameerror:true,
                fullNamehelper:"enter correct email"
            }));
        }
        else{
            setError((prevState) => ({
                ...prevState,
                fullNameerror:false,
                fullNamehelper:""
            }));
        }
        if ( emailCheck== false) {
            setError((prevState) => ({
                ...prevState,
                emailError: true,
                emailHelper: "enter correct email"
            }));
        } else {
            setError((prevState) => ({
                ...prevState,
                emailError: false,
                emailHelper: ""
            }));
        }
        if (passWordcheck == false) {
            setError((prevState) => ({
                ...prevState,
                passwordError: true,
                passwordHelper: "enter correct password"

            }));
        } else {
            setError((prevState) => ({
                ...prevState,
                passwordError: false,
                passwordHelper: ""
            }));
        }
        if (mobileNumbercheck==false){
            setError((prevState)=>({
                ...prevState,
                mobileNumbererror:true,
                mobileNumberhelper:"enter correct number"
            }));
        }
        else{
            setError((prevState)=>({
                ...prevState,
                mobileNumbererror:false,
                mobileNumberhelper:""
            }))
        }
        console.log(inputdata)
        if (fullNamecheck === true && emailCheck === true && passWordcheck == true && mobileNumbercheck==true) {
        // navigate('/')
        let response = await signup(inputdata);
        console.log(response);
        localStorage.setItem("token", response.data.data.userId);
        }
    }
    
   

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
                            <div > <Link className="Signin" id="Signin" to='/'> LOGIN</Link></div>
                            <div > <Link className="Signin" id="Signin" to='SignUp'> SIGNUP</Link></div>
                        </div>

                        <div className="Details">
                            <div className="details"><label >FullName</label></div>
                            <div><TextField className="Box" onChange={fullname} error={error.fullNameerror} helperText={error.fullNamehelper} /></div>

                        </div>                                     
                        <div className="Details">
                            <div className="details"> <label >Email</label></div>
                            <div><TextField className="Box" onChange={emal} error={error.emailError} helperText={error.emailHelper} /></div>

                        </div>
                        <div className="Details">
                            <div className="details"><label >Password</label></div>
                            <div><TextField className="Box" onChange={pass} error={error.passWorderror} helperText={error.passWorderrorhelper}/></div>

                        </div>

                        <div className="Details">
                            <div className="details"><label>Mobilenumber</label></div>
                            <div><TextField className="Box" onChange={mobnum} error={error.mobileNumbererror} helperText={error.mobileNumberhelper}/></div>

                        </div>


                        <div className="Signup">
                            <Button id="Signup" Variant="contained" onClick={signup}>Signup</Button>
                        </div>


                    </div>
                </div>
            </div>



        </div>
    )

}
export default SignUp