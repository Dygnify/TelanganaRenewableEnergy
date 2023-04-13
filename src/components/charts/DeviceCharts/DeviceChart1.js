import React from "react";
import Chart from "react-apexcharts";

const DeviceChart1 = () => {
	const chartOptions = {
		chart: {
			id: "basic-line",
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
		},
		title: {
			text: "Site Output Active Power",
			align: "center",
			offsetY: 12,
			offsetX: 0,
			style: {
				fontSize: "14px",
				fontWeight: "bold",
				color: "#535A6C",
			},
		},
		subtitle: {
			text: "(kWp)",
			offsetY: 42,
			offsetX: -5,
			style: {
				fontSize: "12px",
				fontWeight: "bold",
				color: "#535A6C",
			},
		},
		xaxis: {
			categories: [
				"06/04/2023",
				"07/04/2023",
				"08/04/2023",
				"09/04/2023",
				"10/04/2023",
			],
			tooltip: {
				enabled: false,
			},
			crosshairs: {
				show: false,
			},
		},
		yaxis: {
			tickAmount: 6,
			min: 0,
		},
		stroke: {
			show: true,
			width: 5,
		},
		grid: {
			show: true,
			borderColor: "#AFBAC9",
			strokeDashArray: 0,
			position: "back",
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		tooltip: {
			followCursor: true,
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				return `<div class=" p-2 bg-[#1e3a5a] text-[#ffffff] text-[14px]">
							<p>Timestamp: ${w.globals.categoryLabels[dataPointIndex]} 01:12:00 PM</p>
							<p>Value: ${series[seriesIndex][dataPointIndex]} kWp</p>
						</div>`;
			},
		},
	};

	const series = [
		{
			name: "Series 1",
			data: [14.3, 17.2, 16.9, 19.1, 18.6],
		},
	];

	return (
		<div className="flex justify-center box-shadow rounded-md border border-[#def8f6f5]">
			<Chart
				options={chartOptions}
				series={series}
				type="line"
				width="600"
				height="350"
			/>
		</div>
	);
};

export default DeviceChart1;
