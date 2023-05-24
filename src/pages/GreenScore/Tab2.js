import React, { useState } from "react";
import MyGaugeChart from "../../components/charts/MyGaugeChart";
import "./GreenScore.css";
import ConfigureTable from "./ConfigureTable";
import { useOutletContext } from "react-router-dom";
import parse from "html-react-parser";
const demoInfo = [
  {
    text: "The developer has <b>all the mandatory licenses</b> for developing the project.",
  },
  {
    text: "The developer has <b>applied</b> for a <b>quality assurance certificate</b> but is <b>yet to receive it</b>.",
  },
  {
    text: "The developer has <b>average experience</b> in <b>executing projects of similar size</b> but in a <b>different region</b>.",
  },
];
const tableData = [
  {
    id: 1,
    parameter: "Relevant environment related certifications/licences",
    value: 700,
    weightage: 25,
    score: 175,
  },
  {
    id: 2,
    parameter: "Regulatory complianced adherence",
    value: 500,
    weightage: 25,
    score: 125,
  },
  {
    id: 3,
    parameter: "Relevant green project execution experience (in Years)",
    value: 432,
    weightage: 25,
    score: 108,
  },
  {
    id: 4,
    parameter: "Performance of previous projects",
    value: 500,
    weightage: 25,
    score: 125,
  },
];
const Tab2 = () => {
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
        tab={"tab2"}
      />
    </div>
  );
};

export default Tab2;
