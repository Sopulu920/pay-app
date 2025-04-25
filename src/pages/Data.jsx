import airtel from "../assets/images/airtel.jpg";
import mtn from "../assets/images/mtn.jpg";
import glo from "../assets/images/glo.jpg";
import mobile from "../assets/images/9mobile.jpg";
import Footer from "../components/Footer.jsx";
import LeftHand from "../components/LeftHand.jsx";
import { Link } from "react-router-dom";

function Data() {
  return (
    <>
      <div className="face">
        <LeftHand />
        <div className="body">
          <Link to="/airtimeData" className="page title">
            <h1><i className="fa-solid fa-arrow-left"></i> Data</h1>
          </Link>
          <br />
          <div className="sim">
            <button className="sim-button">
              <img className="" src={airtel} alt="" />
              <p className="">airtel</p>
            </button>
            <button className="sim-button">
              <img className="" src={mtn} alt="" />
              <p className="">mtn</p>
            </button>
            <button className="sim-button">
              <img className="" src={glo} alt="" />
              <p className="">glo</p>
            </button>
            <button className="sim-button">
              <img className="" src={mobile} alt="" />
              <p className="">9mobile</p>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Data;