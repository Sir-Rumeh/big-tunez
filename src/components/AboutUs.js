import React from "react";
import TonyBigTunez from "../images/Tony_Big_Tunez.svg";

export default function AboutUs() {
	return (
		<div>
			<section className="bg-black py-14 text-white md:mt-[-2px]">
				<div className="px-0 md:px-10 items-center mx-auto block lg:flex">
					<div className="logo-container p-0 md:p-20 md:w-1/2 justify-items-center">
						<img
							className="w-1/2 mx-auto logo-image"
							src={TonyBigTunez}
							alt=""
						/>
					</div>
					<div className="p-4 md:p-24 bg-[#111] about-container md:flex items-center text-center md:text-start">
						<div className="space-y-15">
							<h2 className="mb-8 text-4xl md:text-5xl font-extrabold">
								About BTE
							</h2>
							<p className="mb-10 font-light text-l text-[#999999]">
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Hic amet vero, saepe,
								recusandae quae iure a sunt, molestias
								consequatur neque aliquid ratione
								pariatur ab placeat! Lorem ipsum, dolor
								sit amet consectetur adipisicing elit.
								Hic amet vero, saepe, recusandae quae
								iure a sunt, molestias consequatur neque
								aliquid ratione pariatur ab placeat!
							</p>
							<button className="bg-blue-400 py-4 px-12 text-white rounded-md read-full-story">
								Read Full Story
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
