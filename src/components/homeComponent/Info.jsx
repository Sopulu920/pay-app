import { Link } from "react-router-dom";

function Info(){
    return(
        <>
        <div className="info">
            <div className="balance">
              Balance
            </div>
            <Link to="/Receive" className="page info-button"> Income </Link>
            <Link to="/send" className="page info-button"> Expenses </Link>
        </div>
        </>
    );
}

export default Info;