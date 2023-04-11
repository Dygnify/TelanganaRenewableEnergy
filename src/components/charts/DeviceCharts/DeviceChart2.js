import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const DeviceChart2 = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		const options = {
			chart: {
				type: "bar",
				width: "600",
				height: "350",
				stacked: false,
				toolbar: {
					show: false,
				},
				zoom: {
					enabled: false,
				},
			},

			title: {
				text: "Inverter Output Active Power",
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
			series: [
				{
					name: "power",
					data: [14.3, 17.2, 16.9, 19.1, 18.6],
				},
			],
			xaxis: {
				categories: [
					"06/04/2023",
					"07/04/2023",
					"08/04/2023",
					"09/04/2023",
					"10/04/2023",
				],
			},
			yaxis: {
				tickAmount: 6,
				min: 0,
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
							<p>Timestamp: ${w.globals.labels[dataPointIndex]} 01:12:00 PM</p>
							<p>Value: ${series[seriesIndex][dataPointIndex]} kWp</p>
						</div>`;
				},
			},
		};

		const chart = new ApexCharts(chartRef.current, options);
		chart.render();

		return () => {
			chart.destroy();
		};
	}, []);

	return (
		<div className="flex justify-center box-shadow rounded-md border border-[#def8f6f5]">
			<div ref={chartRef} />
		</div>
	);
};

export default DeviceChart2;
