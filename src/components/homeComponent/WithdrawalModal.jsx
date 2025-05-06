import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getUserId, updateUser } from "../../redux/slice/LoginSlice";
import { withdraw } from "../../redux/slice/Withdrawal";

function WithdrawalModal({ toggleWithdrawalModal }) {

    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(getUserId);

    const handleWithdrawal = () => {
            if (!amount || isNaN(amount) || Number(amount) <= 0) {
                alert("Please enter a valid withdrawal amount.");
                return;
            }
    
            dispatch(withdraw({ userId: user._id, amount: Number(amount) })).then((action) => {
                console.log("Withdrawal action payload:", action.payload);
                if (action.type === "user/withdraw/fulfilled") {
                    dispatch(updateUser(action.payload));
                    toggleWithdrawalModal();
                }
            });
        };   


    return (
        <>
            <div className="modal-bg" onClick={toggleWithdrawalModal}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="close-btn">
                        <button onClick={toggleWithdrawalModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="modal-content">
                        <h1>withdrawal</h1>
                        <p>Account Number: {user?.accountNumber}</p>
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
                    <button className="modal-btn" onClick={handleWithdrawal}>withdrawal</button>
                </div>
            </div>
        </>
    );
}

export default WithdrawalModal;
