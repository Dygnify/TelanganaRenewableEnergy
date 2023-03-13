import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';

const Home = () => {
    return (
		<div className="bg-slate-100  min-h-screen">
			<Header />
			<div className="px-8 py-2 text-slate-800">
				<Outlet />
			</div>
		</div>
	);
};

export default Home;