import LeftHand from "../components/LeftHand.jsx";
import HeaderNotification from "../components/notificationComponent/HeaderNotification.jsx";
import { Link } from "react-router-dom";

function Send() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <LeftHand />
        <div className="w-75 d-flex flex-column">
          <HeaderNotification />
          <div className="d-flex justify-content-around">
            <Link to="/allTransaction" className="page fs-4">All Transactions</Link>
            <Link to="/receive" className="page fs-4">Receive</Link>
            <Link to="/send" className="page note fs-4">Send</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Send;