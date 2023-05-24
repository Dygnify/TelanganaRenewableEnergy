import React, { useState } from "react";
import MyGaugeChart from "../../components/charts/MyGaugeChart";
import "./GreenScore.css";
import ConfigureTable from "./ConfigureTable";
import { useOutletContext } from "react-router-dom";
import parse from "html-react-parser";
const demoInfo = [
  {
    text: "The project is set to <b>benefit from</b> the recent <b>increase in budget allocation for Scheme</b> encouraging solar power projects.",
  },
  {
    text: "Government's decision to provide <b>tax benefits will reduce the overall effective expenses</b> and provide impetus to the industry.",
  },
];
const tableData = [
  {
    id: 1,
    parameter: "PM Kusum yojana outlay increased",
    value: 800,
    weightage: 25,
    score: 225,
  },
  {
    id: 2,
    parameter:
      "Government provides tax credits to offset a portion of the installation costs for solar panels.",
    value: 750,
    weightage: 25,
    score: 225,
  },
  {
    id: 3,
    parameter:
      "Are there any legal structure related risks that can de-rail the project?",
    value: 700,
    weightage: 50,
    score: 450,
  },
];
const Tab4 = () => {
  const [totalScore, setTotalScore] = useState(
    tableData.reduce(
      (accumulator, currentValue) => accumulator + currentValue.score,
      0
    )
  );
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
        <div className="flex justify-around  gap-4 mt-1 mb-3">
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
                  {parse(item.text)}
                </p>
              </div>
            ))}
          </div>
          <div className="w-[40%] h-full  flex justify-center p-[2px]  rounded-lg  hover:scale-[1.06] transition ease-in-out duration-700 box-shadow4 bg-[#fffffe]">
            <MyGaugeChart totalScore={totalScore} />
          </div>
        </div>
      </div>
      <ConfigureTable
        tableData={tableData}
        setTotalScore={setTotalScore}
        setFinalScore={setFinalScore}
        tab={"tab4"}
      />
    </div>
  );
};

export default Tab4;
