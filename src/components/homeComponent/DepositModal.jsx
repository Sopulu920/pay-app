import { useSelector, useDispatch } from "react-redux";
import { deposit } from "../../redux/slice/DepositSlice";
import { useState } from "react";
import { getUserId, updateUser } from "../../redux/slice/LoginSlice";

function DepositModal({ toggleDepositModal }) {

    const [amount, setAmount] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(getUserId);
    
    const handleDeposit = () => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            setErrorMessage("Please enter a valid deposit amount.");
            return;
        }

        dispatch(deposit({ userId: user._id, amount: Number(amount) })).then((action) => {
            console.log("Deposit action payload:", action.payload);
            if (action.type === "user/deposit/fulfilled") {
                dispatch(updateUser(action.payload));
                toggleDepositModal();
            }
        });
    };

    // Clear error messages on input change
    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setErrorMessage("");
    };


    return (
        <>
            <div className="modal-bg" onClick={toggleDepositModal}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="close-btn">
                        <button onClick={toggleDepositModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="modal-content">
                        <h1>deposit</h1>
                        <p>Account Number: {user?.accountNumber}</p>
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
                    <button className="modal-btn" onClick={handleDeposit}>deposit</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </>
    );
}

export default DepositModal;
