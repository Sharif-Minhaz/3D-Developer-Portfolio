import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// Add a listener for changes to the screen size
		const mediaQuery = window.matchMedia("(max-width: 500px)");

		// Set the initial value of the `isMobile` state variable
		setIsMobile(mediaQuery.matches);

		// Define a callback function to handle changes to the media query
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		// Add the callback function as a listener for changes to the media query
		mediaQuery.addEventListener("change", handleMediaQueryChange);

		// Remove the listener when the component is unmounted
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} inset-0 absolute top-[70px] max-w-7xl mx-auto items-start justify-center flex gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<motion.div
						animate={{ y: [0, 160, 0] }}
						transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
						className="bg-[#915eff] w-5 h-5 rounded-full"
					/>
					<div className="w-1 sm:h-[290px] h-40 violet-gradient" />
				</div>

				<div className={`${isMobile ? "mt-10" : ""}`}>
					<h2 className={`${styles.heroHeadText} text-white`}>
						Hi, I&apos;m <span className="text-[#914eff]">Minhaz</span>{" "}
					</h2>

					<p className={`${styles.heroSubText} text-white-100`}>
						I&apos;m a web developer. I spend my whole day{" "}
						<br className="sm:block hidden" /> experimenting with MERN & dabbling with
						the NEXT.js.
					</p>
				</div>
			</div>

			{!isMobile ? (
				<ComputersCanvas />
			) : (
				<div className="w-full">
					<img
						className="absolute bottom-10 scale-[1.18]"
						src="/desktop_pc/fallback-desktop.png"
						alt="my-desktop"
					/>
				</div>
			)}

			<div className="absolute xs:bottom-11 bottom-32 w-full flex items-center justify-center">
				<a href="#about">
					<div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							className="w-2.5 h-2.5 rounded-full mb-1 bg-secondary"
							animate={{ y: [0, 24, 0] }}
							transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
