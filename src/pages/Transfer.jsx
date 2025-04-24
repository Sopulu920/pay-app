import LeftHand from "../components/LeftHand.jsx";
import HeaderTransfer from "../components/transferComponent/HeaderTransfer.jsx";
import Footer from "../components/Footer.jsx";

function Transfer() {
  return (
    <>
      <div className="face">
        <LeftHand />
        <div className="body">
          <HeaderTransfer />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Transfer;