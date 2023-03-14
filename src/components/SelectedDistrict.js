import React from "react";
import renewable_energy_img from '../images/renewable-energy.jpg';

const SelectedDistrict = ({ district }) => {
	return (
		<div
			className="w-1/3 h-[500px] rounded-md  text-slate-800 bg-[#f8f2ed59]  box-shadow flex flex-col justify-between  border-l border-[#cbeaffbb] border-r-2"
			data-aos="zoom-in"
			data-aos-anchor="#example-anchor"
			data-aos-duration="1000"
		>
			<h3 className=" text-lg rounded-md bg-[#cbeaffbb] py-2 text-center box-shadow text-[#64748B]">
				{district}
			</h3>
			<section className="flex flex-col items-center justify-center gap-y-6">
				<div className=" w-5/6 p-2 rounded-md bg-gradient-to-r from-[#cbeaffbb] to-[#e0f2fe11] border border-slate-100">
					<p className="text-sm text-center font-semibold text-slate-500">
						Energy Produced
					</p>
					<div className="flex items-center mt-2 gap-6 p-2  rounded-[100px] mx-4 bg-gradient-to-r from-[#cbeaffbb] to-[#e0f2fe11] border border-slate-100">
						<div className="w-16 h-16 border border-sky-300 rounded-full p-[2px]">
							<img
								src={renewable_energy_img}
								className="w-full h-full rounded-full"
								alt=""
							/>
						</div>
						<p className="text-2xl text-[#ff9100ef] drop-shadow-lg">
							394394793 Kw
						</p>
					</div>
				</div>
				<div className=" w-5/6 p-2 rounded-md bg-gradient-to-r from-[#cbeaffbb] to-[#e0f2fe11] border border-slate-100">
					<p className="text-sm text-center font-semibold text-slate-500">
						CO<sub>2</sub> Emission Reduced
					</p>
					<div className="flex items-center mt-2 gap-6 p-2  rounded-[100px] mx-4 bg-gradient-to-r from-[#cbeaffbb] to-[#e0f2fe11] border border-slate-100">
						<div className="w-16 h-16 border border-sky-300 rounded-full p-[2px]">
							<img
								src={renewable_energy_img}
								className="w-full h-full rounded-full"
								alt=""
							/>
						</div>
						<p className="text-2xl text-[#ff9100ef] drop-shadow-lg">
							394394793 Kw
						</p>
					</div>
				</div>
			</section>
			<h3 className=" text-md rounded-md bg-[#cbeaffbb] py-5 text-center box-shadow text-[#3f3f3ff6]">
				<span></span>
			</h3>
		</div>
	);
};

export default SelectedDistrict;
