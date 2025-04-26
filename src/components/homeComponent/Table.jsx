// months of the year
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//data fro chart
const chartData = [
    {
        date: `${(new Date().getDate())}  ${monthNames[new Date().getMonth()]}`,
        description: "food",
        statues: true,
        amount: 2000,
    },
    {
        date: `${(new Date().getDate())}  ${monthNames[new Date().getMonth()]}`,
        description: "food",
        statues: true,
        amount: 2000,
    },
    {
        date: `${(new Date().getDate())}  ${monthNames[new Date().getMonth()]}`,
        description: "food",
        statues: true,
        amount: 2000,
    },
    {
        date: `${(new Date().getDate())}  ${monthNames[new Date().getMonth()]}`,
        description: "food",
        statues: true,
        amount: 2000,
    },
    {
        date: `${(new Date().getDate())}  ${monthNames[new Date().getMonth()]}`,
        description: "food",
        statues: true,
        amount: 2000,
    },
    {
        date: `${(new Date().getDate())}  ${monthNames[new Date().getMonth()]}`,
        description: "food",
        statues: true,
        amount: 2000,
    },
];


const reversedChartData = [...chartData].reverse();

function Table() {
    return (
        <>
            <div className="table-container">
                <h4 className="recent">recent transaction</h4>
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th>date</th>
                            <th>description</th>
                            <th>statues</th>
                            <th>amount(naira)</th>
                        </tr>
                    </thead>
                </table>
                <div className="tbody-container">
                    <table className="table">
                        <tbody className="tbody">
                            {reversedChartData.map((data, index) => (
                                <tr className="table-body" key={index}>
                                    <td>{data.date}</td>
                                    <td>{data.description}</td>
                                    <td>{data.statues ? "successful" : "failed"}</td>
                                    <td>{data.amount}</td>
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