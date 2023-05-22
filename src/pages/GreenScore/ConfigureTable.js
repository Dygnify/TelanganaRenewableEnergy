import React, { useState } from "react";
import RangeSlider from "../../components/RangeSlider/RangeSlider";

const ConfigureTable = ({ tableData, setTotalScore, setFinalScore, tab, weitage}) => {
	const [rangeValue, setRangeValue] = useState({});
	const handleSliderChange = (id, newValue) => {

		
		const len = tableData.length;
		let currentTotalScore = 0;
		for(let i=0; i<len; i++){
			if(tableData[i].id === id){
				tableData[i].weightage = newValue;
				tableData[i].score =
					(tableData[i].value * tableData[i].weightage * weitage) / 100;
			}
			currentTotalScore+=tableData[i].score;
		}
		setTotalScore(currentTotalScore);
		setFinalScore((prevValues) => ({
			...prevValues,
			[tab]:currentTotalScore,
		}));
		setRangeValue((prevValues) => ({
			...prevValues,
			[id]: newValue,
		}));
	};
	return (
		<section className="bg-gray-100 text-gray-600  p-4">
			<div className="w-full  mx-auto bg-white shadow-lg rounded-md border border-gray-200">
				<div className="p-3">
					<div className="overflow-x-auto">
						<table className="table-auto w-full">
							<thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
								<tr>
									<th className="p-2 w-4/12">
										<div className="font-semibold text-left">
											Parameter
										</div>
									</th>
									<th className="p-2 w-2/12">
										<div className="font-semibold text-left">
											Value
										</div>
									</th>
									<th className="p-2 w-4/12">
										<div className="font-semibold center">
											Weightage
										</div>
									</th>
									<th className="p-2 w-4/12">
										<div className="font-semibold text-center">
											Score
										</div>
									</th>
								</tr>
							</thead>
							<tbody className=" divide-y divide-gray-200 font-medium">
								{tableData.map((data, i) => (
									<tr key={i}>
										<td className="p-2 w-4/12">
											<div className=" text-gray-800">
												{data.parameter}
											</div>
										</td>
										<td className="p-2 w-2/12">
											<div className="text-left">
												{data.value}
											</div>
										</td>
										<td className="p-2 w-4/12">
											<div className="">
												<RangeSlider
													id={data.id}
													rangeValue={data.weightage}
													onChange={
														handleSliderChange
													}
												/>
											</div>
										</td>
										<td className="p-2 w-2/12">
											<div className="text-lg text-center">
												{/* {(rangeValue[data.id] *
													data.value) /
												100
													? (rangeValue[data.id] *
															data.value) /
													  100
													: 0} */}
													{(data.score).toFixed(2)}
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ConfigureTable;
