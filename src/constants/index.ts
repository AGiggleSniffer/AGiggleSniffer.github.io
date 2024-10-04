export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#home",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
	},
	{
		id: 3,
		name: "Work",
		href: "#work",
	},
	{
		id: 4,
		name: "Contact",
		href: "#contact",
	},
];

export const myProjects = [
	{
		title: "Security Installer - Windows Support Tool",
		desc: "A utility application for Windows, designed to install essential support tools and gather hardware information. This tool simplifies the maintenance process for users.",
		subdesc:
			"Built in C# with optimized task execution and a visually appealing XAML-based UI. Features a progress bar for real-time download tracking and a file writer for API-based direct downloads.",
		href: "https://github.com/AGiggleSniffer/SecurityInstaller",
		texture: "/textures/astro.mp4",
		logo: "/assets/astro.png",
		logoStyle: {
			backgroundColor: "#60a8f5",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/spotlight2.png",
		tags: [
			{
				id: 1,
				name: ".NET",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
			},
			{
				id: 2,
				name: "C Sharp",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
			},
			{
				id: 3,
				name: "XML",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg",
			},
			{
				id: 4,
				name: "NuGet",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuget/nuget-original.svg",
			},
		],
	},
	{
		title: "Canvas Collective - Fun Art Website",
		desc: "Canvas Collective is a creative website that allows users to design and display simple yet engaging art. The platform offers dynamic visual effects, enhancing user interaction and creativity.",
		subdesc:
			"Utilizing SVG and Perlin noise, this project maps custom noise over elements in React, while abstracting canvas functionality into a custom React hook. Secure user authentication is implemented using BCrypt for robust password management.",
		href: "canvas-collective.onrender.com/",
		texture: "/textures/canvas.mp4",
		logo: "/assets/canvas.png",
		logoStyle: {
			backgroundColor: "#f56070",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			},
			{
				id: 2,
				name: "JavaScript",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
			},
			{
				id: 3,
				name: "Redux",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
			},
			{
				id: 4,
				name: "ExpressJS",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
			},
		],
	},
	{
		title: "Zombie Survival - 3D Co-op Game",
		desc: "A multiplayer 3D survival game where players can team up in a co-op environment to fend off zombies. The game offers interactive physics and immersive environments. ",
		subdesc:
			"Developed using ThreeJS and React for the 3D environment, RapierJS for physics, and Socket.io for real-time communication. The server authoritative logic ensures secure and fair gameplay.",
		href: null,
		texture: "/textures/zombs.mp4",
		logo: "/assets/zomb.png",
		logoStyle: {
			backgroundColor: "#b060f5",
			border: "0.2px solid #252262",
			boxShadow: "0px 0px 60px 0px #635BFF4D",
		},
		spotlight: "/assets/spotlight5.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			},
			{
				id: 2,
				name: "JavaScript",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
			},
			{
				id: 3,
				name: "ThreeJS",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
			},
			{
				id: 4,
				name: "RapierRS",
				path: "/assets/rapier.png",
			},
		],
	},
	{
		title: "Book and Stay - Airbnb Clone",
		desc: "A full-stack Airbnb clone that manages vacation rentals, showcasing comprehensive functionality for listing properties, booking stays, and displaying interactive content.",
		subdesc:
			"Developed with ExpressJS, Sequelize, and Redux for data persistence and state management. Integrated the Pexels API for dynamic photo seeding and enhanced UX with a custom cursor hook.",
		href: "https://airbnb-json-api.onrender.com/",
		texture: "/textures/bands.mp4",
		logo: "/assets/bands.png",

		logoStyle: {
			backgroundColor: "#60e0f5",
			border: "0.2px solid #0E2D58",
			boxShadow: "0px 0px 60px 0px #2F67B64D",
		},
		spotlight: "/assets/spotlight4.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			},
			{
				id: 2,
				name: "JavaScript",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
			},
			{
				id: 3,
				name: "Redux",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
			},
			{
				id: 4,
				name: "NodeJS",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
			},
		],
	},
	{
		title: "Uber Eats Clone - Team Project",
		desc: "A collaborative project recreating the core functionality of Uber Eats, streamlining food ordering and delivery. The app focuses on delivering a seamless user experience similar to the popular food delivery platform.",
		subdesc:
			"Leveraged Docker for streamlined deployment, using Flask and Python to build a robust API with SQLAlchemy. The project emphasized team collaboration, error handling, and server stability.",
		href: "https://ue-project.onrender.com/",
		texture: "/textures/ue.mp4",
		logo: "/assets/ue.png",
		logoStyle: {
			backgroundColor: "#60f5a1",
			background:
				"linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
			border: "0.2px solid rgba(208, 213, 221, 1)",
			boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
		},
		spotlight: "/assets/spotlight3.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			},
			{
				id: 2,
				name: "JavaScript",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
			},
			{
				id: 3,
				name: "Python",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
			},
			{
				id: 4,
				name: "Flask",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
			},
			{
				id: 5,
				name: "Docker",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
			},
		],
	},
	{
		title: "Portfolio Website - Personal Development Showcase",
		desc: "A dynamic and visually engaging portfolio website showcasing projects and skills. Built with modern web technologies, it highlights my expertise in full-stack development and design.",
		subdesc:
			"Developed using React, TypeScript, and Tailwind CSS for a responsive and user-friendly interface, with 3D visual elements created using Three.js. The site is deployed seamlessly through GitHub Actions and GitHub Pages, ensuring efficient updates and maintenance.",
		href: "/",
		texture: "/textures/transition.mp4",
		logo: "/assets/doge.jpg",
		logoStyle: {
			backgroundColor: "#f56070",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
			},
			{
				id: 2,
				name: "TypeScript",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
			},
			{
				id: 3,
				name: "Tailwind",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
			},
			{
				id: 4,
				name: "Github Actions",
				path: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
			},
		],
	},
];

export const calculateSizes = (
	isSmall: boolean,
	isMobile: boolean,
	isTablet: boolean,
) => {
	return {
		campScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		cubePosition: isSmall
			? [4, -5, 0]
			: isMobile
			? [5, -5, 0]
			: isTablet
			? [5, -5, 0]
			: [9, -5.5, 0],
		reactLogoPosition: isSmall
			? [3, 4, 0]
			: isMobile
			? [5, 4, 0]
			: isTablet
			? [5, 4, 0]
			: [12, 3, 0],
		ringPosition: isSmall
			? [-5, 7, 0]
			: isMobile
			? [-10, 10, 0]
			: isTablet
			? [-12, 10, 0]
			: [-24, 10, 0],
		targetPosition: isSmall
			? [-5, -10, -10]
			: isMobile
			? [-9, -10, -10]
			: isTablet
			? [-11, -7, -10]
			: [-13, -13, -10],
	};
};

export const workExperiences = [
	{
		id: 1,
		name: "Framer",
		pos: "Lead Web Developer",
		duration: "2022 - Present",
		title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
		icon: "/assets/framer.svg",
		animation: "victory",
	},
	{
		id: 2,
		name: "Figma",
		pos: "Web Developer",
		duration: "2020 - 2022",
		title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
		icon: "/assets/figma.svg",
		animation: "clapping",
	},
	{
		id: 3,
		name: "Notion",
		pos: "Junior Web Developer",
		duration: "2019 - 2020",
		title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
		icon: "/assets/notion.svg",
		animation: "salute",
	},
];
