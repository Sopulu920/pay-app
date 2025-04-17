import RightHand from "./components/RightHand.jsx";
import LeftHand from "./components/LeftHand.jsx";

function App() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <LeftHand />
        <RightHand />
      </div>
    </>

  );
}

export default App;