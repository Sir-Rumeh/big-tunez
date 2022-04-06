import React from "react";

export default function Events() {
	return (
		<div>
			<section className="bg-black text-white pt-10 pb-20 border-b mt-[-13rem] md:mt-auto">
				<div className="px-10 mx-auto text-center items-center">
					<h1 className="mb-12 text-5xl font-extrabold">
						Events
					</h1>
					<div className="mx-auto mb-8">
						<img
							className="rounded-full mx-auto w-40 h-40"
							src="https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876__340.jpg"
							alt=""
						/>
					</div>
					<div>
						<h1 className="mb-8 text-7xl">
							<i>"</i>
						</h1>
						<div className="events-description">
							<p className="text-[#999999]">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Non perferendis hic
								velit nulla molestias. Aliquid adipisci
								explicabo facere fugiat recusandae
								reprehenderit eveniet a rem voluptatum?
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
