import React, { useState } from "react";
import Button from "../../components/Button/Button";

const Form = ({ handleNext,number, setNumber }) => {
	const [isFocus, setIsFocus] = useState(false);
	

	const phoneNumberHandler = (e) => {
		e.preventDefault();
		setNumber(e.target.number.value);
	};
	return (
		<div>
			<h2 className=" text-[1.4375rem] lg:text-[1.8rem] font-semibold text-slate-500  drop-shadow-lg px-2 text-center">
				Mobile Number Verification
			</h2>
			<form
				className=" mx-auto flex flex-col items-center"
				onSubmit={(e) => phoneNumberHandler(e)}
			>
				<div
					className={`mt-8 w-1/2 mx-auto input input-bordered  flex justify-between items-center ${
						isFocus
							? "outline outline-2 outline-offset-2  outline-[#c0b5f8e8] "
							: ""
					}`}
				>
					<input
						onChange={(e) => setNumber(e.target.value)}
						onFocus={() => {
							setIsFocus(isFocus ? false : true);
						}}
						onBlur={(e) => {
							setIsFocus(isFocus ? false : true);
						}}
						type="number"
						name="number"
						value={number}
						placeholder="Enter mobile number"
						className="outline-none  w-full appearance-none rounded-lg text-slate-500 "
					/>
				</div>
				<Button
					className="w-1/3 mx-auto mt-8"
					disabled={(number.length < 10) || (number.length > 10)}
					onClick={() => handleNext()}
				>
					Send OTP
				</Button>
			</form>
		</div>
	);
};

export default Form;
