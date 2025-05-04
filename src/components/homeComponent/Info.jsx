import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "../../redux/slice/DataSlice";
import { useEffect } from "react";

function Info() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchUserData(user.data._id));
    }, [dispatch]);

    const amount2 = Math.floor(Math.random() * 10000);
    const amount3 = Math.floor(Math.random() * 10000);

    return (
        <>
            <div className="info">
                <div className="balance">
                    <i className="fa-solid fa-wallet"></i>
                    <div>
                        <p className="info-text">Wallet Balance</p>
                        <div className="info-amount">
                            <i className="fa-solid fa-naira-sign"></i>
                            <span>{user.data.accountBalance}</span>
                        </div>
                    </div>
                </div>
                <div className="income-expense">
                    <i className="income fa-solid fa-history"></i>
                    <div className="info-amount">
                        <p className="info-text2"> income </p>
                        <i className="fa-solid fa-naira-sign"></i>
                        <span>{amount2}</span>
                    </div>
                </div>
                <div className="income-expense">
                    <i className="expense fa-solid fa-history"></i>
                    <div className="info-amount">
                        <p className="info-text2"> spent </p>
                        <i className="fa-solid fa-naira-sign"></i>
                        <span>{amount3}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;