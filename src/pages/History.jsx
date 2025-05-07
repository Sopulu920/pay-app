import LeftHand from "../components/LeftHand.jsx";
import HeaderHistory from "../components/historyComponent/HeaderHistory.jsx";
import TransferType from "../components/historyComponent/TransferTypes.jsx";
import Footer from "../components/Footer.jsx";

function History() {
  return (
    <>
      <div className="face">
        <LeftHand />
        <div className="body">
          <HeaderHistory />
          <TransferType />
        </div>
      </div>
    </>
  );
}

export default History;