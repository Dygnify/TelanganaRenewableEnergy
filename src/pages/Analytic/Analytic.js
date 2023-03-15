import React from "react";
import BarChart from "../../components/charts/BarChart";
import LineChart from "../../components/charts/LineChart";
import MapChart from "../../components/charts/MapChart";
import PieChart from "../../components/charts/PieChart";

const Analytic = () => {
	return (
		<div className="text-slate-200">
			<div className="grid grid-cols-2 gap-8">
				<section
					className="box-shadow min-h-[300px] flex justify-center items-center gradient-bottom rounded-md p-2 border border-[#cbeaff59]"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<PieChart />
				</section>
				<section
					className="box-shadow min-h-[300px] flex justify-center items-center gradient-bottom rounded-md  p-2 border border-[#cbeaff59]"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<BarChart />
				</section>
				<section
					className="box-shadow min-h-[300px] flex justify-center items-center gradient-bottom rounded-md p-2 border border-[#cbeaff59]"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<MapChart />
				</section>
				<section
					className="box-shadow min-h-[300px] flex justify-center items-center gradient-bottom rounded-md p-2 border border-[#cbeaff59]"
					data-aos="fade-up"
					data-aos-duration="1000"
				>
					<LineChart />
				</section>
			</div>
		</div>
	);
};

export default Analytic;
