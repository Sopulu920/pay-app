import { useSelector } from "react-redux";
import { getUserId } from "../../redux/slice/LoginSlice";

function Info() {
    const user = useSelector(getUserId);

    const transactionsState = useSelector((state) => state.transactions);
    const { loading, error, transactions } = transactionsState;
    const transaction = transactionsState.transactions.data || [];

    const totalIncome = transaction.reduce((sum, data) => {
        return data.transactionType === "credit" ? sum + data.amount : sum;
    }, 0);

    const totalExpenses = transaction.reduce((sum, data) => {
        return data.transactionType === "debit" ? sum + data.amount : sum;
    }, 0);

    return (
        <>
            <div className="info">
                <div className="balance">
                    <i className="fa-solid fa-wallet"></i>
                    <div>
                        <p className="info-text">Wallet Balance</p>
                        <div className="info-amount">
                            <i className="fa-solid fa-naira-sign"></i>
                            <span>{user?.accountBalance}</span>
                        </div>
                    </div>
                </div>
                <div className="income-expense">
                    <i className="income fa-solid fa-history"></i>
                    <div className="info-amount">
                        <p className="info-text2"> income </p>
                        <i className="fa-solid fa-naira-sign"></i>
                        <span>{totalIncome}</span>
                    </div>
                </div>
                <div className="income-expense">
                    <i className="expense fa-solid fa-history"></i>
                    <div className="info-amount">
                        <p className="info-text2"> spent </p>
                        <i className="fa-solid fa-naira-sign"></i>
                        <span>{totalExpenses}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;