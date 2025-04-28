import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import Transfer from "./pages/Transfer";
import AirtimeData from "./pages/AirtimeData.jsx";
import Settings from "./pages/Settings.jsx";
import Airtime from "./pages/Airtime.jsx";
import Data from "./pages/Data.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AllTransaction from "./pages/AllTransactions.jsx";
import Receive from "./pages/Receive.jsx";
import Send from "./pages/Send.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<History />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/airtimeData" element={<AirtimeData />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/airtime" element={<Airtime />} />
          <Route path="/data" element={<Data />} />
          <Route path="/allTransaction" element={<AllTransaction />} />
          <Route path="/send" element={<Send />} />
          <Route path="/receive" element={<Receive />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;