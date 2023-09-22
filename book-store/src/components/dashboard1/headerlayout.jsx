import React from "react";
import Headerconditional from "./headerconditional";

function Headerlayout({children}){
    return(
        <div>
            <Headerconditional/>
            {children}
        </div>
    )
}
export default Headerlayout