import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../CanvasLoader";
import SpaceCamp from "../SpaceCamp";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../constants";
import HeroCamera from "../HeroCamera";
import ContactButton from "../ContactButton";

const Hero = () => {
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="min-h-screen w-full flex flex-col">
			<div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10">
				<p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
					Hi! I'm Chris{" "}
					<span className="waving-hand text-3xl">👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">
					A software engineer who likes to make immersive environments
					and enjoys seeing people excited by software
				</p>
			</div>

			<div className="w-full h-full absolute inset-0">
				<Canvas className="w-full h-full z-0">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 1]} />

						<HeroCamera isMobile={isMobile}>
							<SpaceCamp
								scale={sizes.campScale}
								position={[0, 0, 0]}
								rotation={[13, 0, 0]}
							/>
						</HeroCamera>

						<ambientLight intensity={0.9} />

						<directionalLight
							position={[0, 10, 0]}
							intensity={0.5}
						/>
					</Suspense>
				</Canvas>
			</div>

			<div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
				<a href="#contact" className="w-fit">
					<ContactButton
						name="Let's work together"
						isBeam
						containerClass="sm:w-fit w-full sm:min-w-96"
					/>
				</a>
			</div>
		</section>
	);
};

export default Hero;
