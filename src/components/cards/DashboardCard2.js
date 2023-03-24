import React from "react";
import demoImg from "../../images/solar-pump.png";
import iconImg from "../../images/renewable-energy.jpg";
import iconImg2 from "../../images/energy_consumed.jpeg";
import iconImg3 from "../../images/co2 reduction.png";
import iconImg4 from "../../images/Sustainability Score.png";

const demoInfo = [
	{ text: "Energy produced", energy: "354 KW", img: iconImg },
	{ text: "Energy consumed", energy: "296 KW", img: iconImg2 },
	{ text: "GHG emissions reduced", energy: "444 Mt", img: iconImg3 },
	{ text: "Sustainability score", energy: "126 GS", img: iconImg4 },
];

const DashboardCard2 = () => {
	return (
		<div>
			<div className="box-shadow4 gradient-right border border-[#ccc2ff8f] w-4/5 mx-auto flex flex-col  rounded-md  gap-4 p-4">
				<div className="flex ">
					<p className="w-[35%] text-center text-[#475569] font-semibold text-[18px] drop-shadow-lg">
						Solar Pump
					</p>
					<p className="w-[60%] text-center text-[#475569] font-semibold text-[18px] drop-shadow-lg"></p>
				</div>
				<div className="flex justify-center gap-4">
					<div className="w-[35%] h-full border border-[#ccc2ffe5] p-[2px] rounded-lg hover:scale-[1.15] transition ease-in-out duration-700 box-shadow2">
						<img
							src={demoImg}
							alt=""
							className="w-full h-full rounded-md"
						/>
					</div>
					<div className="w-[60%] h-full flex flex-col justify-between gap-y-2">
						{demoInfo.map((item, i) => (
							<div
								key={i}
								className="flex justify-between px-2 py-2 items-center border border-[#ccc2ff8f] hover:border-[#ccc2ff] rounded-[5px]  hover:scale-105 transition ease-in-out duration-300 box-shadow5 gradient-right"
							>
								<div className="flex gap-2 ">
									<div className="w-[20px] flex items-center mix-blend-multiply">
										<img
											src={item.img}
											alt=""
											className="w-full rounded-full"
										/>
									</div>
									<span>{item.text}</span>
								</div>
								<span>{item.energy}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardCard2;
