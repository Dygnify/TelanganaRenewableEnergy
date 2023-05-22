import React, { useEffect, useState } from "react";
import "./RangeSlider.css";

const RangeSlider = ({ id, rangeValue, onChange }) => {
	const [value, setValue] = useState(rangeValue);

	useEffect(() => {
		const sliderEl = document.querySelector(`.range-input${id}`);
		const rangeV = document.getElementById(`rangeV${id}`);

		const progress = (rangeValue / sliderEl.max) * 100;

		sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
		const newPosition = 10 - value * 0.2;
		rangeV.innerHTML = `<span>${value}%</span>`;
		rangeV.style.left = `calc(${value}% + (${newPosition}px))`;
	}, [id, rangeValue, value]);

	const handleChange = (event) => {
		const newValue = parseInt(event.target.value, 10);
		setValue(newValue);
		if (typeof onChange === "function") {
			onChange(id, newValue);
		}
	};

	return (
		<div className="range-slider relative">
			<div class="range-value" id={`rangeV${id}`}></div>
			<input
				className={`range-input${id}`}
				type="range"
				min="00"
				max="100"
				value={value}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};

export default RangeSlider;
