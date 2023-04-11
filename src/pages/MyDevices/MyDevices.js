import React from "react";
import "../Profile/Profile.css";
import Device from "./Device";
import SiteConfig from "./SiteConfig";
import SiteLiveData from "./SiteLiveData";
import DeviceChart1 from "../../components/charts/DeviceCharts/DeviceChart1";
import DeviceChart2 from "../../components/charts/DeviceCharts/DeviceChart2";

const MyDevices = () => {
	const dummyTable = [
		{
			time: "10/04/2023 01:12:00 PM",
			unitName: "Unit 1",
			energyProduced: "18.6KW",
			totalEnergy: "198.3KW",
			status: "Active",
		},
		{
			time: "09/04/2023 01:12:00 PM",
			unitName: "Unit 1",
			energyProduced: "19.1KW",
			totalEnergy: "179.7KW",
			status: "Active",
		},
		{
			time: "08/04/2023 01:12:00 PM",
			unitName: "Unit 1",
			energyProduced: "16.9KW",
			totalEnergy: "160.6KW",
			status: "Active",
		},
		{
			time: "07/04/2023 01:12:00 PM",
			unitName: "Unit 1",
			energyProduced: "17.2KW",
			totalEnergy: "143.7KW",
			status: "Active",
		},
		{
			time: "06/04/2023 01:12:00 PM",
			unitName: "Unit 1",
			energyProduced: "14.3KW",
			totalEnergy: "126.5KW",
			status: "Active",
		},
		{
			time: "10/04/2023 01:12:00 PM",
			unitName: "Unit 2",
			energyProduced: "0KW",
			totalEnergy: "97KW",
			status: "Inactive",
		},
		{
			time: "09/04/2023 01:12:00 PM",
			unitName: "Unit 2",
			energyProduced: "0KW",
			totalEnergy: "97KW",
			status: "Inactive",
		},
		{
			time: "08/04/2023 01:12:00 PM",
			unitName: "Unit 2",
			energyProduced: "0KW",
			totalEnergy: "97KW",
			status: "Inactive",
		},
	];
	return (
		<div className="text-slate-500 gap-4 w-full profile">
			<section className=" space-y-12">
				<div className="w-full  rounded-md  ">
					<h2 className="text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
						Solar Pump
					</h2>
					<div className="mt-4">
						<h3 className="font-semibold text-xl text-slate-500  drop-shadow-lg px-2 text-center">
							Site Configuration Details
						</h3>
						<SiteConfig />
					</div>
					<div className="mt-8">
						<h3 className="font-semibold text-xl text-slate-500  drop-shadow-lg px-2 text-center">
							Site Live Data
						</h3>
						<SiteLiveData />
					</div>
					<div className="mt-12 grid grid-cols-2 gap-4 p-2">
						<DeviceChart1 />
						<DeviceChart2 />
					</div>
					<Device dummyTable={dummyTable} />
				</div>
				<div className="w-full  rounded-md">
					<h2 className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
						Solar Rooftop
					</h2>
					<div className="mt-4">
						<h3 className="font-semibold text-xl text-slate-500  drop-shadow-lg px-2 text-center">
							Site Configuration Details
						</h3>
						<SiteConfig />
					</div>
					<div className="mt-8">
						<h3 className="font-semibold text-xl text-slate-500  drop-shadow-lg px-2 text-center">
							Site Live Data
						</h3>
						<SiteLiveData />
					</div>
					<div className="mt-12 grid grid-cols-2 gap-4 p-2">
						<DeviceChart1 />
						<DeviceChart2 />
					</div>
					<Device dummyTable={dummyTable} />
				</div>
			</section>
		</div>
	);
};

export default MyDevices;
