import React from "react";
import ReactApexChart from "react-apexcharts";

const DashboardChart2 = () => {
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
			categories: ['Octomber','November', 'December', 'January', 'February', 'March'],
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
				gradientToColors: ["red"],
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
				bottom: -20,
				left: -10,
			},
		},
		colors: ["#fcb045", "#ff6464"], // custom color palett
	};

	const series = [
		{
			name: "Energy Consumed",
			
			data: [20, 52, 48, 60, 51, 105],
		},
	];

	return (
		<div
			className="w-full shadow-md rounded-md relative bg-[#f3c0991e]"
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<ReactApexChart options={options} series={series} type="area" />
			<p className="absolute top-[10px] left-[12px] font-semibold text-xl text-font-semibold text-slate-500 drop-shadow-lg">
				<span>Solar Energy Consumed</span>
			</p>
		</div>
	);
};

export default DashboardChart2;
