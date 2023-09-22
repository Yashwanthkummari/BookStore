import React, { useState } from "react";
import './cart.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import rama from '../../images/Ram.jpeg'
import { Button } from "@mui/material";
import CustomerDetails from "../customerDetails/customerDetails";
import OrderSummery from "../ordersummery/ordersummery";


function Cart({ }) {
    const [close, setclose] = useState(false)

    const open = () => {
        setclose(true)
        console.log(close)
    }

     const[order,setcloseorder] = useState(false)

    const  orderoppenn = (orderdata)=>{
            setcloseorder(orderdata)
    }

    return (
        <div className="CConatiner" >
            <div className="Chome">
                Home/Book(01)
            </div>
            <div className="CartContainer1">
                <div className="CContainer2">
                    <div className="CContainer3">
                        <div className="mycartLoc">
                            <div className="mycart"> My cart(1)</div>
                            <div className="loc">
                                <LocationOnIcon />  BrideLabz Solutions </div>
                        </div>
                        <div className="bokdatpla">
                            <div className="bookdata">
                                <div className="Cpict">
                                    <div><img id='CDetailsImage' src={rama} alt="lordram" /></div>

                                </div>
                                <div className="CBookData">
                                    <div className="CBookData1">
                                        <div id='Ctitle'>Ramayanam</div>
                                        <div id='Cauthor'> by Valmiki</div>
                                    </div>
                                    <div className='Cdetails'>
                                        <div className='Cprice'>
                                            <div className="Cprice1">
                                                <div className='Cdiscountprice' >Rs1500</div>
                                                <div className='CMRP' >Rs3000</div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <Button  id="Sig1nup" Variant="contained" onClick={open}>PlaceOrder</Button>

                        </div>
                    </div>
                </div>
                {close ? (<CustomerDetails name={orderoppenn} />) : (<div className="CContainer4" >Address details</div>)}
                {order ? (<OrderSummery/>) : (<div className="CContainer5"> order Summery </div>)}

            </div>
        </div>

    )
}
export default Cart