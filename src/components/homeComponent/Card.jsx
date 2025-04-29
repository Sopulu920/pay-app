import { Link } from "react-router-dom";

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
                    <div className="total">
                        <div className="total-balance">
                            total balance
                        </div>
                        <div>
                            <i className="fa-solid fa-naira-sign"></i>
                            <span>{totalBalance}</span>
                        </div>
                    </div>
                    <p className="cvv">C V V</p>
                    <p className="card-number">{number}</p>
                </div>
                <div className="card-button">
                    <Link className="page bottom">
                        <i className="fa-solid fa-plus"></i>
                        <p>withdrawal</p>
                    </Link>
                    <Link className="page bottom">
                        <i className="fa-solid fa-right-left"></i>
                        <p>Transfer</p>
                    </Link>
                    <Link className="page bottom">
                        <i className="fa-solid fa-sack-dollar"></i>
                        <p>Deposit</p>
                    </Link>
                </div>
                <div className="view-button">
                    <button>view card history</button>
                </div>
            </div>
        </>
    );
}

export default Card;