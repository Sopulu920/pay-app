import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"

// months of the year
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//data fro chart
const chartData = [
    {
        name: monthNames[(new Date().getMonth() - 5 + 12) % 12],
        uv: 70000,
        pv: 50000,
        amt: 60000,
    },
    {
        name: monthNames[(new Date().getMonth() - 4 + 12) % 12],
        uv: 60000,
        pv: 50000,
        amt: 60000,
    },
    {
        name: monthNames[(new Date().getMonth() - 3 + 12) % 12],
        uv: 50000,
        pv: 70000,
        amt: 60000,
    },
    {
        name: monthNames[(new Date().getMonth() - 2 + 12) % 12],
        uv: 40000,
        pv: 40000,
        amt: 60000,
    },
    {
        name: monthNames[(new Date().getMonth() - 1 + 12) % 12],
        uv: 60000,
        pv: 50000,
        amt: 60000,
    },
    {
        name: monthNames[new Date().getMonth()],
        uv: 80000,
        pv: 60000,
        amt: 60000,
    },
];

function Chart() {
    return (
        <>
            <div className="chart-container">
                <div>
                    <AreaChart width={650} height={350} data={chartData}>
                        <Area dataKey="uv" stroke="green" fill="green" fillOpacity={0.2} />
                        <Area dataKey="pv" stroke="red"  fill="red" fillOpacity={0.2} />
                        <CartesianGrid />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </AreaChart>
                </div>
            </div>
        </>
    );
}

export default Chart;