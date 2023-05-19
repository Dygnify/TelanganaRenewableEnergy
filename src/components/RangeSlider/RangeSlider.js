import React, { useState } from "react";
import "./RangeSlider.css";

const RangeSlider = ({ id,rangeValue, onChange }) => {
	const [value, setValue] = useState(rangeValue);

	const handleChange = (event) => {
		const newValue = parseInt(event.target.value, 10);
		setValue(newValue);
		if (typeof onChange === "function") {
			onChange(id, newValue);
		}
		console.log('id: ', id, " value: ", value);

		const sliderEl = document.querySelector(`.range-input${id}`);

		const progress = (newValue / sliderEl.max) * 100;

		sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
	};

	return (
		<div className="range-slider">
			<input
				className={`range-input${id}`}
				type="range"
				min="0"
				max="100"
				value={value}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};

export default RangeSlider;