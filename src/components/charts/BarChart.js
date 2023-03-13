import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const data = {
	title: "Solar Bar Chart",
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	values: [300, 200, 300, 400, 500, 450, 230],
	colors: [
		"rgba(255, 99, 132, 0.4)",
		"rgba(255, 159, 64, 0.4)",
		"rgba(255, 205, 86, 0.4)",
		"rgba(75, 192, 192, 0.4)",
		"rgba(54, 162, 235, 0.4)",
		"rgba(153, 102, 255, 0.4)",
		"rgba(101, 203, 217, 0.4)",
	],
	borderColor: [
		"rgb(255, 99, 132)",
		"rgb(255, 159, 64)",
		"rgb(255, 205, 86)",
		"rgb(75, 192, 192)",
		"rgb(54, 162, 235)",
		"rgb(153, 102, 255)",
		"rgb(101, 203, 217)",
	],
	borderWidth: 1,
};

const BarChart = () => {
	const chartContainer = useRef(null);

	useEffect(() => {
		if (chartContainer && chartContainer.current) {
			const chartConfig = {
				type: "bar",
				data: {
					labels: data.labels,
					datasets: [
						{
							label: data.title,
							data: data.values,
							backgroundColor: data.colors,
							borderColor: data.borderColor,
							borderWidth: data.borderWidth,
						},
					],
				},
				options: {
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
				},
			};
			new Chart(chartContainer.current, chartConfig);
		}
	}, [chartContainer, data]);

	return <canvas ref={chartContainer} />;
};

export default BarChart;
