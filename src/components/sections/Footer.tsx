import { FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
			<div className="text-white-500 flex gap-2">
				<p>Terms & conditions</p>
				<p>|</p>
				<p>Privacy Policy</p>
			</div>

			<div className="flex gap-3">
				<div className="social-icon">
					<a
						href="https://github.com/agigglesniffer"
						className="cursor-pointer h-1/2 w-1/2"
					>
						<FaGithub className="h-full w-full text-white"></FaGithub>
					</a>
				</div>
				<div className="social-icon">
					<a
						href="https://www.linkedin.com/in/chris-williford-533442312/"
						className="cursor-pointer h-1/2 w-1/2"
					>
						<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
					</a>
				</div>
			</div>

			<p className="text-white-500">© 2024 Chris. All rights reserved.</p>
		</section>
	);
};

export default Footer;
