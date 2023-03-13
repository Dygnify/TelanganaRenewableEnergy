import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Analytic from "./pages/Analytic/Analytic";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";

const Paths = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<Navigate to="home" />} />
					<Route path="home" element={<LandingPage />} />
					<Route path="search" element={<Search />} />
					<Route path="analytic" element={<Analytic />} />
					<Route path="profile" element={<Profile />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default Paths;
