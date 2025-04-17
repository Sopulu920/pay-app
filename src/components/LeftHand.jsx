import placeholder from "../assets/images/placeholder.jpg";
import {Link} from "react-router-dom"

function LeftHand() {
    return (
        <div className="left d-flex flex-column w-25 column-gap text-center rounded rounded-left py-5 fs-5">
            <div className="pb-5"><img className="w-25 rounded rounded-circle" src={placeholder} alt="" /></div>            
            <Link className="py-4 text-dark" to="/"><i className="fa-solid fa-home"></i></Link>
            <Link className="py-4 text-dark" to="/notification"><i className="fa-solid fa-bell"></i></Link>
            <Link className="py-4 text-dark" to="/transfer"><i className="fa-solid fa-right-left"></i></Link>
            <Link className="py-4 text-dark" to="/airtime"><i className="fa-solid fa-mobile"></i></Link>
            <Link className="py-4 text-dark" to="/settings"><i className="fa-solid fa-gear"></i></Link>
            
        </div>
    );
}

export default LeftHand;