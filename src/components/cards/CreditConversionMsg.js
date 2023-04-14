import React from "react";

const CreditConversionMsg = ({ setIsCreditConversionMsg }) => {
	return (
		<div
			className="my-modal-body w-1/3  rounded-[10px]"
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<div className="box-shadow4 rounded-[15px] p-4 w-full h-full mx-auto">
				<div className="flex justify-end  items-center -mt-2 ">
					<label
						className="bg-[#dcd6fc86] p-2 rounded-full hover:bg-[#dcd6fcb2] border border-[#dcd6fc5d] cursor-pointer"
						onClick={() => setIsCreditConversionMsg(false)}
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
				<div className=" min-h-[100px] flex flex-col justify-center items-center">
					<h1 className=" text-[1.4375rem] lg:text-[1.3rem] font-semibold text-slate-700  drop-shadow-lg px-2 text-center">Yay! 🎉</h1>
					<h2 className=" text-[1.4375rem] lg:text-[1.3rem] font-semibold text-slate-700  drop-shadow-lg px-2 text-center">
						NFT Minted Successfully
					</h2>
				</div>
			</div>
		</div>
	);
};

export default CreditConversionMsg;
