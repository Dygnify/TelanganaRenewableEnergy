import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const DashboardCardChart = ({ creditLoaderDisplayed=true, chainScore=689 }) => {
	const [state, setState] = useState({
		otherChart: {
			series: [0],
			options: {
				chart: {
					height: 350,
					type: "radialBar",
				},
				plotOptions: {
					radialBar: {
						startAngle: -135,
						endAngle: 135,

						hollow: {
							margin: 20,
							size: "70%",
							background: "#fff",

							image: undefined,
							imageOffsetX: 0,
							imageOffsetY: 0,
							position: "front",
							dropShadow: {
								enabled: true,
								top: 3,
								left: 0,
								blur: 4,
								opacity: 0.24,
							},
						},
						track: {
							background: "#fff",
							strokeWidth: "100%",
							margin: 0, // margin is in pixels
							dropShadow: {
								enabled: true,
								top: -3,
								left: 0,
								blur: 4,
								opacity: 0.35,
							},
						},

						dataLabels: {
							showOn: "always",
							name: {
								offsetY: 20,
								show: true,
								color: "#008118",
								fontSize: "11px",
							},
							value: {
								formatter: function (val) {
									return "?";
								},
								offsetY: -15,
								color: "#111",
								fontSize: "30px",
								show: true,
							},
						},
					},
				},
				fill: {
					type: "image",

					image: {
						src: [
							"https://res.cloudinary.com/dltzp2gwx/image/upload/v1675953386/Screenshot_20230209_200525_d61b8t.png",
						],
					},
				},
				stroke: {
					lineCap: "round",
				},
				labels: ["Green Score"],
			},
		},
	});

	useEffect(() => {
		if (creditLoaderDisplayed) {
			setState({
				otherChart: {
					series: [chainScore / 9],
					options: {
						chart: {
							height: 350,
							type: "radialBar",
						},
						plotOptions: {
							radialBar: {
								startAngle: -135,
								endAngle: 135,

								hollow: {
									margin: 20,
									size: "70%",
									background: "#fff",

									image: undefined,
									imageOffsetX: 0,
									imageOffsetY: 0,
									position: "front",
									dropShadow: {
										enabled: true,
										top: 3,
										left: 0,
										blur: 4,
										opacity: 0.24,
									},
								},
								track: {
									background: "#fff",
									strokeWidth: "100%",
									margin: 0, // margin is in pixels
									dropShadow: {
										enabled: true,
										top: -3,
										left: 0,
										blur: 4,
										opacity: 0.35,
									},
								},

								dataLabels: {
									showOn: "always",
									name: {
										offsetY: 20,
										show: true,
										color: "#008118",
										fontSize: "11px",
									},
									value: {
										formatter: function (val) {
											return chainScore;
										},
										offsetY: -15,
										color: "#111",
										fontSize: "20px",
										show: true,
									},
								},
							},
						},
						fill: {
							type: "image",

							image: {
								src: [
									"https://res.cloudinary.com/dltzp2gwx/image/upload/v1675953386/Screenshot_20230209_200525_d61b8t.png",
								],
							},
						},
						stroke: {
							lineCap: "round",
						},
						labels: ["Green Score"],
					},
				},
			});
		} else {
			setState({
				otherChart: {
					series: [0],
					options: {
						chart: {
							height: 350,
							type: "radialBar",
						},
						plotOptions: {
							radialBar: {
								startAngle: -135,
								endAngle: 135,

								hollow: {
									margin: 20,
									size: "70%",
									background: "#fff",

									image: undefined,
									imageOffsetX: 0,
									imageOffsetY: 0,
									position: "front",
									dropShadow: {
										enabled: true,
										top: 3,
										left: 0,
										blur: 4,
										opacity: 0.24,
									},
								},
								track: {
									background: "#fff",
									strokeWidth: "100%",
									margin: 0, // margin is in pixels
									dropShadow: {
										enabled: true,
										top: -3,
										left: 0,
										blur: 4,
										opacity: 0.35,
									},
								},

								dataLabels: {
									showOn: "always",
									name: {
										offsetY: 20,
										show: true,
										color: "#008118",
										fontSize: "11px",
									},
									value: {
										formatter: function (val) {
											return "?";
										},
										offsetY: -15,
										color: "#111",
										fontSize: "20px",
										show: true,
									},
								},
							},
						},
						fill: {
							type: "image",

							image: {
								src: [
									"https://res.cloudinary.com/dltzp2gwx/image/upload/v1675953386/Screenshot_20230209_200525_d61b8t.png",
								],
							},
						},
						stroke: {
							lineCap: "round",
						},
						labels: ["Green Score"],
					},
				},
			});
		}
	}, [chainScore, creditLoaderDisplayed]);

	return (
		<div className="flex justify-center items-center w-full h-full -mt-2">
			<Chart
				options={state?.otherChart?.options}
				series={state?.otherChart?.series}
				type="radialBar"
				width="280"
			/>
		</div>
	);
};

export default DashboardCardChart;
