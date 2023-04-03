import React from 'react';
import profileImg from "../../images/profile-img.jpg";

const LeftProfilePanel = () => {
    return (
		<section className="profile-left-section w-2/12 min-h-[500px] rounded-md  bg-[#e9e5fd4d] border border-[#e9e5fd] box-shadow2">
			<div className="flex flex-col items-center mt-2">
				<div className="w-16 h-16 border border-[#ccc2ffe5] rounded-full p-[2px]">
					<img
						src={profileImg}
						className="w-full h-full rounded-full"
						alt=""
					/>
				</div>
				<p className="text-xs font-semibold text-slate-500 drop-shadow-lg">
					C. Narayana Reddy
				</p>
			</div>
			<div className="mt-8">
				<p className="text-center font-semibold text-slate-500 drop-shadow-lg">
					Summary
				</p>
				<div className="text-[12px]  box-shadow2 px-2 py-4 rounded-sm">
					<p className="flex justify-between">
						<span>District:</span> <span>Mulugu</span>
					</p>
					<p className="flex justify-between">
						<span>Email:</span> <span>cnreddy@gmail.com</span>
					</p>
					<p className="flex justify-between">
						<span>Phone:</span> <span>+91 9860431431</span>
					</p>
				</div>
			</div>
			<div className="mt-8 p-2">
				<p className="border-b-[1px] border-[#e9e5fdc7] font-semibold text-slate-500 drop-shadow-lg">
					Profile:
				</p>
				<p className="text-[12px] text-justify">
					Mr. C. Narayana Reddy is a farmer who lives in a small
					village in Mulugu district of Telangana. He owns around 4
					acres of land which he inherited from his father. Narayana
					Reddy primarily grows paddy and cotton crops, which are
					well-suited to the fertile soil in the region.
				</p>
				<br />
				<p className="text-[12px] text-justify">
					He has installed a solar pump to draw water from his well
					for irrigation purposes, and has also installed a solar
					rooftop system to generate electricity for his home and
					farm. The solar pump and rooftop system were installed in
					2019, with the help of a government subsidy program aimed at
					promoting renewable energy adoption in rural areas.
				</p>
			</div>
		</section>
	);
};

export default LeftProfilePanel;