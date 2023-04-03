import React from "react";
import "../Profile/Profile.css";
import LeftProfilePanel from "../Profile/LeftProfilePanel";
import Device from "./Device";

const MyDevices = () => {
	const dummyTable = [
		{
			time: "12/12/2023",
			unitName: "Dummy Name",
			energyProduced: "20KW",
			totalEnergy: "100KW",
			status: "True",
		},
		{
			time: "12/12/2023",
			unitName: "Dummy Name2",
			energyProduced: "20KW",
			totalEnergy: "100KW",
			status: "False",
		},
		{
			time: "12/12/2023",
			unitName: "Dummy Name3",
			energyProduced: "20KW",
			totalEnergy: "100KW",
			status: "True",
		},
		{
			time: "12/12/2023",
			unitName: "Dummy Name4",
			energyProduced: "20KW",
			totalEnergy: "100KW",
			status: "False",
		},
		{
			time: "12/12/2023",
			unitName: "Dummy Name5",
			energyProduced: "20KW",
			totalEnergy: "100KW",
			status: "True",
		},
		{
			time: "12/12/2023",
			unitName: "Dummy Name4",
			energyProduced: "20KW",
			totalEnergy: "100KW",
			status: "False",
		},
		{
			time: "12/12/2023",
			unitName: "Dummy Name5",
			energyProduced: "20KW",
			totalEnergy: "100KW",
			status: "True",
		},
		{
			time: "12/12/2023",
			unitName: "Dummy Name4",
			energyProduced: "20KW",
			totalEnergy: "100KW",
			status: "False",
		},
		{
			time: "12/12/2023",
			unitName: "Dummy Name5",
			energyProduced: "20KW",
			totalEnergy: "100KW",
			status: "True",
		},
	];
	return (
		<div className="text-slate-500 gap-4 flex  box-border profile">
			<LeftProfilePanel />
			<section className="w-10/12 space-y-8">
				<div className="w-full  rounded-md  border border-[#e9e5fd] box-shadow4">
					<h2 className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
						Device-1
					</h2>
					<Device dummyTable={dummyTable} />
				</div>
				<div className="w-full  rounded-md  border border-[#e9e5fd] box-shadow4">
					<h2 className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
						Device-2
					</h2>
					<Device dummyTable={dummyTable} />
				</div>
			</section>
		</div>
	);
};

export default MyDevices;
