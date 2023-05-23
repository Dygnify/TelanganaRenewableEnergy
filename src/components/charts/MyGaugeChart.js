import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { useEffect, useState } from "react";

// it returns the speed <= 900.
function getSpeed(speed) {
	return Math.min(100, Math.ceil((speed * 100) / 900));
}

const MyGaugeChart = ({ totalScore }) => {
	const [speed, setSpeed] = useState(0);

	useEffect(() => {
		setSpeed(getSpeed(totalScore));
	}, [totalScore]);

	Chart.register(ArcElement);

	const chartData = {
		datasets: [
			{
				data: [1],
				backgroundColor: (context) => {
					const { ctx, chartArea } = context.chart;
					if (!chartArea) return;

					const gradientSegment = ctx.createLinearGradient(
						chartArea.left,
						0,
						chartArea.right,
						0
					);
					gradientSegment.addColorStop(0, "rgb(254,1,1)");
					gradientSegment.addColorStop(0.5, "rgb(254,205,85)");
					gradientSegment.addColorStop(1, "rgb(144,237,144)");

					return gradientSegment;
				},

				borderRadius: [0],
			},
		],
	};

	const options = {
		circumference: 180,
		rotation: -90,
		cutout: "80%",
		responsive: true,
		maintainAspectRatio: true,
		aspectRatio: 1.5,
		animation: {
			animateRotate: true,
		},
		plugins: {
			legend: { display: false },
			tooltip: { enabled: false },
		},
	};

	const guageNeedle = {
		id: "guageNeedle",
		afterDatasetsDraw: (chart) => {
			const {
				ctx,
				chartArea: { width },
			} = chart;
			ctx.save();

			const angle = Math.PI + (1 / 100) * speed * Math.PI;

			const cx = width / 2;
			const cy = chart._metasets[0].data[0].y;

			// Get the color based on the speed level
			let pointerColor = "#5ee63c";

			if (speed < 40) {
				pointerColor = "red";
			} else if (speed < 75) {
				pointerColor = "orange";
			}

			ctx.translate(cx, cy - 15);
			ctx.rotate(angle);
			ctx.beginPath();
			ctx.moveTo(0, -3);
			ctx.lineTo(cx, 0);
			ctx.lineTo(0, 3);
			ctx.fillStyle = pointerColor;
			ctx.fill();
			ctx.rotate(-angle);

			ctx.translate(-cx, -cy);
			ctx.beginPath();
			ctx.arc(cx, cy, 5, 0, 10);
			ctx.fill();
			ctx.restore();
		},
	};

	const speedLabel = {
		id: "speedLabel",
		afterDatasetsDraw: (chart) => {
			const { ctx } = chart;

			var data = chart._metasets[0].data[0];
			var centerX = data.x;
			var centerY = data.y;

			ctx.fillStyle = "black";
			ctx.font = `bolder 1.5em roboto`;
			ctx.textAlign = "center";
			ctx.fillText((totalScore % 901).toFixed(0), centerX, centerY + 10);
		},
	};

	const labels = {
		id: "labels",
		afterDatasetsDraw: (chart) => {
			const {
				ctx,
				chartArea: { width },
			} = chart;
			ctx.save();
			const cy = chart._metasets[0].data[0].y;

			ctx.fillStyle = "rgb(144, 144, 144)";
			ctx.font = `bolder 1em roboto`;
			ctx.textAlign = "center";
			ctx.fillText(0, 10, cy + 15);
			ctx.fillText(900, width - 20, cy + 15);
		},
	};
	return (
		<div className="h-[200px]">
			<Doughnut
				key={speed}
				plugins={[speedLabel, guageNeedle, labels]}
				data={chartData}
				options={options}
			/>
		</div>
	);
};

export default MyGaugeChart;
