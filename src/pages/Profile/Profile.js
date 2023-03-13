import React from "react";
import DashboardCard from "../../components/cards/DashboardCard";
import DashboardChart1 from "../../components/charts/DashboardCharts/DashboardChart1";
import profileImg from "../../images/profile-img.jpg";
import galleryImg1 from "../../images/HEAT-WAVE.jpg";
import galleryImg2 from "../../images/temp1.jpeg";
import DashboardChart2 from "../../components/charts/DashboardCharts/DashboardChart2";
import './Profile.css';

const Profile = () => {
	return (
		<div className="text-slate-500 gap-4 flex box-border profile">
			<section className="profile-left-section w-2/12 min-h-[500px] rounded-md  bg-[#aed9f575] border border-sky-200">
				<div className="flex flex-col items-center mt-2">
					<div className="w-16 h-16 border border-sky-300 rounded-full p-[2px]">
						<img
							src={profileImg}
							className="w-full h-full rounded-full"
							alt=""
						/>
					</div>
					<p className="text-xs font-semibold text-slate-500 drop-shadow-lg">
						Mohammad Rakib
					</p>
				</div>
				<div className="mt-8">
					<p className="text-center font-semibold text-slate-500 drop-shadow-lg">
						Summary
					</p>
					<div className="text-[12px]  bg-gradient-to-b from-[#bde0f8cc] to-[#e6f3faf6]  px-2 py-4 rounded-sm">
						<p className="flex justify-between">
							<span>District:</span> <span>Nalgonda</span>
						</p>
						<p className="flex justify-between">
							<span>Temp:</span>{" "}
							<span>
								30<sup>0</sup>
								degree
							</span>
						</p>
						<p className="flex justify-between">
							<span>Email:</span> <span>abc@gmail.com</span>
						</p>
						<p className="flex justify-between">
							<span>Phone:</span> <span>+880 1771909209</span>
						</p>
					</div>
				</div>
				<div className="mt-8 p-2">
					<p className="border-b-[1px] border-sky-200 font-semibold text-slate-500 drop-shadow-lg">
						Dummy Info:
					</p>
					<p className="text-[12px] text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Tenetur, nostrum aperiam harum, accusantium porro eius
						ipsam commodi consectetur voluptatem nulla earum
						corporis fugit voluptatum architecto, voluptatibus rem
						voluptate!, eum dolores maiores deserunt tenetur et est
						aliquam rem. Quia id molestiae animi maiores?
					</p>
				</div>
			</section>
			<section className="profile-mid-section dashboard w-8/12 min-h-[500px] rounded-md bg-[#d2e8f750]  border border-sky-200 p-2">
				<h2 className=" text-[1.4375rem] lg:text-[2rem] font-semibold text-slate-500  drop-shadow-lg">
					Dashboard
				</h2>
				<div className="-mt-1 divider"></div>
				<div className="mt-8 grid grid-cols-2 gap-4 ">
					<DashboardChart1 />
					<DashboardChart2 />
				</div>
				<div className="mt-8 grid grid-cols-1 gap-8">
					<DashboardCard info={{ title: "Card 1" }} />
					<DashboardCard info={{ title: "Card 2" }} />
				</div>
			</section>
			<section className="profile-right-section w-2/12 min-h-[500px] rounded-md shadow-sm bg-[#aed9f575] border border-sky-200 p-2">
				<h2 className=" text-sm border-b-2 border-sky-200 font-semibold text-slate-500 drop-shadow-lg">
					Latest News
				</h2>
				<div className="">
					<div className="bg-gradient-to-b from-[#bde0f8da] to-[#eaf2f7f6] border border-[#cbeaff59]    p-2 pt-1 cursor-pointer mt-4">
						<p className="text-[12px] mt-1 text-justify">
							Temperatures expected to rise in Hyderabad this week
						</p>
						<img
							src={galleryImg1}
							alt=""
							className="w-full border border-sky-200"
						/>
					</div>
					<div className="bg-gradient-to-b from-[#bde0f8da] to-[#eaf2f7f6] border border-[#cbeaff59]    p-2 pt-1 cursor-pointer mt-4">
						<p className="text-[12px] mt-1 text-justify">
							Temperatures expected to rise in Hyderabad this week
						</p>
						<img
							src={galleryImg2}
							alt=""
							className="w-full border border-sky-200"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Profile;
