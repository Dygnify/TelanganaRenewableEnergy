import React, { useState } from "react";
import MyGaugeChart from "../../components/charts/MyGaugeChart";
import "./GreenScore.css";
import ConfigureTable from "./ConfigureTable";
import { useOutletContext } from "react-router-dom";
import parse from "html-react-parser";
const demoInfo = [
  { text: "The  region is <b>vulnerable to Drought and Heatwaves</b>." },
  {
    text: "As per IMD data the region was <b>affected with moderate to severe drought for 3 out of the last 10 years</b>.",
  },
  {
    text: "As per IMD data  the region was <b>affected with Heatwaves for 7 years out of the past 10 years</b>.",
  },
];
const tableData = [
  {
    id: 1,
    parameter: "Earthquake",
    value: 0,
    weightage: 0,
    score: 0,
  },
  {
    id: 2,
    parameter: "Drought",
    value: 84,
    weightage: 50,
    score: 42,
  },
  {
    id: 3,
    parameter: "Floods",
    value: 0,
    weightage: 0,
    score: 0,
  },
  {
    id: 4,
    parameter: "Forest Fire",
    value: 0,
    weightage: 0,
    score: 0,
  },
  {
    id: 5,
    parameter: "Cyclones",
    value: 0,
    weightage: 0,
    score: 0,
  },
  {
    id: 6,
    parameter: "Landslide",
    value: 0,
    weightage: 0,
    score: 0,
  },
  {
    id: 7,
    parameter: "Heat wave",
    value: 480,
    weightage: 50,
    score: 240,
  },
  {
    id: 8,
    parameter: "Unseasonal/heavy rains",
    value: 0,
    weightage: 0,
    score: 0,
  },
];
const Tab3 = () => {
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
        tab={"tab3"}
      />
    </div>
  );
};

export default Tab3;
