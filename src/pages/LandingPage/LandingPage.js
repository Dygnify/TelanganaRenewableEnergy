import React, { useState } from "react";
import Map from "../../components/Map";
import SelectedDistrict from "../../components/SelectedDistrict";

const LandingPage = () => {
	const [district, setDistrict] = useState("Telangana State");
	return (
		<div className="flex gap-8">
			<Map setDistrict={setDistrict} />
			<SelectedDistrict district={district} />
		</div>
	);
};

export default LandingPage;
