import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<nav className="py-4 text-[#fff] bg-[#ff9100ef] header-nav">
			<ul className="flex justify-center gap-1">
				<NavLink
					to="/home"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<li>Home</li>
				</NavLink>

				<NavLink
					to="/search"
					className={({ isActive }) => (isActive ? "active" : "")}
				>
					<li>Search</li>
				</NavLink>

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
