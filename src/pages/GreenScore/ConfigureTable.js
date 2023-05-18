import React, { useState } from "react";
import RangeSlider from "../../components/RangeSlider/RangeSlider";

const ConfigureTable = ({ tableData }) => {
	const [rangeValue, setRangeValue] = useState(0);
	return (
		<section class="bg-gray-100 text-gray-600  p-4">
			<div class="w-full  mx-auto bg-white shadow-lg rounded-md border border-gray-200">
				<div class="p-3">
					<div class="overflow-x-auto">
						<table class="table-auto w-full">
							<thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
								<tr>
									<th class="p-2 w-4/12">
										<div class="font-semibold text-left">
											Parameter
										</div>
									</th>
									<th class="p-2 w-2/12">
										<div class="font-semibold text-left">
											Value
										</div>
									</th>
									<th class="p-2 w-4/12">
										<div class="font-semibold center">
											Weightage
										</div>
									</th>
									<th class="p-2 w-4/12">
										<div class="font-semibold text-center">
											Score
										</div>
									</th>
								</tr>
							</thead>
							<tbody class=" divide-y divide-gray-200 font-medium">
								{tableData.map((data, i) => (
									<tr key={i}>
										<td class="p-2 w-4/12">
											<div class=" text-gray-800">
												{data.parameter}
											</div>
										</td>
										<td class="p-2 w-2/12">
											<div class="text-left">
												{data.value}
											</div>
										</td>
										<td class="p-2 w-4/12">
											<div class="">
												<RangeSlider
													rangeValue={data.weightage}
													setRangeValue={setRangeValue}
													id={data.id}
												/>
											</div>
										</td>
										<td class="p-2 w-2/12">
											<div class="text-lg text-center">
												{(rangeValue*data.value)/100}
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
