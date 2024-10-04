import { FaRegEnvelope, FaCopy, FaCheck, FaGithub } from "react-icons/fa6";
import { SiThreedotjs, SiFlask } from "react-icons/si";
import ContactButton from "../ContactButton";
import CloudyGlobe from "../CloudyGlobe";
import { useState } from "react";

const About = () => {
	const [hasCopied, setHasCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("cwilliford200@gmail.com");
		setHasCopied(true);

		setTimeout(() => {
			setHasCopied(false);
		}, 2000);
	};

	return (
		<section className="c-space my-20">
			<div className="bg-transparent h-20" id="about" />
			<div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container justify-end bg-[url('/me.jpg')] bg-cover bg-center ">
						<div className="pr-40">
							<p className="grid-headtext drop-shadow-[0_1.2px_1.2px_rgba(0,0,0)]">
								Hi, I'm Chris
							</p>
							<p className="text-base font-generalsans text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0)]">
								I developed a passion for technology early on,
								starting in middle school with a tech class that
								introduced me to software engineering concepts
								through kid-friendly scripting languages.
							</p>
						</div>
					</div>
				</div>

				<div className="col-span-1 xl:row-span-3">
					<div className="grid-container">
						<div>
							<p className="grid-headtext">More About Me</p>
							<p className="grid-subtext">
								During the COVID-19 pandemic, I reignited my
								interest in technology, experimenting with
								projects like creating a VPN on a Raspberry Pi.
								This experience, coupled with a growing love for
								PC gaming, led me to pursue a career in IT.
								<br />
								<br />
								In my IT role, I automated repetitive tasks
								using batch scripting, Windows CMD, and
								Powershell, eventually learning C# to enhance
								these solutions. Now, I'm eager to continue
								solving problems through software development,
								as I find it a highly rewarding endeavor.
							</p>
						</div>
					</div>
				</div>

				<div className="col-span-1 xl:row-span-4">
					<div className="grid-container">
						<div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
							<CloudyGlobe />
						</div>

						<div>
							<p className="grid-headtext">
								I work remotely across most timezones.
							</p>
							<p className="grid-subtext">
								I'm based in USA, California. Working with teams
								from various areas around the globe at all
								different times.
							</p>
						</div>
						<a href="#contact">
							<ContactButton
								name="Contact Me"
								isBeam
								containerClass="w-full mt-10"
							/>
						</a>
					</div>
				</div>

				<div className="xl:col-span-2 xl:row-span-3">
					<div className="grid-container">
						<div>
							<p className="grid-headtext">Tech Stack</p>
							<p className="grid-subtext">
								I specialize in JavaScript/TypeScript with a
								focus on React.
							</p>
						</div>

						<p className="grid-subtext">Languages:</p>
						<div className="flex flex-wrap *:h-[50px] *:w-[50px] gap-5">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg" />
						</div>

						<p className="grid-subtext">Technologies:</p>
						<div className="flex flex-wrap *:h-[50px] *:w-[50px] gap-5">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

							<SiThreedotjs className="text-white" />

							<SiFlask className="text-white" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />
						</div>

						<p className="grid-subtext">Database:</p>
						<div className="flex flex-wrap *:h-[50px] *:w-[50px] gap-5">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" />
						</div>

						<p className="grid-subtext">Deployment:</p>
						<div className="flex flex-wrap *:h-[50px] *:w-[50px] gap-5">
							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" />

							<FaGithub className="text-white" />

							<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" />
						</div>
					</div>
				</div>

				<div className="xl:col-span-1 xl:row-span-2">
					<div className="grid-container">
						<FaRegEnvelope className="grid-subtext w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />

						<div className="space-y-2">
							<p className="grid-subtext text-center">
								Contact Me
							</p>
							<div
								className="copy-container"
								onClick={handleCopy}
							>
								{hasCopied ? (
									<FaCheck className="text-green-500" />
								) : (
									<FaCopy className="text-white" />
								)}
								<p className="lg:text-2xl text-xl font-medium text-gray_gradient text-white">
									cwilliford200@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
