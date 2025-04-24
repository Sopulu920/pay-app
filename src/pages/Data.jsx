import airtel from "../assets/images/airtel.jpg";
import mtn from "../assets/images/mtn.jpg";
import glo from "../assets/images/glo.jpg";
import mobile from "../assets/images/9mobile.jpg";
import LeftHand from "../components/LeftHand.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

function Data() {
  return (
    <>
      <div className="face">
        <LeftHand />
        <div className="body">
          <Link to="/airtimeData" className="p-3 m-3 fs-5 border rounded page">
            <h1><i className="fa-solid fa-arrow-left"></i> Data </h1>
          </Link>
          <div className="d-flex w-100 justify-content-around sim">
            <button className="w-25 border rounded d-flex justify-content-around">
              <img className="w-25 rounded rounded-circle" src={airtel} alt="" />
              <p className="fs-5">airtel</p>
            </button>
            <button className="w-25 border rounded d-flex justify-content-around">
              <img className="w-25 rounded rounded-circle" src={mtn} alt="" />
              <p className="fs-5">mtn</p>
            </button>
            <button className="w-25 border rounded d-flex justify-content-around">
              <img className="w-25 rounded rounded-circle" src={glo} alt="" />
              <p className="fs-5">glo</p>
            </button>
            <button className="w-25 border rounded d-flex justify-content-around">
              <img className="w-25 rounded rounded-circle" src={mobile} alt="" />
              <p className="fs-5">9mobile</p>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Data;