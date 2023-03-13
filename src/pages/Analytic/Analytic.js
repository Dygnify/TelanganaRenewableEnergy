import React from 'react';
import BarChart from '../../components/charts/BarChart';
import LineChart from '../../components/charts/LineChart';
import MapChart from '../../components/charts/MapChart';
import PieChart from '../../components/charts/PieChart';

const Analytic = () => {
    return (
		<div className="text-slate-200">
            <div className='grid grid-cols-2 gap-8'>
                <section className='min-h-[300px] flex justify-center items-center bg-gradient-to-r from-sky-100 to-sky-100 rounded-md p-2 box-shadow'><PieChart/></section>
                <section className='min-h-[300px] flex justify-center items-center bg-gradient-to-r from-sky-100 to-sky-100 rounded-md box-shadow p-2'><BarChart/></section>
                <section className='min-h-[300px] flex justify-center items-center bg-gradient-to-r from-sky-100 to-sky-100 rounded-md box-shadow p-2'><MapChart/></section>
                <section className='min-h-[300px] flex justify-center items-center bg-gradient-to-r from-sky-100 to-sky-100 rounded-md box-shadow p-2'><LineChart/></section>
            </div>
		</div>
	);
};

export default Analytic;