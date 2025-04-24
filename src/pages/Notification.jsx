import LeftHand from "../components/LeftHand.jsx";
import HeaderNotification from "../components/notificationComponent/HeaderNotification.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

function Notification() {
  return (
    <>
      <div className="face">
        <LeftHand />
        <div className="body">
          <HeaderNotification />
          <div className="notes">
            <Link to="/allTransaction" className="page">All Transactions</Link>
            <Link to="/receive" className="page">Receive</Link>
            <Link to="/send" className="page">Send</Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Notification;