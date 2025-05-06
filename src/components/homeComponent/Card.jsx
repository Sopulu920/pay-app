import Mastercard from "../../assets/images/mastercard.jpg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUserId } from "../../redux/slice/LoginSlice";
import WithdrawalModal from "./WithdrawalModal";
import TransferModal from "./TransferModal";
import DepositModal from "./DepositModal";

function cardNumber() {
    return Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join(""); //generate random numbers for card number
}
const number = cardNumber(); //to call random number for card

function Card() {
    

    const [withdrawalModal, setWithdrawalModal] = useState(false); //to track state
    const [transferModal, setTransferModal] = useState(false); //to track state
    const [depositModal, setDepositModal] = useState(false); //to track state

    const toggleWithdrawalModal = () => {
        setWithdrawalModal(!withdrawalModal)
    }
    const toggleTransferModal = () => {
        setTransferModal(!transferModal)
    }
    const toggleDepositModal = () => {
        setDepositModal(!depositModal)
    }

    const user = useSelector(getUserId);
    return (
        <>
            <div className="card-container">
                <h4>virtual card</h4>
                <div className="card">
                    <div className="card-top">
                        <div className="total">
                            <div className="total-balance">
                                total balance
                            </div>
                            <div>
                                <i className="fa-solid fa-naira-sign"></i>
                                <span>{user?.accountBalance}</span>
                            </div>
                        </div>
                        <div className="master-card">
                            <img src={Mastercard} alt="" />
                        </div>
                    </div>
                    <p className="card-date">09/25</p>
                    <p className="card-number">{number}</p>
                </div>
                <div className="card-button">
                    <div className="btn-container">
                        <button onClick={toggleWithdrawalModal} className="bottom">
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <p>withdrawal</p>
                    </div>
                    <div className="btn-container">
                        <button onClick={toggleTransferModal} className="bottom">
                            <i className="fa-solid fa-right-left"></i>
                        </button>
                        <p>transfer</p>
                    </div>
                    <div className="btn-container">
                        <button onClick={toggleDepositModal} className="bottom">
                            <i className="fa-solid fa-sack-dollar"></i>
                        </button>
                        <p>deposit</p>
                    </div>

                </div>
                <div className="view-button">
                    <button>view card history</button>
                </div>
            </div>
            {withdrawalModal && <WithdrawalModal toggleWithdrawalModal={toggleWithdrawalModal} />}
            {depositModal && <DepositModal toggleDepositModal={toggleDepositModal} />}
            {transferModal && <TransferModal toggleTransferModal={toggleTransferModal} />}
        </>
    );
}

export default Card;