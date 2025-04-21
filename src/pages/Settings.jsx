import HeaderSettings from "../components/settingsComponent/HeaderSettings.jsx";
import BodySettings from "../components/settingsComponent/BodySettings.jsx";
import LeftHand from "../components/LeftHand.jsx";
import Footer from "../components/Footer.jsx";

function Settings() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <LeftHand />
        <div className="w-75 d-flex flex-column">
          <HeaderSettings />
          <BodySettings />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Settings;