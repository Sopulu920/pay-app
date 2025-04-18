import HeaderSettings from "../components/settingsComponent/HeaderSettings.jsx";
import BodySettings from "../components/settingsComponent/BodySettings.jsx";
import Footer from "../components/Footer.jsx";

function Settings() {
  return (
    <>
      <div className="w-75 d-flex flex-column">
        <HeaderSettings />
        <BodySettings />
        <Footer />
      </div>
    </>
  );
}

export default Settings;