import React from "react";
import TonyBigTunez from "../images/Tony_Big_Tunez.svg";

export default function AboutUs() {
	const team = document.querySelector(".meet-the-team");
	function showTeam() {
		team.classList.toggle("show-team");
		console.log("added");
	}

	return (
		<div>
			<section className="bg-black py-14 text-white md:mt-[-2px]">
				{/* Meet the team div */}
				<div className="meet-the-team">
					<div>
						<div>team</div>
						<p>Aigbe Anthony: director CEO </p>
						<p>Chukwu Regina Ogechi : Manager</p>
						<p>Osigwe habibatu: creative consultant</p>
						<p>Ogwa clement iwinosa Audio engineer</p>
						<p>
							Raphael Abiemwense Human resources associates
						</p>
						<p>Egbon William Contract administrator</p>
						<p>Aaron solace inyang Stage management</p>
						<p>OGBEIDE .A. DOLLAR. MARKET RESEARCHER</p>
						<p>Eze Sophia. Marketing manager </p>
						<p>Egbon William Contract administrator</p>
						<p>Imafidon Jessica osaro: </p>
						<p>Zaib AIMANOSI Bello</p>
						<p>Oghenekaro Glory </p>
						<p>Ikenria Destiny aka Dex</p>
					</div>
					<button onClick={() => showTeam()}>X</button>
				</div>
				<div className="px-0 md:px-10 items-center mx-auto block lg:flex">
					<div className="logo-container p-0 md:p-20 md:w-1/2 justify-items-center">
						<img
							className="w-1/2 mx-auto logo-image"
							src={TonyBigTunez}
							alt=""
						/>
					</div>
					<div className="p-4 md:p-20 bg-[#111] about-container md:flex items-center text-center md:text-start">
						<div className="space-y-15">
							<h2 className="mb-8 text-4xl md:text-5xl font-extrabold">
								About BTE
							</h2>
							<p className="mb-10 font-light text-l text-[#999999]">
								Anthony Aigbe is a Scientist and
								Philanthropist who has a niche for
								entertainments and lifestyle. Aigbe
								being the mastermind behind BTE (Big
								Tunes Entertainment) was Founded by him
								and his group of friends. Anthony Aigbe
								is a Scientist and Philanthropist who
								has a niche for entertainments and
								lifestyle. Aigbe being the mastermind
								behind BTE (Big Tunes Entertainment) was
								Founded by him and his group of friends.
							</p>
							<button
								onClick={() => showTeam()}
								className="bg-blue-400 py-4 px-12 text-white rounded-md read-full-story"
							>
								Meet The Team.
							</button>
							<h3 className="mt-6">
								Founded may 19 2022.
							</h3>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
