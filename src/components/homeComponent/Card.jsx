import { Link } from "react-router-dom";
import Mastercard from "../../assets/images/mastercard.jpg";

const totalBalance = Math.floor(Math.random() * 1000);
function cardNumber() {
    return Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join(" ");
}
const number = cardNumber();

function Card() {
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
                                <span>{totalBalance}</span>
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
                        <Link className="bottom">
                            <i className="fa-solid fa-plus"></i>
                        </Link>
                        <p>withdrawal</p>
                    </div>
                    <div className="btn-container">
                        <Link className="bottom">
                            <i className="fa-solid fa-right-left"></i>
                        </Link>
                        <p>transfer</p>
                    </div>
                    <div className="btn-container">
                        <Link className="bottom">
                            <i className="fa-solid fa-sack-dollar"></i>
                        </Link>
                        <p>deposit</p>
                    </div>

                </div>
                <div className="view-button">
                    <button>view card history</button>
                </div>
            </div>
        </>
    );
}

export default Card;