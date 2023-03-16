import React from "react";
import Chart from "react-apexcharts";

const PieChart2 = () => {
	const options = {
		chart: {
			// width: 380,
			type: "polarArea",
		},
		series: [42, 47, 52, 58, 65],
		colors: ["#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#FF9F40",
					"#AB9F30",],
		fill: {
			colors: ["#FF6384",
					"#36A2EB",
					"#FFCE56",
					"#4BC0C0",
					"#FF9F40",
					"#AB9F30",],
			opacity: 1,
		},
		labels: [
			"Label 1",
			"Label 2",
			"Label 3",
			"Label 4",
			"Label 5",
			"Label 6",
		],
		stroke: {
			width: 0.2,
			colors: undefined,
		},
		yaxis: {
			show: false,
		},
		legend: {
			position: "bottom",
		},
		plotOptions: {
			polarArea: {
				rings: {
					strokeWidth: 1,
				},
				spokes: {
					strokeWidth: 1,
				},
			},
		},
	};

	return (
		<div >
			<Chart
				options={options}
				series={options.series}
				type="polarArea"
				width={500}
				height={400}
			/>
		</div>
	);
};

export default PieChart2;
