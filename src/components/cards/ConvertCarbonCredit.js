import React, { useState } from "react";
import Button from "../Button/Button";

const ConvertCarbonCredit = ({
	setIsConvertCarbonCredit,
	setIsCreditConversionMsg,
	carbonCredit,
	setCarbonCredit,
}) => {
	const [isFocus, setIsFocus] = useState(false);
	const [temp, setTemp] = useState(0);
	const carbonCreditHandler = (e) => {
		e.preventDefault();
		console.log("rakib");
		setCarbonCredit(carbonCredit - parseInt(temp));
        setIsConvertCarbonCredit(false);
		setIsCreditConversionMsg(true);
	};
	return (
		<div
			className="my-modal-body w-1/2 min-h-[335px] rounded-[15px]"
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<div className="box-shadow4 rounded-[15px] p-4 w-full h-full mx-auto">
				<div className="flex justify-end  items-center -mt-2 ">
					<label
						className="bg-[#dcd6fc86] p-2 rounded-full hover:bg-[#dcd6fcb2] border border-[#dcd6fc5d] cursor-pointer"
						onClick={() => setIsConvertCarbonCredit(false)}
					>
						<svg
							width="19"
							height="19"
							viewBox="0 0 19 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="blockpass-package-close-button-fill"
								d="M18.4596 3.44507C18.8501 3.05454 18.8501 2.42138 18.4596 2.03085L17.1358 0.707107C16.7453 0.316583 16.1121 0.316583 15.7216 0.707107L9.58333 6.84538L3.44507 0.707107C3.05454 0.316583 2.42138 0.316583 2.03085 0.707107L0.707107 2.03085C0.316583 2.42138 0.316582 3.05454 0.707107 3.44507L6.84538 9.58333L0.707107 15.7216C0.316583 16.1121 0.316583 16.7453 0.707107 17.1358L2.03085 18.4596C2.42138 18.8501 3.05454 18.8501 3.44507 18.4596L9.58333 12.3213L15.7216 18.4596C16.1121 18.8501 16.7453 18.8501 17.1358 18.4596L18.4596 17.1358C18.8501 16.7453 18.8501 16.1121 18.4596 15.7216L12.3213 9.58333L18.4596 3.44507Z"
								fill="black"
							/>
						</svg>
					</label>
				</div>
				<div className="mt-4">
					<h2 className=" text-[1.4375rem] lg:text-[1.8rem] font-semibold text-slate-500  drop-shadow-lg px-2 text-center">
						Tokenize your Carbon Credits
					</h2>
					<p className="mt-8  w-1/2 mx-auto text-slate-500 flex items-center flex-col">
						<span>Current available carbon credits:</span>

						<span className="bg-[#9281ffbe] rounded-full p-1 px-2 text-[#FFFFFF] border-2 border-[#8471fa] font-bold text-xl">
							{carbonCredit}
						</span>
					</p>
					<form
						className="mt-2 mx-auto flex flex-col items-center"
						
					>
						<div
							className={`mt-1 w-1/2 mx-auto input input-bordered  flex justify-between items-center ${
								isFocus
									? "outline outline-2 outline-offset-2  outline-[#c0b5f8e8] "
									: ""
							}`}
						>
							<input
								onChange={(e) => setTemp(e.target.value)}
								onFocus={() => {
									setIsFocus(isFocus ? false : true);
								}}
								onBlur={(e) => {
									setIsFocus(isFocus ? false : true);
								}}
								type="number"
								name="number"
								value={!temp ? "" : temp}
								placeholder="Enter the number of carbon credits"
								className="outline-none  w-full appearance-none rounded-lg text-slate-500 "
							/>
						</div>
						<Button
							className="w-1/3 mx-auto mt-8"
							disabled={parseInt(temp) < 1 || parseInt(temp) > parseInt(carbonCredit)}
							onClick={(e) => {
								carbonCreditHandler(e)

							}}
						>
							Mint NFT
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ConvertCarbonCredit;
