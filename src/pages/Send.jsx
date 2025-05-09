import LeftHand from "../components/LeftHand.jsx";
import HeaderHistory from "../components/historyComponent/HeaderHistory.jsx";
import TransferType from "../components/historyComponent/TransferTypes.jsx";
import { useSelector } from "react-redux";

function Send() {

  const transactionsState = useSelector((state) => state.transactions);
  const { loading, error, transactions } = transactionsState;
  console.log(transactionsState);
  const transaction = transactionsState.transactions.data;
  console.log(transaction)

  return (
    <>
      <div className="face">
        <LeftHand />
        <div className="body">
          <HeaderHistory />
          <TransferType />

          <div className="history-table-container">
            <div className="transaction">
              <h5>send</h5>
            </div>

            <table className="history-table">
              <thead>
                <tr className="history-table-head">
                  <th>date</th>
                  <th>description</th>
                  <th>type</th>
                  <th>amount</th>
                </tr>
              </thead>
            </table>

            <div className="history-tbody-container">
              <table className="history-table">
                <tbody className="history-tbody">

                  {transaction && transaction.filter(transaction => transaction.transactionType === "debit").map((data, index) => (
                    <tr className="history-table-body" key={index}>
                      <td>{new Date(data.updatedAt).toDateString() || "N/A"}</td>
                      <td>{data.transactionType || "N/A"}</td>
                      <td>{data.modeOfTransaction || "N/A"}</td>
                      <td><i className="fa-solid fa-naira-sign"></i>{data.amount || "N/A"}</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div >

        </div>
      </div>
    </>
  );
}

export default Send;