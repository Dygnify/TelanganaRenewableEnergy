import React from "react";
import Chart from "react-apexcharts";

const DeviceChart1 = () => {
	const chartData = [
		{
			x: "Jan",
			y: 20,
		},
		{
			x: "Feb",
			y: 35,
		},
		{
			x: "Mar",
			y: 40,
		},
		{
			x: "Apr",
			y: 30,
		},
		{
			x: "May",
			y: 45,
		},
		{
			x: "Jun",
			y: 50,
		},
	];

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
			text: "This is a demo line chart",
			align: "center",
			offsetY: 20,
			offsetX: 0,
			style: {
				fontSize: "16px",
				fontWeight: "bold",
				color: "#535A6C",
			},
		},
		subtitle: {
			text: "(KWP)",
			offsetY: 42,
			offsetX: -5,
			style: {
				fontSize: "12px",
				fontWeight: "bold",
				color: "#535A6C",
			},
		},
		xaxis: {
			categories: chartData.map((data) => data.x),
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
	};

	const series = [
		{
			name: "Series 1",
			data: chartData.map((data) => data.y),
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
