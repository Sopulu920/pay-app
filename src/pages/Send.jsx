import LeftHand from "../components/LeftHand.jsx";
import HeaderHistory from "../components/historyComponent/HeaderHistory.jsx";
import { Link } from "react-router-dom";

function Send() {
  return (
    <>
      <div className="face">
        <LeftHand />
        <div className="body">
          <HeaderHistory />
          <div className="notes">
            <Link to="/allTransaction" className="page">All Transactions</Link>
            <Link to="/receive" className="page">Receive</Link>
            <Link to="/send" className="page note">Send</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Send;