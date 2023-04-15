import React from "react";
import solar_pump from "../../images/solar-pump.png";
import "./Projects.css";
import CarbonCredit from "../../components/cards/CarbonCredit";

const Projects = () => {
	const projectCards = [
		{
			title: "Project Description",
			details:
				"Usage of solar pumps by smallholder farmers in Telangana for irrigation",
		},
		{
			title: "Project Category",
			details: "Renewable Energy",
		},
		{
			title: "Location",
			details: "Mulugu, Warangal, Mahabubabad, Bhadradri Kothagudem",
		},
		{
			title: "Type",
			details: "Solar Pumps",
		},
		{
			title: "Authorized Project Contact",
			details: "Dygnify",
		},
		{
			title: "Project Proponent",
			details: "992229753",
		},
	];
	const projectInfo = [
		[
			{
				title: "Serial Number",
				details: "0001-005005-005099-DYG-CC-IN-008-01012018-31122018",
			},
			{
				title: "Vintage Year",
				details: "2020",
			},
			{
				title: "Carbon Credit Available",
				details: "1585",
			},
			{
				title: "Status",
				details: "Registered (Others)",
			},
		],
		[
			{
				title: "Serial Number",
				details: "0001-005005-005099-DYG-CC-IN-008-01012018-31122018",
			},
			{
				title: "Vintage Year",
				details: "2021",
			},
			{
				title: "Carbon Credit Available",
				details: "1806",
			},
			{
				title: "Status",
				details: "Registered (Others)",
			},
		],
		[
			{
				title: "Serial Number",
				details: "0001-005005-005099-DYG-CC-IN-008-01012018-31122018",
			},
			{
				title: "Vintage Year",
				details: "2022",
			},
			{
				title: "Carbon Credit Available",
				details: "2014",
			},
			{
				title: "Status",
				details: "Registered (Others)",
			},
		],
		
	];
	return (
		<div>
			<h2 className="text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg px-2">
				Solar Pump medium scale project
			</h2>
			<div className="divider -mt-[2px]"></div>
			<div></div>
			<div className="flex justify-between gap-4">
				<div className="w-1/2 grid grid-cols-2 gap-4">
					{projectCards.map((card, i) => (
						<div
							key={i}
							className="box-shadow6   bg-[#F3FFFE] flex flex-col justify-center  items-center rounded-lg text-center min-h-[100px]"
						>
							<p className="font-bold text-slate-600">
								{card.title}
							</p>
							<p className=" text-slate-500 ">{card.details}</p>
						</div>
					))}
				</div>
				<div className="w-1/2">
					<img
						src={solar_pump}
						className="w-full rounded-md"
						alt=""
					/>
				</div>
			</div>
			<br />
			<div className="bg-[#eefdfb] p-4 border border-[#caedf7] rounded-lg">
				{projectInfo.map((info, i) => (
					<div key={i}>
						<section className="grid grid-cols-3 gap-4 mt-6">
							{info.map((item, i) => (
								<div
									key={i}
									className=" flex flex-col justify-center  rounded-lg"
								>
									<p className="font-bold text-slate-600">
										{item.title}
									</p>
									<p className=" text-slate-500" title={item.details}>
										{item.details.length>40 ? item.details.slice(0,40)+'...':item.details}
									</p>
								</div>
							))}
						</section>
						{i + 1 < projectInfo.length ? (
							<div className="divider "></div>
						) : (
							<span></span>
						)}
					</div>
				))}
			</div>
			<div className="px-3 py-2 flex justify-between items-center bg-slate-700 text-slate-50 text-[18px] rounded-md">
				<p>Total serialized carbon credit for this project that have been registred.</p>
				<p className="font-bold">5,405</p>
			</div>
			<br />
			<CarbonCredit />
		</div>
	);
};

export default Projects;
