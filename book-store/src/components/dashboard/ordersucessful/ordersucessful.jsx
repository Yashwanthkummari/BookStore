import React from "react";
import './ordersucessfull.css'
import order from '../../images/Orderplaced.jpeg'
import { Button } from "@mui/material";

function OrderSucessful() {
    return (
        <div className="OSContainer">
            <div className="OSContainer1">
                <div className="orderpic">
                    <img id="orderimage" src={order} alt="Orderimage" />
                </div>
                <div className="OSText">
                    <div> hurray!!! your order is confirmed the order id is #123456 save the order id for further communication</div>
                </div>
                <div className="OSTable">
                    <div className="OStable1">
                        <div className="OSem">Emailus </div>
                        <div className="OScu" id='contus'>Contactus</div>
                        <div className="OScu">Address</div>
                    </div>
                    <div className="OStable2">
                        <div className="OSem1">yashwanth.k1119@gmail.com </div>
                        <div className="OScu1">986677665544</div>
                        <div className="OScu1">h.no:2-98,Madhuranagar colonyShamshabad,RangaReddy,Telangana</div>
                    </div>
                </div>
                <div className="conshop">
                <Button id="conshop" Variant="contained">Continue Shopping</Button>

                </div>
            </div>
        </div>
    )
}
export default OrderSucessful