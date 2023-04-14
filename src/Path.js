import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Analytic from "./pages/Analytic/Analytic";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import SignIn from "./pages/Sign In/SignIn";
import MyDevices from "./pages/MyDevices/MyDevices";
import Projects from "./pages/Projects/Projects";

const Paths = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<Navigate to="home" />} />
					<Route path="home" element={<LandingPage />} />
					<Route path="search" element={<Search />} />
					<Route path="analytic" element={<Analytic />} />
					<Route path="projects" element={<Projects />} />
					<Route path="myDevices" element={<MyDevices />} />
					<Route path="profile" element={<Profile />} />
					<Route path="signIn" element={<SignIn />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};

export default Paths;
