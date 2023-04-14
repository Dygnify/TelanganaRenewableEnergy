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
			<div className="relative overflow-hidden border-2 border-[#caedf7] w-1/2 mx-auto flex  items-center justify-between rounded-md box-shadow2 bg-[#c1d9f8]">
				<div className="w-3/5 flex items-center justify-center gap-4 p-4 carbon-credit-upper-part">
					<div className="w-1/2 h-full border border-[#13ee30] rounded-full scale-[1.15]  p-[2px] flex justify-center items-center">
						<img
							src={carbon_credit}
							alt=""
							className="w-full h-full rounded-md mix-blend-multiply "
						/>
					</div>
					<div className="w-1/2 font-semibold text-xl text-font-semibold text-slate-500 drop-shadow-lg">
						<p className="text-[#f7974e] text-[28px] font-bold flex justify-center">
							{carbonCredit} (~
							{carbonCredit * 40}
							<img
								src={rupeeIcon}
								alt=""
								className="w-5 h-5 ml-[1px] -mt-1"
							/>
							)
						</p>
					</div>
				</div>
				<div className="w-2/5 relative px-2 carbon-credit-lower-part bg-[#c1d9f8]">
					<Button
						className="w-full"
						onClick={() => setIsConvertCarbonCredit(true)}
					>
						Tokenize
					</Button>
				</div>
				<div className="rect1"></div>
				<div className="rect2"></div>
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
