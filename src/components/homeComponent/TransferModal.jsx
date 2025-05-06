import { getUserId, updateUser } from "../../redux/slice/LoginSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transfer } from "../../redux/slice/TransferSlice";

function TransferModal({ toggleTransferModal }) {
    const dispatch = useDispatch();
    const user = useSelector(getUserId);
    const [amount, setAmount] = useState("");
    const [receiverAccountNumber, setReceiverAccountNumber] = useState("");

    const handleTransfer = () => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            alert("Please enter a valid transfer amount.");
            return;
        }
        if (!user || !user._id) {
            alert("User not found. Please log in.");
            return;
        }
        dispatch(transfer({ senderId: user._id, receiverAccountNumber, amount: Number(amount) })).then((action) => {
            console.log("Transfer action payload:", action.payload);
            if (action.type === "user/transfer/fulfilled") {
                dispatch(updateUser(action.payload));
                toggleTransferModal();
            }
        });
    }
    return (
        <>
            <div className="modal-bg" onClick={toggleTransferModal}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="transfer-close-btn">
                        <button onClick={toggleTransferModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="modal-content">
                        <h1>transfer</h1>
                        <input
                            type="number"
                            placeholder="account number"
                            min="0"
                            value={receiverAccountNumber}
                            onChange={(e) => setReceiverAccountNumber(e.target.value)}
                        />
                        <br />
                        <div>
                            <i className="fa fa-naira-sign"></i>
                            <input
                                type="number"
                                placeholder="amount"
                                min="0"
                                step="0.01"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                    </div>
                    <br />
                    <button className="modal-btn" onClick={handleTransfer}>transfer</button>
                </div>
            </div>
        </>
    );
}

export default TransferModal;