import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardChart1 = () => {
	const options = {
		chart: {
			id: "area-chart",
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
		},
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
			labels: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				shade: "dark",
				gradientToColors: ["#FFA500", "#008000"],
				shadeIntensity: 1,
				type: "horizontal",
				opacityFrom: 1,
				opacityTo: 1,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "smooth",
			width: 0,
		},
		grid: {
			show: false,
			strokeDashArray: 0,
			position: "back",
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
			row: {
				colors: undefined,
				opacity: 0.5,
			},
			column: {
				colors: undefined,
				opacity: 0.5,
			},
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: -10,
			},
		},
	};

	const series = [
		{
			name: "series-1",
			data: [20, 30, 40, 30, 52, 48, 60, 51, 105],
		},
	];

	return (
		<div className="w-full box-shadow rounded-md relative">
			<ReactApexChart options={options} series={series} type="area" />
			<p className="absolute top-[10px] left-[12px] font-semibold text-xl text-orange-900">
				<span>Temperature </span>
				<span>
					30<sup className="text-orange-800 text-xs">0</sup>
				</span>
			</p>
		</div>
	);
};

export default DashboardChart1;
