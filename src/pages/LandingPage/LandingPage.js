import React, { useState } from "react";
import Map from "../../components/Map";
import SelectedDistrict from "../../components/SelectedDistrict";

const LandingPage = () => {
	const [district, setDistrict] = useState("Telangana State");
	return (
		<div className="">
			<h2
				className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500 drop-shadow-lg text-center mt-0 mb-4"
				data-aos="zoom-in"
				data-aos-anchor="#example-anchor"
				data-aos-duration="1000"
			>
				Telagana Solar Energy profile
			</h2>
			<div className="flex gap-8">
				<Map setDistrict={setDistrict} />
				<SelectedDistrict district={district} />
			</div>
		</div>
	);
};

export default LandingPage;
