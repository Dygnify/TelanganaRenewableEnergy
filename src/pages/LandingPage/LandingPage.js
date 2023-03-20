import React, { useState } from "react";
import Map from "../../components/Map";
import SelectedDistrict from "../../components/SelectedDistrict";
import energyMap from "../../utilities/energyInfo";

const LandingPage = () => {
	const [district, setDistrict] = useState("Telangana State");
	const [energy, setEnergy] = useState(energyMap.get("Telangana State"));
	return (
		<div className="">
			<h2
				className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500 drop-shadow-lg text-center mt-0 mb-4"
				data-aos="zoom-in"
				data-aos-anchor="#example-anchor"
				data-aos-duration="1000"
			>
				Telangana Solar Energy profile
			</h2>
			<div className="flex gap-8">
				<div className=" box-shadow4 w-2/3  flex justify-center items-center rounded-md  bg-[#f8fafa] border border-[#ccc2ff77] relative home-page-sticky">
					<Map
						setDistrict={setDistrict}
						setEnergy={setEnergy}
						width="w-[75%]"
					/>
				</div>
				<SelectedDistrict district={district} energy={energy} />
			</div>
		</div>
	);
};

export default LandingPage;
