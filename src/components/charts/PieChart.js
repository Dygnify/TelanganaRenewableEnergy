import React from 'react';
import { PolarArea } from "react-chartjs-2";

const PieChart = () => {
    const data = {
		labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"],
		datasets: [
			{
				label: "My Dataset",
				data: [25, 30, 45, 38, 50, 40],
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#FF9F40",
					"#AB9F30",
				],
			},
		],
	};

    return (
		<div style={{ height: "400px", width: "400px" }}>
			<PolarArea data={data} />
		</div>
	);
};

export default PieChart;