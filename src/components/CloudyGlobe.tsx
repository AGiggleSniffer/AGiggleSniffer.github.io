import { useEffect, useRef } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { Mesh, TextureLoader, SphereGeometry, MeshPhongMaterial } from "three";

const CloudyGlobe = () => {
	const globeEl = useRef<GlobeMethods>(null!);

	useEffect(() => {
		const globe = globeEl.current;

		// Auto-rotate
		globe.controls().autoRotate = true;
		globe.controls().autoRotateSpeed = 0.35;

		// Add clouds sphere
		const CLOUDS_IMG_URL = "./clouds.png"; // from https://github.com/turban/webgl-earth
		const CLOUDS_ALT = 0.004;
		const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

		new TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
			const clouds = new Mesh(
				new SphereGeometry(
					globe.getGlobeRadius() * (1 + CLOUDS_ALT),
					75,
					75,
				),
				new MeshPhongMaterial({
					map: cloudsTexture,
					transparent: true,
				}),
			);
			globe.scene().add(clouds);

			(function rotateClouds() {
				clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
				requestAnimationFrame(rotateClouds);
			})();
		});
	}, []);

	const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;
    
	return (
		<Globe
			ref={globeEl}
			height={326}
			width={326}
			backgroundColor="rgba(0,0,0,0)"
			animateIn={false}
			globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
			bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
			htmlElementsData={[
				{
					lat: 38,
					lng: -121,
				},
			]}
			labelsData={[
				{
					lat: 38,
					lng: -121,
					text: "I live here!",
				},
			]}
			htmlElement={() => {
				const el = document.createElement("div");
				el.innerHTML = markerSvg;
				el.style.color = "red";
				el.style.width = `20px`;

				el.style.pointerEvents = "auto";
				el.style.cursor = "pointer";
				return el;
			}}
		/>
	);
};

export default CloudyGlobe;
