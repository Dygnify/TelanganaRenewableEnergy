import React, { useState } from "react";
import MyGaugeChart from "../../components/charts/MyGaugeChart";
import "./GreenScore.css";
import ConfigureTable from "./ConfigureTable";
import { useOutletContext } from "react-router-dom";
import parse from "html-react-parser";
const demoInfo = [
  { text: "The Project Developer has a <b>good standing in the Industry</b>." },
  {
    text: "The promoters have <b>more than 3 years of experience</b> in the line.",
  },
  {
    text: "There is <b>no negative news</b> as per the alternative data check.",
  },
];
const tableData = [
  {
    id: 1,
    parameter: "Business Risk score",
    value: 706.8,
    weightage: 40,
    score: 282.72,
  },
  {
    id: 2,
    parameter: "Management Risk score",
    value: 737,
    weightage: 40,
    score: 294.8,
  },
  {
    id: 3,
    parameter: "Alternative data score",
    value: 675,
    weightage: 20,
    score: 135,
  },
];
const Tab5 = () => {
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
        tab={"tab5"}
      />
    </div>
  );
};

export default Tab5;
