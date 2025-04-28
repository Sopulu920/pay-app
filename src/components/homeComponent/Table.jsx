import { Link } from "react-router-dom";

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
                <div className="recent">
                    <h5>recent transaction</h5>
                    <Link className="recent-view">view all <i className="fa-solid fa-greater-than"></i> </Link>
                </div>
                <table className="table">
                    <thead>
                        <tr className="table-head">
                            <th>date</th>
                            <th>description</th>
                            <th>statues</th>
                            <th>amount</th>
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
                                    <td><i className="fa-solid fa-naira-sign"></i>{data.amount}</td>
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