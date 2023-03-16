import React from "react";
import demoImg from "../../images/demo-img.jpg";
import iconImg from "../../images/renewable-energy.jpg";
import DashboardCardChart from "../charts/DashboardCharts/DashboardCardChart";

const demoInfo = [
	{ text: "demo text demo text1", energy: "200Kw" },
	{ text: "demo text demo text2", energy: "300Kw" },
	{ text: "demo text demo text3", energy: "500Kw" },
	{ text: "demo text demo text4", energy: "700Kw" },
];

const DashboardCard1 = () => {
	return (
		<div className="box-shadow4 gradient-right border border-[#ccc2ff8f] w-4/5 mx-auto flex justify-center items-center rounded-md  gap-4 p-4">
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
							<div className="w-[20px] flex items-center">
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
	);
};

export default DashboardCard1;
