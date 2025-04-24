import { Link } from "react-router-dom";

function TransferTable() {
    return (
        <>
         <div className="transfer">
            <Link className="page bottom">
            <i className="fa-solid fa-plus"></i>
            <p>withdrawal</p>
            </Link>
            <Link className="page bottom">
            <i className="fa-solid fa-right-left"></i>
            <p>Transfer</p>
            </Link>   
         </div>
        </>
    );
}

export default TransferTable;