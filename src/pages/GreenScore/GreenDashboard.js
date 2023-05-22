import React from "react";
import { NavLink } from "react-router-dom";
import "../../components/Header.css";

const GreenDashboard = () => {

	return (
		<nav className="box-shadow5 flex items-center py-2 px-6 text-[#fff] bg-[#ffffffff] subHeader-nav">
			<ul className="flex justify-center gap-1">
				<NavLink
					to="/greenScore/tab1"
					className={({ isActive }) =>
						isActive ? "active" : "inactive"
					}
				>
					<li>SDG Goals</li>
				</NavLink>

				<NavLink
					to="/greenScore/tab2"
					className={({ isActive }) =>
						isActive ? "active" : "inactive"
					}
				>
					<li>Governance</li>
				</NavLink>
				<NavLink
					to="/greenScore/tab3"
					className={({ isActive }) =>
						isActive ? "active" : "inactive"
					}
				>
					<li>Climate Risk</li>
				</NavLink>
				<NavLink
					to="/greenScore/tab4"
					className={({ isActive }) =>
						isActive ? "active" : "inactive"
					}
				>
					<li>Policy Risk</li>
				</NavLink>
				<NavLink
					to="/greenScore/tab5"
					className={({ isActive }) =>
						isActive ? "active" : "inactive"
					}
				>
					<li>Credit Risk</li>
				</NavLink>
			</ul>
		</nav>
	);
};

export default GreenDashboard;
