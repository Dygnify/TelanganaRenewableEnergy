import React from "react";

const Device = ({ dummyTable }) => {
	return (
		<div className="mt-12">
			<div className="px-1 py-1 gap-4 md:gap-0 md:justify-around flex font-bold border-y border-slate-200 text-center">
				<p className="w-1/3 md:w-3/12 my-auto ">Time/Date</p>
				<p className=" md:block w-1/3 md:w-3/12 my-auto ">Unit Name</p>
				<p className=" md:block w-1/3 md:w-2/12 my-auto ">
					Energy Produced (Today)
				</p>
				<p className="w-1/3 md:w-2/12 my-auto ">
					Energy Produced (Total)
				</p>
				<p className=" md:block w-1/3 md:w-2/12 my-auto ">Status</p>
			</div>
			<div className="p-1 pt-0 pb-4 rounded-xl my-5 flex flex-col gap-4 max-h-[250px] overflow-auto border border-[#d3e1f5a9]">
				{dummyTable.map((data, i) => (
					<div
						key={i}
						className="my-table-row px-1 box-shadow5 border border-[#e9e5fd] hover:border-[#e1dcfa] flex justify-around rounded-full py-3 gap-4 md:gap-0 text-center"
					>
						<p className="w-1/3 md:w-3/12 my-auto ">{data.time}</p>
						<p className=" md:block w-1/3 md:w-3/12 my-auto ">
							{data.unitName}
						</p>
						<p className=" md:block w-1/3 md:w-2/12 my-auto ">
							{data.energyProduced}
						</p>
						<p className="w-1/3 md:w-2/12 my-auto ">
							{data.totalEnergy}
						</p>
						<div className="w-1/3 md:w-2/12 my-auto text-center">
							<p
								className={`w-[100px] border ${
									data.status === "Inactive"
										? "bg-[#f7995194]  border-[#f78e3e]"
										: "bg-[#4cf584a4] border-[#03b43e]"
								} px-5 rounded-full box-shadow3 mx-auto text-center`}
							>
								{data.status}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Device;
