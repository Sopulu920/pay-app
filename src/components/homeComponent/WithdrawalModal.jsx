import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/slice/DataSlice";
import { useEffect, useState } from "react";

function WithdrawalModal({ toggleWithdrawalModal }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);

    useEffect(() => {
        if (user && user.data && user.data._id) {
            dispatch(fetchUserData(user.data._id));
        }
    }, [dispatch, user]);

    return (
        <>
            <div className="modal-bg" onClick={toggleWithdrawalModal}>
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <div className="close-btn">
                        <button onClick={toggleWithdrawalModal}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="modal-content">
                        <h1>withdrawal</h1>
                        <p>Account Number: {user.data.accountNumber}</p>
                        <div>
                            <i className="fa fa-naira-sign"></i>
                            <input
                                type="number"
                                placeholder="amount"
                                min="0"
                                step="0.01"
                            />
                        </div>
                    </div>
                    <br />
                    <button className="modal-btn">withdrawal</button>
                </div>
            </div>
        </>
    );
}

export default WithdrawalModal;