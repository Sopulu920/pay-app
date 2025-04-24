import placeholder from "../assets/images/placeholder.jpg";
import {Link} from "react-router-dom"

function LeftHand() {
    return (
        <div className="left">
            <img className="" src={placeholder} alt="" />           
            <Link className="page icon" to="/dashboard"><i className="fa-solid fa-home"></i></Link>
            <Link className="page icon" to="/notification"><i className="fa-solid fa-bell"></i></Link>
            <Link className="page icon" to="/transfer"><i className="fa-solid fa-right-left"></i></Link>
            <Link className="page icon" to="/airtimeData"><i className="fa-solid fa-mobile"></i></Link>
            <Link className="page icon" to="/settings"><i className="fa-solid fa-gear"></i></Link>            
        </div>
    );
}

export default LeftHand;