import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import headerLogo from '../images/logo.png';

const Header = () => {
	const navigate = useNavigate();
	return (
		<nav className="sticky top-0 z-50 flex justify-between items-center py-0 px-6 text-[#fff] bg-[#ffffffff] header-nav">
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

				{/* <NavLink
					to="/search"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<li>Search</li>
				</NavLink> */}

				<NavLink
					to="/analytic"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<li>Analytic</li>
				</NavLink>

				<NavLink
					to="/profile"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<li>Profile</li>
				</NavLink>
			</ul>
		</nav>
	);
};

export default Header;
