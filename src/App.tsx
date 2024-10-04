import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import NavBar from "./components/sections/NavBar";
import Projects from "./components/sections/Projects";

const App = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<NavBar />
			<Hero />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
