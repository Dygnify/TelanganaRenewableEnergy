import React from "react";
import "../Profile/Profile.css";
import LeftProfilePanel from "../Profile/LeftProfilePanel";
import Device from "./Device";

const MyDevices = () => {
	const dummyTable = [
		{
			time: "05/04/2023 01:12:00 PM",
			unitName: "Unit 1",
			energyProduced: "18KW",
			totalEnergy: "163KW",
			status: "Active",
		},
		{
			time: "04/04/2023 01:12:00 PM",
			unitName: "Unit 1",
			energyProduced: "19KW",
			totalEnergy: "145KW",
			status: "Active",
		},
		{
			time: "03/04/2023 01:12:00 PM",
			unitName: "Unit 1",
			energyProduced: "16KW",
			totalEnergy: "126KW",
			status: "Active",
		},
		{
			time: "05/04/2023 01:12:00 PM",
			unitName: "Unit 2",
			energyProduced: "0KW",
			totalEnergy: "97KW",
			status: "Inactive",
		},
		{
			time: "04/04/2023 01:12:00 PM",
			unitName: "Unit 2",
			energyProduced: "0KW",
			totalEnergy: "97KW",
			status: "Inactive",
		},
		{
			time: "03/04/2023 01:12:00 PM",
			unitName: "Unit 2",
			energyProduced: "0KW",
			totalEnergy: "97KW",
			status: "Inactive",
		},
	];
	return (
		<div className="text-slate-500 gap-4 flex  box-border profile">
			<LeftProfilePanel />
			<section className="w-10/12 space-y-8">
				<div className="w-full  rounded-md  border border-[#e9e5fd] box-shadow4">
					<h2 className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
						Solar Pump
					</h2>
					<Device dummyTable={dummyTable} />
				</div>
				<div className="w-full  rounded-md  border border-[#e9e5fd] box-shadow4">
					<h2 className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
						Solar Rooftop
					</h2>
					<Device dummyTable={dummyTable} />
				</div>
			</section>
		</div>
	);
};

export default MyDevices;
