import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"

// months of the year
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//data fro chart
const chartData = [
    {
        month: monthNames[(new Date().getMonth() - 5 + 12) % 12],
        income: 2000,
        expenses: 50000,
        amt: 60000,
    },
    {
        month: monthNames[(new Date().getMonth() - 4 + 12) % 12],
        income: 3000,
        expenses: 50000,
        amt: 60000,
    },
    {
        month: monthNames[(new Date().getMonth() - 3 + 12) % 12],
        income: 5000,
        expenses: 70000,
        amt: 60000,
    },
    {
        month: monthNames[(new Date().getMonth() - 2 + 12) % 12],
        income: 20000,
        expenses: 40000,
        amt: 60000,
    },
    {
        month: monthNames[(new Date().getMonth() - 1 + 12) % 12],
        income: 60000,
        expenses: 50000,
        amt: 60000,
    },
    {
        month: monthNames[new Date().getMonth()],
        income: 80000,
        expenses: 60000,
        amt: 60000,
    },
];

function Chart() {
    return (
        <>
            <div className="chart-container">
                <div>
                    <AreaChart width={650} height={260} data={chartData}>
                        <Area dataKey="income" stroke="green" fill="green" fillOpacity={0.2} />
                        <Area dataKey="expenses" stroke="red"  fill="red" fillOpacity={0.2} />
                        <CartesianGrid strokeDasharray="5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </AreaChart>
                </div>
            </div>
        </>
    );
}

export default Chart;