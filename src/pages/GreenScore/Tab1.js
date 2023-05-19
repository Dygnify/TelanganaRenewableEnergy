import React, { useState } from "react";
import MyGaugeChart from "../../components/charts/MyGaugeChart";
import "./GreenScore.css";
import ConfigureTable from "./ConfigureTable";
import { useOutletContext } from "react-router-dom";

const demoInfo = [
	{ text: "Number of solar utilities used" },
	{ text: "Total Solar Energy Produced by equipments" },
	{ text: "Contribution of Unused Energy to Peers" },
	{ text: "Financial repayments of Solar Equipment Loans" },
];
const tableData = [
	{
		id: 1,
		parameter: "Some text info1",
		value: 200,
		weightage: 0,
		score: 0,
	},
	{
		id: 2,
		parameter: "Some text info1",
		value: 200,
		weightage: 0,
		score: 0,
	},
	{
		id: 3,
		parameter: "Some text info1",
		value: 200,
		weightage: 0,
		score: 0,
	},
	{
		id: 4,
		parameter: "Some text info1",
		value: 200,
		weightage: 0,
		score: 0,
	},
];
const Tab1 = () => {
	const [totalScore, setTotalScore] = useState(0); 
	const { setFinalScore } = useOutletContext();
	return (
		<div>
			<div className="mx-auto flex flex-col rounded-md">
				<div className="flex mt-4">
					<p className="w-[50%] text-center text-[#283444] font-semibold text-[1rem]">
						Key Highlights
					</p>
					<p className="w-[50%] text-center text-[#283444] font-semibold text-[1rem]">
						Scoreboard
					</p>
				</div>
				<div className="flex justify-around  gap-4 mt-1">
					<div className="w-[40%]  flex flex-col gap-y-2">
						{demoInfo.map((item, i) => (
							<div
								key={i}
								className="flex justify-between p-2 items-stretch border border-[#ccc2ff8f] hover:border-[#ccc2ff]  hover:scale-105 transition ease-in-out duration-300 box-shadow5 gradient-top tab-row"
							>
								<p>
									<i
										className="
                                        far
                                        fa-hand-point-right
										mr-2
                                    "
									></i>
									{item.text}
								</p>
							</div>
						))}
					</div>
					<div className="w-[40%]  flex justify-center p-[2px]  rounded-lg  hover:scale-[1.06] transition ease-in-out duration-700 box-shadow4 bg-[#fffffe]">
						<MyGaugeChart totalScore={totalScore} />
					</div>
				</div>
			</div>
			<ConfigureTable
				tableData={tableData}
				setTotalScore={setTotalScore}
				setFinalScore={setFinalScore}
			/>
		</div>
	);
};

export default Tab1;
