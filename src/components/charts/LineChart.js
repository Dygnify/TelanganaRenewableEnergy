import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const LineChart = () => {
	const chartRef = useRef(null);

    useEffect(()=>{
        window.Apex = {
			chart: {
				foreColor: "#535A6C",
				toolbar: {
					show: false,
				},
			},
			stroke: {
				width: 3,
			},
			dataLabels: {
				enabled: false,
			},
			tooltip: {
				theme: "dark",
			},
			grid: {
				borderColor: "#535A6C",
				xaxis: {
					lines: {
						show: true,
					},
				},
			},
		};
    },[])

	useEffect(() => {
		var optionsLine = {
			chart: {
				height: 350,
				width: "200%",
				type: "line",
				zoom: {
					enabled: false,
				},
				dropShadow: {
					enabled: true,
					top: 3,
					left: 2,
					blur: 4,
					opacity: 1,
				},
			},
			stroke: {
				curve: "smooth",
				width: 2,
			},
			series: [
				{
					name: "Industrial Solar Rooftop",
					data: [15, 39, 52, 45, 39, 63],
				},
				{
					name: "Solar Street Light",
					data: [30, 33, 21, 42, 19, 32],
				},
				{
					name: "Others",
					data: [10, 15, 26, 20, 33, 22],
				}
			],
			title: {
				text: "Daily Categorywise Energy Production",
				align: "center",
				offsetY: 0,
				offsetX: 0,
			},
			subtitle: {
				text: "(in MW)",
				offsetY: 68,
				offsetX: -5,
			},
			markers: {
				size: 6,
				strokeWidth: 0,
				hover: {
					size: 9,
				},
			},
			grid: {
				show: true,
				borderColor: "#D6D4E5",
				padding: {
					bottom: 0,
				},
			},
			labels: [
				"15/03/2023",
				"16/03/2023",
				"17/03/2023",
				"18/03/2023",
				"19/03/2023",
				"20/03/2023",
			],
			xaxis: {
				tooltip: {
					enabled: false,
				},
			},
			legend: {
				position: "top",
				horizontalAlign: "right",
				offsetY: -20,
			},
		};

		var chartLine = new ApexCharts(
			document.querySelector("#line-adwords"),
			optionsLine
		);
		chartLine.render();
	}, []);

	return (
		<div className="h-full mt-2">
			<div id="line-adwords" ref={chartRef} />
		</div>
	);
};

export default LineChart;