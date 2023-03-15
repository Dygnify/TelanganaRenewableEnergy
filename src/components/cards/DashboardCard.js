import React from 'react';

const DashboardCard = ({info}) => {
    return (
		<div className="box-shadow border border-[#cbeaff59] min-h-[200px] w-4/5 mx-auto flex justify-center items-center rounded-md gradient-bottom">
			<p className="font-semibold text-slate-500 drop-shadow-lg">
				{info.title}
			</p>
		</div>
	);
};

export default DashboardCard;