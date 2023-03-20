import React from "react";
import iconImg from "../../images/renewable-energy.jpg";
import DashboardCardChart from "../charts/DashboardCharts/DashboardCardChart";

const demoInfo = [
	{ text: "Number of solar utilities used", energy: "" },
	{ text: "Total Solar Energy Produced by equipments", energy: "" },
	{ text: "Contribution of Unused Energy to Peers", energy: "" },
	{ text: "Financial repayments of Solar Equipment Loans", energy: "" },
];

const DashboardCard1 = () => {
	return (
		<div className="">
			<div className="box-shadow4 gradient-right border border-[#ccc2ff8f] w-4/5 mx-auto flex flex-col  rounded-md  gap-4 p-4">
				<div className="flex ">
					<p className="w-[35%] text-center text-[#475569] font-semibold text-[18px] drop-shadow-lg">
						Green Score
					</p>
					<p className="w-[60%] text-center text-[#475569] font-semibold text-[18px] drop-shadow-lg">
						Analysis Parameters
					</p>
				</div>
				<div className="flex justify-center gap-4">
					<div className="w-[35%] h-full p-[2px] border border-[#ccc2ffe5]  rounded-lg  hover:scale-[1.15] transition ease-in-out duration-700 box-shadow2 bg-[#FDFCFF]">
						<DashboardCardChart />
					</div>
					<div className="w-[60%] h-full flex flex-col justify-between gap-y-2">
						{demoInfo.map((item, i) => (
							<div
								key={i}
								className="flex justify-between p-2 items-center border border-[#ccc2ff8f] hover:border-[#ccc2ff] rounded-[5px]  hover:scale-105 transition ease-in-out duration-300 box-shadow5 gradient-right"
							>
								<div className="flex gap-2 ">
									<div className="w-[20px] flex items-center mix-blend-multiply">
										<img
											src={iconImg}
											alt=""
											className="w-full rounded-full"
										/>
									</div>
									<span>{item.text}</span>
								</div>
								<span className="">{item.energy}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardCard1;
