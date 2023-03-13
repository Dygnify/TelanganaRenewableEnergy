import React from "react";

const SelectedDistrict = ({ district }) => {
	return (
		<div
			className="w-1/3 h-[500px] rounded-md text-slate-800 bg-[#f8f2ed59]  box-shadow flex flex-col justify-between  border-l border-[#f7a842cb] border-r-2"
			data-aos="zoom-in"
			data-aos-anchor="#example-anchor"
			data-aos-duration="1000"
		>
			<h3 className=" text-md bg-[#f7a842cb] py-2 text-center box-shadow text-[#3f3f3ff6]">
				Dummy header
			</h3>
			<section className=" mt-8 flex items-center justify-center gap-x-4 mx-auto w-1/2">
				<p className="">District:</p>

				<p className="bg-[#fabd6e1e] border border-[#fabd6ec2] px-2 py-1 rounded-2xl min-w-[120px] text-center">
					{district}
				</p>
			</section>
			<h3 className=" text-md bg-[#f7a842cb] py-5 text-center box-shadow text-[#3f3f3ff6]">
				<span></span>
			</h3>
		</div>
	);
};

export default SelectedDistrict;
