import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";



function Chart() {

    const transactionsState = useSelector((state) => state.transactions);
    const { loading, error, transactions } = transactionsState;
    console.log(transactionsState);
    const transaction = transactionsState.transactions.data;
    console.log(transaction);


    const chartData = transaction && transaction.map((data) => ({
        time:  `${new Date(data.updatedAt).getDate()}/${new Date(data.updatedAt).getMonth()}/${new Date(data.updatedAt).getFullYear()}` || "",
        income: data.transactionType === "credit" ? data.amount : 0,
        expenses: data.transactionType === "debit" ? data.amount : 0,
    }));
    console.log(chartData);

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="" vertical={false} />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="income" stroke="green" fill="green" fillOpacity={0.2} />
                    <Area type="monotone" dataKey="expenses" stroke="red" fill="red" fillOpacity={0.2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;