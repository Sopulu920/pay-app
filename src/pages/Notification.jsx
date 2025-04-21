import LeftHand from "../components/LeftHand.jsx";

function Notification() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <LeftHand />
        <div>
          <h1>Notification Page</h1>
          <p>This is the notification page content.</p>
        </div>
      </div>
    </>
  );
}

export default Notification;