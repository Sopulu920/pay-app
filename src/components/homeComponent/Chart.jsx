import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

// months of the year
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// data for chart
const chartData = [
    {
        month: monthNames[(new Date().getMonth() - 5 + 12) % 12],
        income: 2400,
        expenses: 4000,
    },
    {
        month: monthNames[(new Date().getMonth() - 4 + 12) % 12],
        income: 1398,
        expenses: 3000,
    },
    {
        month: monthNames[(new Date().getMonth() - 3 + 12) % 12],
        income: 9800,
        expenses: 2000,
    },
    {
        month: monthNames[(new Date().getMonth() - 2 + 12) % 12],
        income: 3908,
        expenses: 2780,
    },
    {
        month: monthNames[(new Date().getMonth() - 1 + 12) % 12],
        income: 4800,
        expenses: 1890,
    },
    {
        month: monthNames[new Date().getMonth()],
        income: 3800,
        expenses: 2390,
    },
];

function Chart() {
    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="" vertical={false} />
                    <XAxis dataKey="month" />
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