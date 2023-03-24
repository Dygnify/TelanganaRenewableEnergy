import React from "react";
import DashboardCard1 from "../../components/cards/DashboardCard1";
import DashboardCard2 from "../../components/cards/DashboardCard2";
import DashboardChart1 from "../../components/charts/DashboardCharts/DashboardChart1";
import DashboardChart2 from "../../components/charts/DashboardCharts/DashboardChart2";
import profileImg from "../../images/profile-img.jpg";
import galleryImg1 from "../../images/pm-kusum-scheme.jpg";
import galleryImg2 from "../../images/TSREDCO-Logo.svg";
import "./Profile.css";
import DashboardCard3 from "../../components/cards/DashboardCard3";

const Profile = () => {
	return (
		<div className="text-slate-500 gap-4 flex box-border profile">
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
					Mr. C. Narayana Reddy is a farmer who lives in a small village in Mulugu district of Telangana. He owns around 4 acres of land which he inherited from his father. Narayana Reddy primarily grows paddy and cotton crops, which are well-suited to the fertile soil in the region.
					
					</p>
					<br/>
					<p className="text-[12px] text-justify">He has installed a solar pump to draw water from his well for irrigation purposes, and has also installed a solar rooftop system to generate electricity for his home and farm. The solar pump and rooftop system were installed in 2019, with the help of a government subsidy program aimed at promoting renewable energy adoption in rural areas.</p>
				</div>
			</section>
			<section className="profile-mid-section dashboard w-8/12 min-h-[500px] rounded-md  border border-[#e9e5fd]">
				<h2 className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
					Dashboard
				</h2>
				<div className="mt-8 grid grid-cols-2 gap-4 p-2">
					<DashboardChart1 />
					<DashboardChart2 />
				</div>
				<div className="mt-8 grid grid-cols-1 gap-8 p-2">
					<DashboardCard1  />
					<DashboardCard2  />
					<DashboardCard3  />
				</div>
			</section>
			<section className="profile-right-section w-2/12 min-h-[500px] rounded-md  bg-[#e9e5fd4d] border border-[#e9e5fd] p-2 box-shadow2">
				<h2 className=" text-sm border-b-2 border-[#e9e5fdc7] font-semibold text-slate-500 drop-shadow-lg">
					Eligible Subsidies
				</h2>
				<div className="">
					<div className=" border border-[#cbeaff59]    p-2 pt-1 cursor-pointer mt-4 box-shadow2">
						<p className="text-[12px] mt-1 text-justify">
						Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)
						</p>
						<img
							src={galleryImg1}
							alt=""
							className="w-full border border-sky-200"
						/>
					</div>
					<div className=" border border-[#cbeaff59]    p-2 pt-1 cursor-pointer mt-4 box-shadow2">
						<p className="text-[12px] mt-1 text-justify">
						తెలంగాణ రాష్ట్ర పునరుద్ధరణీయ ఇంధన వనరుల అభివృద్ధి సంస్థ లిమిటెడ్ (TSREDCO) -Implementation of Solar Rooftop plants subsidy payments under GCRT Phase II
						</p>
						<img
							src={galleryImg2}
							alt=""
							className="w-full border border-sky-200"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
