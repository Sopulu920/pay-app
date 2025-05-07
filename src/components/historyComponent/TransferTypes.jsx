import { Link } from "react-router-dom";

function TransferType() {

    return (
        <>
            <div className="notes">
                <Link to="/allTransaction" className={`history-page ${location.pathname === "/allTransaction" ? "active" : ""}`}>All Transactions</Link>
                <Link to="/receive" className={`history-page ${location.pathname === "/receive" ? "active" : ""}`}>Receive</Link>
                <Link to="/send" className={`history-page ${location.pathname === "/send" ? "active" : ""}`}>Send</Link>
            </div>
        </>
    );
}

export default TransferType;