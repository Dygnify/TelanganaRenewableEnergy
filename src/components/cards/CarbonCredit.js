import React from 'react';
import carbon_credit from '../../images/carbon_credit.png';
import Button from "../../components/Button/Button";
import rupeeIcon from "../../images/rupee.jpg";
import './Cards.css';

const CarbonCredit = () => {
    return (
		<div className="relative border border-[#b7f7ef] mx-auto flex flex-col pb-1 items-center justify-between rounded-md box-shadow2">
			<div className=" w-full flex flex-col items-center justify-center gap-4 p-4 pb-6 rounded-md carbon-credit-upper-part">
				<div className=" w-[50%] h-full border border-[#8de999] rounded-full scale-[1.15]  p-[2px] flex justify-center items-center">
					<img
						src={carbon_credit}
						alt=""
						className="w-full h-full rounded-md mix-blend-multiply "
					/>
				</div>
				<div className="font-semibold text-xl text-font-semibold text-slate-500 drop-shadow-lg mt-[6]">
					<p className="text-[#f7974e] text-[32px] font-bold flex justify-center -mt-1">
						50 (~2000{" "}
						<img
							src={rupeeIcon}
							alt=""
							className="w-5 h-5 ml-[1px] -mt-1"
						/>
						)
					</p>
				</div>
			</div>
			<div className="relative carbon-credit-lower-part w-full pt-3 bg-[#FFFFFF]">
				<Button className="w-full">Tokenize</Button>
			</div>

			<div className="rect"></div>
		</div>
	);
};

export default CarbonCredit;