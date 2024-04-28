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
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../firebase";


function HistoryChart() {
	const [data, setData] = useState([]);

	useEffect (() => {
        const dataref = ref(db, "/Data_MyIpond/Data_Json")
        const unsubscribedata = onValue(dataref, (snapshot) => {
            const fetchdata = snapshot.val();
			const chartdata = Object.keys(fetchdata).map((key) => ({
				date: fetchdata[key].Tanggal, 
				temperature: parseFloat(fetchdata[key].Temperature),
				pH: parseFloat(fetchdata[key].pH),
				turbidity: parseFloat(fetchdata[key].Turbidity)
			}));
			setData(chartdata);
        });

    return () => {
        unsubscribedata();
    }
	},  []);

	return (
		<>
			<ResponsiveContainer className="responsive-container" width="100%" aspect={2}>
				<LineChart data={data} margin={{ right: 50 }}>
					<CartesianGrid />
					<XAxis dataKey="date" interval={"preserveStartEnd"} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line type="monotone" dataKey="temperature"/>
					<Line type="monotone" dataKey="turbidity"/>
					<Line type="monotone" dataKey="pH"/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default HistoryChart;
