import React, { useState } from "react";
import './customerDetails.css'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";


function CustomerDetails({name}) {
    const[orderclose,setorderclose] = useState(false)

    const openorder =()=>{
        setorderclose(true)
        console.log(orderclose)
       name(orderclose)
    }

    return (
        <div className="CDContainer">
            <div className="CDContainer1">
                <div className="CDContainer2">
                    <div className="CDText">
                        Customer Details
                    </div>
                    <div className="CDText1">
                        Add New Address
                    </div>
                </div>
                <div className="CDContainer3">
                    <div className="CDContainer4">
                        <div className="CDData">
                            <div className="CDAddress">
                                <div className="CDAddress1"><label >FullName</label></div>
                                <div className="CDBox1"><TextField className="CDBox" /></div>

                            </div>
                            <div className="CDAddress">
                                <div className="CDAddress1"><label >Mobile Number</label></div>
                                <div className="CDBox1"><TextField className="CDBox" /></div>

                            </div>
                        </div>
                        <div className="AddressCD">
                           
                                <div className="CDAddress1"><label >Address</label></div>
                                <div><TextField className="CDBox" /></div>

                            
                        </div>
                        <div className="CDData">
                            <div className="CDAddress">
                                <div className="CDAddress1"><label >City/Town</label></div>
                                <div><TextField className="CDBox" /></div>

                            </div>
                            <div className="CDAddress">
                                <div className="CDAddress1"><label >State</label></div>
                                <div><TextField className="CDBox" /></div>

                            </div>
                        </div>
                        <div className="radio ">
                            
                                <div className="CDLabel"><label >Type</label></div>
                                <div className="radio1">
                                    <div><FormControlLabel control={<Radio />} label="Home" /></div>
                                    <div> <FormControlLabel control={<Radio />} label="Work" /></div>
                                    <div> <FormControlLabel control={<Radio />} label="Other" /></div>
                                </div>
                            

                        </div>

                    </div>
                    <div className='CDContinue' >
                        <Button id="CDContinue" Variant="contained" onClick={openorder}>continue</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CustomerDetails