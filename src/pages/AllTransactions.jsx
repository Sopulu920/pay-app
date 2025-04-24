import LeftHand from "../components/LeftHand.jsx";
import HeaderNotification from "../components/notificationComponent/HeaderNotification.jsx";
import { Link } from "react-router-dom";

function AllTransaction() {
  return (
    <>
      <div className="face">
        <LeftHand />
        <div className="body">
          <HeaderNotification />
          <div className="d-flex justify-content-around">
            <Link to="/allTransaction" className="page note fs-4">All Transactions</Link>
            <Link to="/receive" className="page fs-4">Receive</Link>
            <Link to="/send" className="page fs-4">Send</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllTransaction;