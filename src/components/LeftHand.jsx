import { Link } from "react-router-dom";

function LeftHand() {
    return (
        <div className="left">
            <div className="pay">
                <i class="fa-solid fa-building-columns"></i>
                <span>pay</span>
            </div>
            <Link className={`page icon ${location.pathname === "/dashboard" ? "active" : ""}`} to="/dashboard" ><i className="fa-solid fa-home"></i> home</Link> <br />
            <Link className="page icon" to="/history"><i className="fa-solid fa-history"></i> history</Link>  <br />
            <Link className="page icon" to="/transfer"><i className="fa-solid fa-right-left"></i> transfer</Link> <br />
            <Link className="page icon" to="/airtimeData"><i className="fa-solid fa-mobile"></i> mobile</Link> <br />
            <Link className="page icon" to="/settings"><i className="fa-solid fa-gear"></i> settings</Link> <br />
        </div>
    );
}

export default LeftHand;