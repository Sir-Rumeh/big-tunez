import React from "react";
import PlayerApp from "../PlayerApp";

export default function PlayList() {
	return (
		<div>
			<section className="bg-black playlist playList2" id="playList">
				<div className="px-10 pt-10 mx-auto flex py-14 w-full playlist-container">
					<div className="image">
						<img
							src="https://cdn.vanguardngr.com/wp-content/uploads/2020/11/Davido-new-e1605112727890.jpg"
							className="w-full"
							alt=""
						/>
					</div>
					<div className="p-12 text-left text-white playList-container2">
						<div className="text-left pb-10 text-6xl playlist-heading">
							<h1 className="font-bold">
								BTE - Latest Playlist
							</h1>
						</div>
						<div className="pb-10 playlist-desc">
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Ea porro repudiandae
							</p>
						</div>
						<div className="mb-6 align-middle playlist">
							<PlayerApp />
						</div>

						{/* first playlist */}
						<div className="borderBottom flex items-center justify-between pb-5 mb-3">
							<div>
								<div>
									<h4 className="text-2xl">
										1."Lorem ipsum, dolor sit
										amet"
									</h4>
								</div>
								<div className="playListDesc">
									<p>
										-Lorem ipsum, dolor sit amet
										consectetur adipisicing elit.
										Repudiandae, eum!
									</p>
								</div>
							</div>
							<div className="text-white-400 font-bold">
								<h5>2:34</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
