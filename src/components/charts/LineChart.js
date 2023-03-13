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
					name: "Low",
					data: [1, 15, 26, 20, 33, 22],
				},
				{
					name: "Medium",
					data: [3, 33, 21, 42, 19, 32],
				},
				{
					name: "High",
					data: [0, 39, 52, 11, 29, 63],
				},
			],
			title: {
				text: "Solar Project",
				align: "left",
				offsetY: 25,
				offsetX: 20,
			},
			subtitle: {
				text: "Statistics",
				offsetY: 55,
				offsetX: 20,
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
				"01/15/2002",
				"01/16/2002",
				"01/17/2002",
				"01/18/2002",
				"01/19/2002",
				"01/20/2002",
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
