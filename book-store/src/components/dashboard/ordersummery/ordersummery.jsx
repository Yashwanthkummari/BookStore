import React from "react";
import './ordersummery.css'
import { Button } from "@mui/material";
import ramaa from '../../images/Ram.jpeg'


function OrderSummery() {
    return (
        <div className="OSContainer">
            <div className="OContainer1">
                <div className="OScontainer2">
                    <div className="OText">
                    Order Summery
                    </div>

                    <div className="OSContainer3">
                        <div className="OSpict">
                            <div><img id='OSDetailsImage' src={ramaa} alt="lordram" /></div>

                        </div>
                        <div className="OSBookData">
                            <div className="OSBookData1">
                                <div id='OStitle'>Ramayanam</div>
                                <div id='OSauthor'> by Valmiki</div>
                            </div>
                            <div className='OSdetails'>
                                <div className='OSprice'>
                                    <div className="OSprice1">
                                        <div className='OSdiscountprice' >Rs1500</div>
                                        <div className='OSMRP' >Rs3000</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='OCheckout' >
                    <Button id="OCheckout" Variant="contained">Checkout</Button>
                </div>
            </div>
        </div>
    )
}
export default OrderSummery