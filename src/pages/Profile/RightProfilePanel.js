import React from 'react';
import galleryImg1 from "../../images/pm-kusum-scheme.jpg";
import galleryImg2 from "../../images/TSREDCO-Logo.svg";

const RightProfilePanel = () => {
    return (
		<section className="profile-right-section w-2/12 min-h-[500px] rounded-md  bg-[#e9e5fd4d] border border-[#e9e5fd] p-2 box-shadow2">
			<h2 className=" text-sm border-b-2 border-[#e9e5fdc7] font-semibold text-slate-500 drop-shadow-lg">
				Eligible Subsidies
			</h2>
			<div className="">
				<div className=" border border-[#cbeaff59]    p-2 pt-1 cursor-pointer mt-4 box-shadow2">
					<p className="text-[12px] mt-1 text-justify">
						Pradhan Mantri Kisan Urja Suraksha evam Utthaan
						Mahabhiyan (PM-KUSUM)
					</p>
					<img
						src={galleryImg1}
						alt=""
						className="w-full border border-sky-200"
					/>
				</div>
				<div className=" border border-[#cbeaff59]    p-2 pt-1 cursor-pointer mt-4 box-shadow2">
					<p className="text-[12px] mt-1 text-justify">
						తెలంగాణ రాష్ట్ర పునరుద్ధరణీయ ఇంధన వనరుల అభివృద్ధి సంస్థ
						లిమిటెడ్ (TSREDCO) -Implementation of Solar Rooftop
						plants subsidy payments under GCRT Phase II
					</p>
					<img
						src={galleryImg2}
						alt=""
						className="w-full border border-sky-200"
					/>
				</div>
			</div>
		</section>
	);
};

export default RightProfilePanel;