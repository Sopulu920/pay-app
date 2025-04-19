import LeftHand from "./components/LeftHand.jsx";
import Home from "./pages/Home";
import Notification from "./pages/Notification";
import Transfer from "./pages/Transfer";
import AirtimeData from "./pages/AirtimeData.jsx";
import Settings from "./pages/Settings";
import Airtime from "./pages/Airtime.jsx";
import Data from "./pages/Data.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex justify-content-between">
          <LeftHand />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/airtimeData" element={<AirtimeData />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/airtime" element={<Airtime />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;