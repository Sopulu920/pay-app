import { useSelector } from "react-redux";
import { useState } from "react";
import { getUserId } from "../../redux/slice/LoginSlice";
import TransferModal from "./TransferModal";

function Welcome() {
    const user = useSelector(getUserId);

    const [transferModal, setTransferModal] = useState(false);
        const toggleTransferModal = () => {
            setTransferModal(!transferModal)
        }
   
    return (
        <>
            <div className="welcome">
                <div className="welcome-back">
                welcome back, {user?.firstName}!
                </div>
                <div className="welcome-button">
                    <button className="welcome-receive">receive</button>
                    <button onClick={toggleTransferModal} className="welcome-send">send money</button>
                </div>
            </div>
            {transferModal && <TransferModal toggleTransferModal={toggleTransferModal} />}
        </>
    );
}

export default Welcome;