import React from "react";
import Chart from "react-apexcharts";

const PieChart2 = () => {
	const options = {
		chart: {
			// width: 380,
			type: "polarArea",
		},
		series: [420, 470, 520, 580, 650],
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
			"Solar Furnace",
			"Household Solar rooftop",
			"Solar Pump",
			"Solar Street Lights",
			"Industrial Solar Rooftop"
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
