import { Link } from "react-router-dom";

function Card() {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <p className="">Account Number</p>
                    <p className="cvv">C V V</p>
                    <p className="fullname">Full Name</p>
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
            </div>
        </>
    );
}

export default Card;