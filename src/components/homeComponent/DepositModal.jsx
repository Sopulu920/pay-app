import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/slice/DataSlice";
import { deposit } from "../../redux/slice/DepositSlice";
import { useEffect, useState } from "react";

function DepositModal({ toggleDepositModal }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);
    const [amount, setAmount] = useState("");

    useEffect(() => {
        if (user && user.data && user.data._id) {
            dispatch(fetchUserData(user.data._id));
        }
    }, [dispatch, user]);

    const handleDeposit = () => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            alert("Please enter a valid deposit amount.");
            return;
        }
        dispatch(deposit({ userId: user.data._id, amount: Number(amount) }));
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
                        <p>Account Number: {user.data.accountNumber}</p>
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
                        <div>
                            
                        </div>
                        {deposit.loading && <p>Processing deposit...</p>}
                        {deposit.error && <p style={{ color: "red" }}>Error: {depositState.error}</p>}
                        {deposit.user && <p style={{ color: "green" }}>Deposit successful!</p>}
                    </div>
                    <br />
                    <button className="modal-btn" onClick={handleDeposit}>deposit</button>
                </div>
            </div>
        </>
    );
}

export default DepositModal;
