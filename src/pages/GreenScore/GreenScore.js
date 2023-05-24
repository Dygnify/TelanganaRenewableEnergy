import React, { useEffect, useState } from "react";
import MyGaugeChart from "../../components/charts/MyGaugeChart";
import GreenDashboard from "./GreenDashboard";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ConfigureWeightage from "./ConfigureWeightage";
import parse from "html-react-parser";
const demoInfo = [
  {
    text: "The Project is focused on meeting <b>SDG goals #7 (Affordable And Clean Energy) & #13 (Climate Action)</b> and has been <b>successful in achieving 80%</b> of its targeted CO2 emission reduction",
  },
  {
    text: "The developer has <b>previously executed similar projects with a satisfactory performance</b>",
  },
  { text: "The region is <b>vulnerable to drought & heatwaves</b>" },
  {
    text: "The <b>recent policy events</b> are expected to have a <b>positive impact</b> on the project",
  },
  {
    text: "The <b>Project developers have a good standing in the Industry</b>",
  },
];
const tableData = [
  {
    id: 1,
    parameter: "SDG Goals",
    weightage: 20,
  },
  {
    id: 2,
    parameter: "Governance",
    weightage: 20,
  },
  {
    id: 3,
    parameter: "Climate Risk",
    weightage: 20,
  },
  {
    id: 4,
    parameter: "Policy Risk",
    weightage: 20,
  },
  {
    id: 5,
    parameter: "Credit Risk",
    weightage: 20,
  },
];

function calculateFinalScore(scores, weightages) {
  let result = 0;
  const len = Object.keys(weightages).length;
  console.log(weightages);
  for (let i = 0; i < len; i++) {
    if (!scores["tab" + (i + 1)]) result += 0;
    else
      result +=
        (weightages["category" + (i + 1)] * scores["tab" + (i + 1)]) / 100;
  }
  return result.toFixed(2);
}

const GreenScore = () => {
	const [finalScore, setFinalScore] = useState({
		tab1: 720,
		tab2: 533,
		tab3: 282,
		tab4: 900,
		tab5: 713,
	});
	const [finalWeightage, setFinalWeightage] = useState({});
	const [resultScore, setResultScore] = useState(0);
	useEffect(() => {
		console.log("final weightage:", finalWeightage);
		console.log("final score:", finalScore);
		setResultScore(calculateFinalScore(finalScore, finalWeightage));
	}, [finalWeightage, finalScore]);
	return (
		<div>
			<div>
				<div className="mt-4 box-shadow4 gradient-right border border-[#ccc2ff8f] w-4/5 mx-auto flex flex-col rounded-md p-4 pb-1">
					<h2 className="text-center text-[1.6375rem] font-semibold text-[#8110FE]  px-2 drop-shadow-md">
						Dygnify Green Score
					</h2>
					<p className="text-center text-[#475569] font-semibold text-[18px] drop-shadow-lg">
						Solar Pump Medium Scale Project - SPMSP000010654
					</p>
					<div className="flex mt-4">
						<p className="w-[50%] text-center text-[#475569] font-semibold text-[18px] drop-shadow-lg">
							Scoreboard
						</p>
						<p className="w-[50%] text-center text-[#475569] font-semibold text-[18px] drop-shadow-lg">
							Weightage
						</p>
					</div>
					<div className="flex justify-around  gap-4 mt-1">
						<div className="w-[50%] flex justify-center items-center p-[2px] border border-[#ccc2ffe5]  rounded-lg  hover:scale-[1.06] transition ease-in-out duration-700 box-shadow5 bg-[#f7f7f8]">
							<MyGaugeChart totalScore={resultScore} />
						</div>
						<div className="w-[50%] h-full flex justify-center p-[2px] border border-[#ccc2ffe5]  rounded-lg  hover:scale-[1.06] transition ease-in-out duration-700 box-shadow5 bg-[#f7f7f8]">
							<ConfigureWeightage
								tableData={tableData}
								setFinalScore={setFinalScore}
								setFinalWeightage={setFinalWeightage}
								tab={"weightage"}
							/>
						</div>
					</div>
					<div className="collapse collapse-arrow mt-1">
						<input type="checkbox" className="peer" />
						<p className="collapse-title text-left text-[#475569] font-semibold text-[18px] drop-shadow-lg">
							Key Highlights
						</p>
						<div className="collapse-content flex flex-col gap-y-2">
							{demoInfo.map((item, i) => (
								<div
									key={i}
									className="flex justify-between p-2 items-stretch border border-[#ccc2ff8f] hover:border-[#ccc2ff] rounded-[5px]  hover:scale-105 transition ease-in-out duration-300 box-shadow5 gradient-right"
								>
									<p>
										<i
											className="
                                        far
                                        fa-hand-point-right
										mr-2
                                    "
										></i>
										{parse(item.text)}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="w-4/5 mx-auto mt-6 min-h-screen border border-[#ccc2ff8f] rounded-md">
					<GreenDashboard />
					<div className="mt-2 text-slate-800">
						<Outlet context={{ setFinalScore }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default GreenScore;
