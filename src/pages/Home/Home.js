import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

const Home = () => {
	return (
		<div className="  min-h-screen">
			<Header />
			<div className="px-8 pb-4 mt-4  text-slate-800">
				<Outlet />
			</div>
		</div>
	);
};

export default Home;
