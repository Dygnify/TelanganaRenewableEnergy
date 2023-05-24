import React, { useEffect, useState } from "react";
import MyGaugeChart from "../../components/charts/MyGaugeChart";
import "./GreenScore.css";
import ConfigureTable from "./ConfigureTable";
import { useOutletContext } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import parse from "html-react-parser";
import sdgImg1 from "../../images/SDG7.png";
import sdgImg2 from "../../images/SDG13.png";

const demoInfo = [
  {
    text: "The Project has <b>met 80% of its targeted emission reduction</b> which is <b>in line</b> with <b>projects of similar size</b> in the region.",
  },
  {
    text: "The development of the project focuses on two <b>SDG goals. i.e  7 & 13</b>",
  },
];
const tableData = [
  {
    id: 1,
    parameter: "Achievement of the targeted cumulative emission reduction ",
    value: 720,
    weightage: 100,
    score: 720,
  },
];

const Tab1 = () => {
  const [totalScore, setTotalScore] = useState(
    tableData.reduce(
      (accumulator, currentValue) => accumulator + currentValue.score,
      0
    )
  );
  const [isLoader, setIsLoader] = useState(false);
  const { setFinalScore } = useOutletContext();
  useEffect(() => {
    console.log("total score: ", totalScore);
  }, [totalScore]);

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
						<div className="flex justify-center gap-4">
							<img
								src={sdgImg1}
								className="w-[15%] img-border hover:scale-[1.15] transition ease-in-out duration-500 "
								alt=""
							/>

							<img
								src={sdgImg2}
								className="w-[15%] img-border hover:scale-[1.15] transition ease-in-out duration-500 "
								alt=""
							/>
						</div>
					</div>
					<div className="relative w-[40%]">
						<div
							className={`${
								isLoader && "blur-md"
							}  flex justify-center p-[2px]  rounded-lg  hover:scale-[1.06] transition ease-in-out duration-700 box-shadow4 bg-[#fffffe]`}
						>
							<MyGaugeChart totalScore={totalScore} />
						</div>
						{/* {isLoader && <Loader />} */}
					</div>
				</div>
			</div>
			<ConfigureTable
				tableData={tableData}
				setTotalScore={setTotalScore}
				setFinalScore={setFinalScore}
				tab={"tab1"}
			/>
		</div>
	);
};

export default Tab1;
