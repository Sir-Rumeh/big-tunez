import "./App.css";
// components
import HeroImage from "./components/HeroImage";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import PlayList from "./components/PlayList";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App bg-white">
			<HeroImage />
			<Header />
			<NavBar />
			<PlayList />
			<WhatWeDo />
			<AboutUs />
			<Events />
			<Footer />

			{/* 
			<DmwArtists />
			<InTheNews />
			<RecentPosts />
			<Footer /> */}
		</div>
	);
}

export default App;
