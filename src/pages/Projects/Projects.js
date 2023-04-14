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
			details: "The Demo Information",
		},
		{
			title: "Project Files",
			details: "No file available",
		},
		{
			title: "Location",
			details: "2-3 districts with boundary touching each other",
		},
		{
			title: "Type",
			details: "Renewable Energy (Solar)",
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
				details: "0001-005005-005099-UCR-CoU-IN-008-01012018-31122018",
			},
			{
				title: "Vintage Year",
				details: "2021",
			},
			{
				title: "CoU's Available",
				details: "85",
			},
			{
				title: "Status",
				details: "Registered (Others)",
			},
		],
		[
			{
				title: "Serial Number",
				details: "0001-005005-005099-UCR-CoU-IN-008-01012018-31122018",
			},
			{
				title: "Vintage Year",
				details: "2022",
			},
			{
				title: "CoU's Available",
				details: "105",
			},
			{
				title: "Status",
				details: "Registered (Others)",
			},
		],
		[
			{
				title: "Serial Number",
				details: "0001-005005-005099-UCR-CoU-IN-008-01012018-31122018",
			},
			{
				title: "Vintage Year",
				details: "2023",
			},
			{
				title: "CoU's Available",
				details: "98",
			},
			{
				title: "Status",
				details: "Registered (Others)",
			},
		],
		[
			{
				title: "Serial Number",
				details: "0001-005005-005099-UCR-CoU-IN-008-01012018-31122018",
			},
			{
				title: "Vintage Year",
				details: "2024",
			},
			{
				title: "CoU's Available",
				details: "134",
			},
			{
				title: "Status",
				details: "Registered (Others)",
			},
		],
		[
			{
				title: "Serial Number",
				details: "0001-005005-005099-UCR-CoU-IN-008-01012018-31122018",
			},
			{
				title: "Vintage Year",
				details: "2025",
			},
			{
				title: "CoU's Available",
				details: "75",
			},
			{
				title: "Status",
				details: "Registered (Others)",
			},
		],
		[
			{
				title: "Serial Number",
				details: "0001-005005-005099-UCR-CoU-IN-008-01012018-31122018",
			},
			{
				title: "Vintage Year",
				details: "2026",
			},
			{
				title: "CoU's Available",
				details: "110",
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
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p className="font-bold">190,405</p>
			</div>
			<br />
			<CarbonCredit />
		</div>
	);
};

export default Projects;
