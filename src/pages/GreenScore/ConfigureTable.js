import React, { useEffect, useState } from "react";
import RangeSlider from "../../components/RangeSlider/RangeSlider";

const ConfigureTable = ({ tableData, setTotalScore, setFinalScore, tab}) => {
	const [rangeValue, setRangeValue] = useState({});
	useEffect(()=>{
		let currentTotalScore = 0;
		const len = tableData.length;
		for(let i=0; i<len; i++){
			currentTotalScore += tableData[i].score;
		}
		
		setFinalScore((prevValues) => ({
			...prevValues,
			[tab]:currentTotalScore,
		}));
	},[]);

	const handleSliderChange = (id, newValue) => {
		let changedSlider =  tableData.find(o => o.id === id);
		let oldWeightage = changedSlider.weightage;
		const len = tableData.length;
		let currentTotalScore = 0;
		if(newValue === 100) --newValue;
		if(newValue === 0) ++newValue;
		for(let i=0; i<len; i++){
			if(tableData[i].id === id) { 
				tableData[i].weightage = newValue;
			} else {
				tableData[i].weightage = (tableData[i].weightage*(100 - newValue)/(100 - oldWeightage)).toFixed(2);  
			}
			tableData[i].score =
					(tableData[i].value * tableData[i].weightage) / 100;
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
													tab={tab}
													rangeValue={data.weightage}
													onChange={
														handleSliderChange
													}
												/>
											</div>
										</td>
										<td className="p-2 w-2/12">
											<div className="text-lg text-center">
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
