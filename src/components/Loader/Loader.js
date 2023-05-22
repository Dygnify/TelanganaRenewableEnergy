import React, { useEffect } from "react";
import "./Loader.css";

const Loader = ({finalScore, isLoader, setIsLoader}) => {
	
	return (
		<div className="loader-container">
			<div className="loader-spin loader"></div>
		</div>
	);
};

export default Loader;
