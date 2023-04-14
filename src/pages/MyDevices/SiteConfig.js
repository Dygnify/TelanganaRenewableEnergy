import React from "react";
import capacityImg from "../../images/devices/capacity.png";
import unitImg from "../../images/devices/units.png";
import inverterImg from "../../images/devices/inverter.png";
import co2Img from "../../images/devices/co2 saved.png";
import meterImg from "../../images/devices/meter.png";

const SiteConfig = () => {
	return (
		<div className="flex justify-center  gap-8 mt-4">
			<div className="flex justify-between rounded-[5px] p-2 bg-[#F3FFFE] w-[140px] box-shadow6  ">
				<div>
					<img
						src={capacityImg}
						alt=""
						className="mix-blend-multiply w-[50px]"
					/>
				</div>
				<div className="flex flex-col text-right">
					<span>Capacity</span>
					<span>5.00kWp</span>
				</div>
			</div>
			<div className="flex  justify-between rounded-[5px] p-2 bg-[#F3FFFE]  w-[140px] box-shadow6  ">
				<div>
					<img src={unitImg} alt="" className="mix-blend-multiply" />
				</div>
				<div className="flex flex-col text-right">
					<span>Units</span>
					<span>1/2</span>
				</div>
			</div>
			<div className="flex  justify-between rounded-[5px] p-2 bg-[#F3FFFE]  w-[140px] box-shadow6  ">
				<div>
					<img
						src={inverterImg}
						alt=""
						className="mix-blend-multiply"
					/>
				</div>
				<div className="flex flex-col text-right">
					<span>Inverter</span>
					<span>1/1</span>
				</div>
			</div>
			<div className="flex justify-between rounded-[5px] p-2 bg-[#F3FFFE]  w-[140px] box-shadow6  ">
				<div>
					<img src={meterImg} alt="" className="mix-blend-multiply" />
				</div>
				<div className="flex flex-col text-right">
					<span>Meter</span>
					<span>1/1</span>
				</div>
			</div>
			<div className="flex justify-between rounded-[5px] p-2 bg-[#F3FFFE]  w-[140px] box-shadow6  ">
				<div>
					<img src={co2Img} alt="" className="mix-blend-multiply" />
				</div>
				<div className="flex flex-col text-right">
					<span>CO2 saved</span>
					<span>26/58 Ton</span>
				</div>
			</div>
		</div>
	);
};

export default SiteConfig;
