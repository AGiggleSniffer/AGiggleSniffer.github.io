import { Suspense, useState } from "react";
import { myProjects } from "../../constants";
import {
	FaArrowUpRightFromSquare,
	FaArrowLeft,
	FaArrowRight,
} from "react-icons/fa6";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";
import DemoComputer from "../DemoComputer";

type Direction = "previous" | "next";

const PROJECT_COUNT = myProjects.length;

const Projects = () => {
	const [selectedProjIdx, setSelectedProjIdx] = useState(0);
	const currentProject = myProjects[selectedProjIdx];

	const handleNavigation = (direction: Direction) => {
		setSelectedProjIdx((prevIndex) => {
			if (direction === "previous") {
				return prevIndex === 0 ? PROJECT_COUNT - 1 : prevIndex - 1;
			} else {
				return prevIndex === PROJECT_COUNT - 1 ? 0 : prevIndex + 1;
			}
		});
	};

	return (
		<section className="c-space my-20">
			<p className="head-text">My Work</p>

			<div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
				<div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
					<div className="absolute top-0 right-0">
						<img
							src={`${currentProject.spotlight}`}
							className="w-full h-96 object-cover rounded-xl select-none z-0"
						/>
					</div>

					<div
						className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
						style={currentProject.logoStyle}
					>
						<img
							src={currentProject.logo}
							alt="logo"
							className="w-10 h-10 shadow-sm"
						/>
					</div>

					<div className="flex flex-col gap-5 text-white-600 my-5 z-10">
						<p className="text-white text-2xl font-semibold animatedText">
							{currentProject.title}
						</p>
						<p className="animatedText">{currentProject.desc}</p>
						<p className="animatedText">{currentProject.subdesc}</p>
					</div>

					<div className="flex items-center justify-between flex-wrap gap-5">
						<div className="flex items-center gap-3">
							{currentProject.tags.map((tag, index) => (
								<div key={index} className="tech-logo">
									<img src={tag.path} alt={tag.name} />
								</div>
							))}
						</div>

						{currentProject.href ? (
							<a
								className="flex items-center gap-2 cursor-pointer text-white-600"
								target="_blank"
								rel="noreferrer"
								href={currentProject.href}
							>
								<p>Check Live Site</p>
								<FaArrowUpRightFromSquare
									className={`w-3 h-3 text-white`}
								/>
							</a>
						) : (
							<a className="flex items-center gap-2 cursor-pointer text-white-600">
								<p>(Work In Progress)</p>
								<FaArrowUpRightFromSquare
									className={`w-3 h-3 text-white`}
								/>
							</a>
						)}
					</div>

					<div className="flex justify-between items-center mt-7">
						<button
							className="arrow-btn"
							onClick={() => handleNavigation("previous")}
						>
							<FaArrowLeft className={`w-4 h-4 text-white`} />
						</button>
						<button
							className="arrow-btn"
							onClick={() => handleNavigation("next")}
						>
							<FaArrowRight className={`w-4 h-4 text-white`} />
						</button>
					</div>
				</div>

				<div className="border border-black-300 bg-black-200 rounded-lg h-96 md:full">
					<Canvas>
						<ambientLight intensity={3} />
						<directionalLight position={[10, 10, 5]} />
						<Center>
							<Suspense fallback={<CanvasLoader />}>
								<group
									scale={2}
									position={[0, -3, 0]}
									rotation={[0, -0.1, 0]}
								>
									<DemoComputer
										texture={currentProject.texture}
									/>
								</group>
							</Suspense>
						</Center>
						<OrbitControls
							maxPolarAngle={Math.PI / 2}
							enableZoom={false}
						/>
					</Canvas>
				</div>
			</div>
		</section>
	);
};

export default Projects;
