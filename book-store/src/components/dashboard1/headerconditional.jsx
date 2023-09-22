import { useLocation } from "react-router-dom";
import Header from "../dashboard/header/header";

function Headerconditional(){
    const Location = useLocation();
    const excludepaths=['/','/SignUp','/dashboard']

    if(excludepaths.includes(Location.pathname)){
        return null
    }
    return(
             <Header/>
    )
}
export default Headerconditional