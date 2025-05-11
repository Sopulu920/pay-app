import { useSelector } from "react-redux";
import { useState } from "react";
import { getUserId } from "../../redux/slice/LoginSlice";
import TransferModal from "./TransferModal";
import ReceiverModal from "./ReceiverModal";

function Welcome() {
    const user = useSelector(getUserId);

    const [receiverModal, setReceiverModal] = useState(false);
    const [transferModal, setTransferModal] = useState(false);

    const toggleTransferModal = () => {
        setTransferModal(!transferModal)
    }

    const toggleReceiverModal = () => {
        setReceiverModal(!receiverModal)
    }

    return (
        <>
            <div className="welcome">
                <div className="welcome-back">
                    welcome back, {user?.firstName}!
                </div>
                <div className="welcome-button">
                    <button onClick={toggleReceiverModal} className="welcome-receive">receive</button>
                    <button onClick={toggleTransferModal} className="welcome-send">send money</button>
                </div>
            </div>
            {transferModal && <TransferModal toggleTransferModal={toggleTransferModal} />}
            {receiverModal && <ReceiverModal toggleReceiverModal={toggleReceiverModal} />}
        </>
    );
}

export default Welcome;