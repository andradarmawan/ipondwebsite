import React from "react";
import "./historychart.css"; 
import {
	LineChart,
	ResponsiveContainer,
	Legend,
	Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";

function HistoryChart() {
	const [data, setData] = useState([]);

	useEffect (() => {
        const dataref = ref(db, "/Data_MyIpond/Data_Json")
        const unsubscribedata = onValue(dataref, (snapshot) => {
            const fetchdata = snapshot.val();
			const chartdata = Object.keys(fetchdata).map((key) => ({
				date: fetchdata[key].Tanggal, 
				pH: parseFloat(fetchdata[key].pH)
			}));
			setData(chartdata);
        });

    return () => {
        unsubscribedata();
    }
	},  []);

	return (
		<>
			<ResponsiveContainer height={350}>
				<LineChart data={data}  width={500} height={300} margin={{ top: 20, right: 30, left: 20, bottom: 5}}>
					<CartesianGrid strokeDasharray="3 1"/>
					<XAxis dataKey="date" interval={"preserveStartEnd"} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line type="monotone" dataKey="pH"  strokeWidth={1} stroke="red"/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default HistoryChart;
