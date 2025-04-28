import {Link} from "react-router-dom";

function LeftHand() {
    return (
        <div className="left"> 
        <div><img src="" alt="" /></div>        
            <Link className="page icon" to="/dashboard"><i className="fa-solid fa-home"></i> home</Link>
            <Link className="page icon" to="/history"><i className="fa-solid fa-history"></i> history</Link>
            <Link className="page icon" to="/transfer"><i className="fa-solid fa-right-left"></i> transfer</Link>
            <Link className="page icon" to="/airtimeData"><i className="fa-solid fa-mobile"></i> mobile</Link>
            <Link className="page icon" to="/settings"><i className="fa-solid fa-gear"></i> settings</Link>            
        </div>
    );
}

export default LeftHand;