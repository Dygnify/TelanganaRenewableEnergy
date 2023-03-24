import React from "react";
import energy_img from "../images/energy.png";
import co2_img from "../images/CO2.png";

const SelectedDistrict = ({ district, energy }) => {
	return (
		<div
			className=" w-1/3 h-full pb-6 rounded-md  text-slate-800 bg-[#d8d7d610]  box-shadow3 "
			data-aos="zoom-in"
			data-aos-anchor="#example-anchor"
			data-aos-duration="1000"
		>
			<h3 className="gradient-bottom box-shadow2 text-[20px] rounded-md  py-2 text-center  text-[#64748B]">
				{district}
			</h3>
			<section className="flex flex-col items-center  gap-y-6 mt-6">
				<div className=" w-5/6 p-2 rounded-md gradient-right  box-shadow5">
					<p className="text-sm text-center font-semibold text-slate-500">
						Energy Produced
					</p>
					<div className="flex items-center mt-2 gap-6 p-2  rounded-[100px] mx-4 gradient-right border border-slate-100">
						<div className="w-16 h-16 border border-[#FE9710] rounded-full p-[2px]">
							<img
								src={energy_img}
								className="w-full h-full rounded-full"
								alt=""
							/>
						</div>
						<p className="text-2xl text-[#ff9100ef] drop-shadow-lg">
							{energy} MW
						</p>
					</div>
				</div>
				<div className="w-5/6 p-2 rounded-md gradient-right  box-shadow5">
					<p className="text-sm text-center font-semibold text-slate-500">
						GHG Emissions Reduced
					</p>
					<div className="flex items-center mt-2 gap-6 p-2  rounded-[100px] mx-4 gradient-right border border-slate-100">
						<div className="w-16 h-16 border border-[#FE9710] rounded-full p-[2px]">
							<img
								src={co2_img}
								className="w-full h-full rounded-full"
								alt=""
							/>
						</div>
						<p className="text-2xl text-[#ff9100ef] drop-shadow-lg">
							{energy * 1.5} Gt
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SelectedDistrict;
