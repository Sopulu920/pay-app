import LeftHand from "./components/LeftHand.jsx";
import Home from "./pages/Home";
import Notification from "./pages/Notification";
import Transfer from "./pages/Transfer";
import Airtime from "./pages/Airtime";
import Settings from "./pages/Settings";
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
            <Route path="/airtime" element={<Airtime />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;