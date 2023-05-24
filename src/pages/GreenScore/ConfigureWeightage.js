import React, { useEffect, useState } from "react";
import RangeSlider from "../../components/RangeSlider/RangeSlider";

const ConfigureWeightage = ({
	tab,
	tableData,
	setFinalScore,
	setFinalWeightage,
}) => {
	const [rangeValue, setRangeValue] = useState({});
	useEffect(() => {
		const len = tableData.length;
		for (let i = 0; i < len; i++) {
      setFinalWeightage((prev) => ({
        ...prev,
        ['category'+tableData[i].id] : tableData[i].weightage
      }))
		}
	}, [tableData, setFinalWeightage, rangeValue]);

	const handleSliderChange = (id, newValue) => {
		let changedSlider = tableData.find((o) => o.id === id);
		let oldWeightage = changedSlider.weightage;
		const len = tableData.length;

		if (newValue === 100) --newValue;
		if (newValue === 0) ++newValue;
		for (let i = 0; i < len; i++) {
			if (tableData[i].id === id) {
				tableData[i].weightage = newValue;
			} else {
				tableData[i].weightage = (
					(tableData[i].weightage * (100 - newValue)) /
					(100 - oldWeightage)
				).toFixed(2);
			}
			tableData[i].score =
				(tableData[i].value * tableData[i].weightage) / 100;
		}
		setRangeValue((prevValues) => ({
			...prevValues,
			[id]: newValue,
		}));
	};
	return (
		<div className="w-full  mx-auto bg-white shadow-lg rounded-md">
			<div className="p-3">
				<div className="overflow-x-auto">
					<table className="table-auto w-full">
						<thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
							<tr>
								<th className="p-2 w-4/12">
									<div className="font-semibold text-left">
										Category
									</div>
								</th>
								<th className="p-2 w-4/12">
									<div className="font-semibold center">
										Weightage
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
									<td className="p-2 w-4/12">
										<div className="">
											<RangeSlider
												id={data.id}
												tab={tab}
												rangeValue={data.weightage}
												onChange={handleSliderChange}
											/>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ConfigureWeightage;
