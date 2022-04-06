import React from "react";

export default function HeroImage() {
	const style = {
		backgroundImage:
			"url('https://davidomusicworldwide.com/wp-content/uploads/2020/11/cropped-Untitled-design3.png')",
	};
	return (
		<div>
			<div
				className="w-full h-screen bg-local bg-center bg-no-repeat bg-cover relative text-white hero-image"
				style={style}
			>
				<div className="hero-content ">
					<div className="hero-inner">
						<h3 className="text-white hero-text">
							OUT ON ALL PLATFORMS
						</h3>
						<div className="mt-10">
							<button className="bg-blue-400 p-2 w-40 py-4 rounded-md">
								LISTEN
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
