import React, { useState } from "react";
import carbon_credit from "../../images/carbon_credit.png";
import Button from "../../components/Button/Button";
import rupeeIcon from "../../images/rupee.jpg";
import "./Cards.css";
import ConvertCarbonCredit from "./ConvertCarbonCredit";
import CreditConversionMsg from "./CreditConversionMsg";

const CarbonCredit = () => {
    const [carbonCredit, setCarbonCredit] = useState(50);
    const [reducedCarbonCredit, setReducedCarbonCredit] = useState(0);
	const [isConvertCarbonCredit, setIsConvertCarbonCredit] = useState(false);
    const [isCreditConversionMsg, setIsCreditConversionMsg ] = useState(false);
	return (
		<div>
			<div className="relative border-2 border-[#b7f7ef] w-2/6 mx-auto flex flex-col pb-1 items-center justify-between rounded-md box-shadow2 bg-[#c1d9f8]">
				<div className=" w-full flex flex-col items-center justify-center gap-4 p-4 pb-6 carbon-credit-upper-part">
					<div className=" w-[50%] h-full border border-[#8de999] rounded-full scale-[1.15]  p-[2px] flex justify-center items-center">
						<img
							src={carbon_credit}
							alt=""
							className="w-full h-full rounded-md mix-blend-multiply "
						/>
					</div>
					<div className="font-semibold text-xl text-font-semibold text-slate-500 drop-shadow-lg mt-[6]">
						<p className="text-[#f7974e] text-[32px] font-bold flex justify-center -mt-1">
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
				<div className="relative carbon-credit-lower-part w-full pt-5 bg-[#c1d9f8]">
					<Button
						className="w-full"
						onClick={() => setIsConvertCarbonCredit(true)}
					>
						Tokenize
					</Button>
				</div>
				<div className="rect"></div>
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
