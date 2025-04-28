import LeftHand from "../components/LeftHand.jsx";
import HeaderHistory from "../components/historyComponent/HeaderHistory.jsx";
import { Link } from "react-router-dom";

function Receive() {
  return (
    <>
      <div className="face">
        <LeftHand />
        <div className="body">
          <HeaderHistory />
          <div className="notes">
            <Link to="/allTransaction" className="page">All Transactions</Link>
            <Link to="/receive" className="page note">Receive</Link>
            <Link to="/send" className="page">Send</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Receive;