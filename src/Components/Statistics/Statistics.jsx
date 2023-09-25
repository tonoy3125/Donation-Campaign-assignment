import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

export default function Statistics() {
    let getLocalStore = localStorage.getItem("card-applictaions");
    let localString = JSON.parse(getLocalStore);
    let newLocalstring = localString ? localString : [];

    const [myChart, setMyChart] = useState();
    const [totalDonate, setTotalDonate] = useState();
    useEffect(() => {
        let defaultdonate = 12;
        let newDonate = (newLocalstring.length / defaultdonate) * 1000;
        setMyChart(newDonate);
        console.log(newDonate);

        let newTotalDonate = 1000 - newDonate;
        setTotalDonate(newTotalDonate);

        // console.log(totalDonait);
    }, [newLocalstring.length]);

    const data = [
        { name: "Total Donation", value: totalDonate },
        { name: "Your Donation", value: myChart },
    ];

    const COLORS = ["#FF444A", "#00C49F"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div className="text-center">
            <div className="inline-block">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value">
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell - ${index}`}
                        fill={COLORS[index % COLORS.length]}
              />
            ))}
                    </Pie>
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
}