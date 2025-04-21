import LeftHand from "../components/LeftHand.jsx";
import Footer from "../components/Footer.jsx";
import HeaderAirtimeData from "../components/airtimeComponent/HeaderAirtimeData.jsx";
import BodyAirtimeData from "../components/airtimeComponent/BodyAirtimeData.jsx";

function AirtimeData() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <LeftHand />
        <div className="w-75 d-flex flex-column">
          <HeaderAirtimeData />
          <BodyAirtimeData />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default AirtimeData;