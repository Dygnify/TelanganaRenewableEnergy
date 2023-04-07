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
				text: "This is a demo bar chart",
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
			series: [
				{
					name: "power",
					data: [30, 40, 45, 50, 49, 60, 70, 91, 120],
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
