import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserId } from "../../redux/slice/LoginSlice";
import { fetchTransactions } from "../../redux/slice/transactionSlice";


function Table() {
    const user = useSelector(getUserId);    
    const dispatch = useDispatch();

    const transactionsState = useSelector((state) => state.transactions);
    const { loading, error, transactions } = transactionsState;
    console.log(transactionsState);
    const transaction = transactionsState.transactions.data;
    console.log(transaction)

    useEffect(() => {
        if (user && user._id) {
            dispatch(fetchTransactions(user._id));
        }
        
    }, [dispatch, user]);

    return (
        <>
            <div className="table-container">
                <div className="recent">
                    <h5>recent transaction</h5>
                    <Link className="recent-view">view all <i className="fa-solid fa-greater-than"></i> </Link>
                </div>
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th>date</th>
                            <th>description</th>
                            <th>status</th>
                            <th>amount</th>
                        </tr>
                    </thead>
                </table>
                <div className="tbody-container">
                    <table className="table">
                        <tbody className="tbody">
                            
                            {transaction.map((data, index) => (
                                <tr className="table-body" key={index}>
                                    <td>{data.date ? new Date(data.date).toLocaleDateString() : "N/A"}</td>
                                    <td>{data.transactionType || "N/A"}</td>
                                    <td>{(data.status || data.statues) ? "successful" : "failed"}</td>
                                    <td><i className="fa-solid fa-naira-sign"></i>{data.amount || 0}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
}

export default Table;
