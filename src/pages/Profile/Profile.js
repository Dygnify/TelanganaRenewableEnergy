import React from "react";
import DashboardCard1 from "../../components/cards/DashboardCard1";
import DashboardCard2 from "../../components/cards/DashboardCard2";
import DashboardChart1 from "../../components/charts/DashboardCharts/DashboardChart1";
import DashboardChart2 from "../../components/charts/DashboardCharts/DashboardChart2";
import "./Profile.css";
import DashboardCard3 from "../../components/cards/DashboardCard3";
import LeftProfilePanel from "./LeftProfilePanel";
import RightProfilePanel from "./RightProfilePanel";

const Profile = () => {
	return (
		<div className="text-slate-500 gap-4 flex box-border profile">
			<LeftProfilePanel />
			<section className="profile-mid-section dashboard w-8/12 min-h-[500px] rounded-md  border border-[#e9e5fd]">
				<h2 className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
					Dashboard
				</h2>
				<div className="mt-8 grid grid-cols-2 gap-4 p-2">
					<DashboardChart1 />
					<DashboardChart2 />
				</div>
				<div className="mt-8 grid grid-cols-1 gap-8 p-2">
					<DashboardCard1 />
					<DashboardCard2 />
					<DashboardCard3 />
				</div>
			</section>
			<RightProfilePanel />
		</div>
	);
};

export default Profile;
