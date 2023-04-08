import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const Form = ({ handlePrev, number }) => {
	const navigate = useNavigate();
	const [isFocus, setIsFocus] = useState(false);
	const [otp, setOtp] = useState("");

	const otpHandler = (e) => {
		e.preventDefault();
	};
	return (
		<div data-aos="zoom-in" data-aos-duration="1000">
			<h2 className=" text-[1.4375rem] lg:text-[1.8rem] font-semibold text-slate-500  drop-shadow-lg px-2 text-center">
				Please Enter the OTP to Verify your Account
			</h2>
			<p className="mt-3 text-md font-semibold text-slate-500  drop-shadow-lg px-2 text-center">
				We've sent a 6-digit OTP to{" "}
				<span className="underline text-[#9281ff]">{number}</span>
			</p>

			<form
				className="mx-auto flex flex-col items-center"
				onSubmit={(e) => otpHandler(e)}
			>
				<div
					className={`mt-8 w-1/2 mx-auto input input-bordered  flex justify-between items-center ${
						isFocus
							? "outline outline-2 outline-offset-2  outline-[#c0b5f8e8] "
							: ""
					}`}
				>
					<input
						onChange={(e) => setOtp(e.target.value)}
						onFocus={() => {
							setIsFocus(isFocus ? false : true);
						}}
						onBlur={(e) => {
							setIsFocus(isFocus ? false : true);
						}}
						type="number"
						name="otp"
						value={otp}
						placeholder="Enter 6-digit OTP code"
						className="outline-none  w-full appearance-none rounded-lg text-slate-500 "
					/>
				</div>
				<Button
					className="w-1/3 mx-auto mt-6"
					disabled={otp.length < 6 || otp.length > 6}
					onClick={() => navigate("/profile")}
				>
					Validate OTP
				</Button>
			</form>
			<p className="text-center text-xs mt-2 text-slate-500 p-1  rounded-full bg-[#b6b5b533] w-1/6 mx-auto border border-[#9c9c9c28]  cursor-pointer">
				Resend OTP
			</p>
		</div>
	);
};

export default Form;
