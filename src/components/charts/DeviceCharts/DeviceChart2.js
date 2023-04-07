import React, { useRef, useEffect } from "react";
import ApexCharts from "apexcharts";

const DeviceChart2 = () => {
	const chartRef = useRef(null);
	let chart = null;

	useEffect(() => {
		const options = {
			chart: {
				type: "area",
				stacked: false,
				height: 350,
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "straight",
			},
			series: [
				{
					name: "Series A",
					data: [30, 40, 35, 20, 49, 55, 70, 61, 125],
				},
			],
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
				],
			},
			yaxis: {
				title: {
					text: "Sales",
				},
			},
			tooltip: {
				shared: true,
				intersect: false,
				y: {
					formatter: function (y) {
						if (typeof y !== "undefined") {
							return y.toFixed(0) + " dollars";
						}
						return y;
					},
				},
			},
		};

		if (chartRef.current) {
			chart = new ApexCharts(chartRef.current, options);
			chart.render();
		}

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	}, []);

	return <div ref={chartRef} />;
};

export default DeviceChart2;
