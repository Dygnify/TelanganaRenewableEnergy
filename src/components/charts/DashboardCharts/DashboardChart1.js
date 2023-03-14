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
			categories: ['November', 'December', 'January', 'February', 'March'],
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
				gradientToColors: [ "#008000"],
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
	};

	const series = [
		{
			name: "Energy Produced",
			data: [85, 80, 85, 90, 95],
		},
		
	];

	return (
		<div
			className="w-full box-shadow rounded-md relative bg-[#cbeaffbb]"
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<ReactApexChart options={options} series={series} type="area" />
			<p className="absolute top-[10px] left-[12px] font-semibold text-xl text-slate-500 drop-shadow-lg">
				<span>Energy Produced</span>
			</p>
		</div>
	);
};

export default DashboardChart1;
