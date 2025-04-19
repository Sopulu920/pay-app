import Footer from "../components/Footer.jsx";
import HeaderAirtimeData from "../components/airtimeComponent/HeaderAirtimeData.jsx";
import BodyAirtimeData from "../components/airtimeComponent/BodyAirtimeData.jsx";

function AirtimeData() {
  return (
    <>
      <div className="w-75 d-flex flex-column">
        <HeaderAirtimeData />
        <BodyAirtimeData />
        <Footer />
      </div>
    </>
  );
}

export default AirtimeData;