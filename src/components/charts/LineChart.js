import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import './LineChart.css';

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
                width:"200%",
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
					name: "Solar Pump",
					data: [10, 15, 26, 20, 33, 22],
				},
				{
					name: "Solar Street Light",
					data: [30, 33, 21, 42, 19, 32],
				},
				{
					name: "Industrial Solar Rooftop",
					data: [15, 39, 52, 25, 29, 63],
				},
			],
			title: {
				text: "Energy Produced",
				align: "left",
				offsetY: 25,
				offsetX: 20,
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
				padding: {
					bottom: 0,
				},
			},
			labels: [
				"03/15/2023",
				"03/16/2023",
				"03/17/2023",
				"03/18/2023",
				"03/19/2023",
				"03/20/2023",
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

	return <div id="line-adwords" ref={chartRef} />;
};

export default LineChart;
