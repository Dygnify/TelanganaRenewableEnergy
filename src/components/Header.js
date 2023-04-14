import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import headerLogo from "../images/logo.png";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isSignInOpen, setIsSignInOpen] = useState(false);
	const [user, setUser] = useState(false);
	useEffect(() => {
		setIsSignInOpen(location.pathname.includes("signIn"));
		if (!user) setUser(location.pathname.includes("profile"));
	}, [location, user]);


	return (
		<nav className="box-shadow5 sticky top-0 z-50 flex justify-between items-center py-0 px-6 text-[#fff] bg-[#ffffffff] header-nav">
			<div className="">
				<img
					className="md:w-40 h-11 w-28 md:h-16 cursor-pointer"
					src={headerLogo}
					alt="company logo"
					onClick={() => navigate("/home")}
				/>
			</div>
			<ul className="flex justify-center gap-1">
				<NavLink
					to="/home"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<li>Home</li>
				</NavLink>

				<NavLink
					to="/analytic"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<li>Analytics</li>
				</NavLink>
				<NavLink
					to="/projects"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<li>Projects</li>
				</NavLink>
			

				{!user ? (
					<span></span>
				) : (
					<NavLink
						to="/myDevices"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>My Devices</li>
					</NavLink>
				)}
				{!user ? (
					<NavLink
						to="/signIn"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>Sign In</li>
					</NavLink>
				) : (
					<NavLink
						to="/profile"
						className={({ isActive }) => (isActive ? "active" : "")}
					>
						<li>Profile</li>
					</NavLink>
				)}
			</ul>
		</nav>
	);
};

export default Header;
