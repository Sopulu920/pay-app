import LeftHand from "../components/LeftHand.jsx";
import HeaderTransfer from "../components/transferComponent/HeaderTransfer.jsx";

function Transfer() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <LeftHand />
        <div className="w-75 d-flex flex-column">
          <HeaderTransfer />
        </div>
      </div>
    </>
  );
}

export default Transfer;