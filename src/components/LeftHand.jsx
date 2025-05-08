import { Link } from "react-router-dom";

function LeftHand() {

    return (
        <div className="left">
            <div className="pay">
                <i className="fa-solid fa-building-columns"></i>
                <span>pay</span>
            </div>
            <Link className={`page icon ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard" ><i className="fa-solid fa-home"></i> home</Link> <br />
            <Link className={`page icon ${location.pathname === "/history" || location.pathname === "/allTransaction" || location.pathname === "/receive" || location.pathname === "/send" ? "active" : ""}`} to="/allTransaction"><i className="fa-solid fa-history"></i> history</Link>  <br />
            <Link className={`page icon ${location.pathname === "/airtimeData" ? "active" : ""}`} to="/airtimeData"><i className="fa-solid fa-mobile"></i> mobile</Link> <br />
            <Link className={`page icon ${location.pathname === "/settings" ? "active" : ""}`} to="/settings"><i className="fa-solid fa-gear"></i> settings</Link> <br />
        </div>
    );
}

export default LeftHand;