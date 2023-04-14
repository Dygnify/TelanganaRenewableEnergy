import React, { useState } from "react";
import carbon_credit from "../../images/carbon_credit.png";
import Button from "../../components/Button/Button";
import rupeeIcon from "../../images/rupee.jpg";
import "./CarbonCredit.css";
import ConvertCarbonCredit from "./ConvertCarbonCredit";
import CreditConversionMsg from "./CreditConversionMsg";

const CarbonCredit = () => {
    const [carbonCredit, setCarbonCredit] = useState(50);
	const [isConvertCarbonCredit, setIsConvertCarbonCredit] = useState(false);
    const [isCreditConversionMsg, setIsCreditConversionMsg ] = useState(false);
	return (
		<div>
			<div className="relative overflow-hidden border-2 border-[#caedf7] w-2/3 p-2 mx-auto flex  items-center justify-between rounded-md box-shadow2 carbon-credit-bg">
				<div className=" flex items-center justify-center gap-4 p-4">
					<div className="w-[100px] h-[100px] border border-[#0dacac] rounded-full scale-[1.15]  p-[2px] flex justify-center items-center mix-blend-multiply">
						<img
							src={carbon_credit}
							alt=""
							className="mix-blend-multiply w-full h-full rounded-md "
						/>
					</div>
					<div className=" font-semibold text-xl text-font-semibold text-slate-500 drop-shadow-lg">
						<p className="text-[#0dacac] text-[28px] font-bold flex justify-center">
							{carbonCredit} (~
							{carbonCredit * 40}
							<div className="">
								<img
									src={rupeeIcon}
									alt=""
									className=" w-5 h-5 ml-[1px] -mt-1 "
								/>
							</div>
							)
						</p>
					</div>
				</div>
				<div className="w-2/5 relative px-2">
					<Button
						className="w-full carbon-credit-button"
						onClick={() => setIsConvertCarbonCredit(true)}
					>
						Tokenize
					</Button>
				</div>
			</div>
			<div
				className={`${
					(isConvertCarbonCredit || isCreditConversionMsg) &&
					"my-modal"
				}`}
			>
				{isConvertCarbonCredit && (
					<ConvertCarbonCredit
						setIsConvertCarbonCredit={setIsConvertCarbonCredit}
						setIsCreditConversionMsg={setIsCreditConversionMsg}
						carbonCredit={carbonCredit}
						setCarbonCredit={setCarbonCredit}
					/>
				)}
				{isCreditConversionMsg && (
					<CreditConversionMsg
						setIsCreditConversionMsg={setIsCreditConversionMsg}
					/>
				)}
			</div>
		</div>
	);
};

export default CarbonCredit;
