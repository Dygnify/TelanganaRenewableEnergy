import React, { useEffect } from "react";
import "./RangeSlider.css";

const RangeSlider = ({tab, id, rangeValue, onChange }) => {

	useEffect(() => {
		const sliderEl = document.querySelector(`.range-input${tab+id}`);
		const rangeV = document.getElementById(`${tab+id}`);

		const progress = (rangeValue / sliderEl.max) * 100;

		sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
		const newValue = parseInt(rangeValue, 10); 
		const newPosition = 10 - newValue * 0.2;
		rangeV.innerHTML = `<span>${newValue}%</span>`;
		rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
	}, [tab, id, rangeValue]);

	const handleChange = (event) => {
		const newValue = parseInt(event.target.value, 10);
		if (typeof onChange === "function") {
			onChange(id, newValue);
		}
	};

	return (
		<div className="range-slider relative">
			<div class="range-value" id={`${tab+id}`}></div>
			<input
				className={`range-input${tab+id}`}
				type="range"
				min="00"
				max="100"
				value={rangeValue}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};

export default RangeSlider;
