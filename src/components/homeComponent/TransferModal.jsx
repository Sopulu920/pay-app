import { getUserId, updateUser } from "../../redux/slice/LoginSlice";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { transfer, clearError } from "../../redux/slice/TransferSlice";

function TransferModal({ toggleTransferModal }) {
    const dispatch = useDispatch();
    const user = useSelector(getUserId);
    const [amount, setAmount] = useState("");
    const [receiverAccountNumber, setReceiverAccountNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { loading, error} = useSelector((state) => state.transfer);

    const handleTransfer = () => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
           setErrorMessage("Please enter a valid transfer amount.");
            return;
        }
        if (!receiverAccountNumber || isNaN(receiverAccountNumber)) {
            setErrorMessage("Enter Account number");
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

    // Clear error messages on input change
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setErrorMessage("");
        dispatch(clearError());
    };

     // backend error message 
    const getBackendErrorMessage = () => {
        if (!error) return null;
        if (typeof error === "string") return error;
        if (typeof error === "object" && error.message) return error.message;
        return "An error occurred during transfer.";
    };
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
                            onChange={handleInputChange(setReceiverAccountNumber)}
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
                                onChange={handleInputChange(setAmount)}
                            />
                        </div>
                    </div>
                    <br />
                    <button className="modal-btn" onClick={handleTransfer}>transfer</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {error && !errorMessage && <p className="error-message">{getBackendErrorMessage()}</p>}
                </div>
            </div>
        </>
    );
}

export default TransferModal;