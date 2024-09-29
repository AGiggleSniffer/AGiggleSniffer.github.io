import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import NavBar from "./components/sections/NavBar";

const App = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<NavBar />
			<Hero />
			<About />
		</div>
	);
};

export default App;
