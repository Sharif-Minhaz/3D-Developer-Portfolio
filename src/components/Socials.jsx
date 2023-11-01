import { Tilt } from "react-tilt";
import { socialLinks } from "../constants";
import { styles } from "../styles";

export default function Socials() {
	return (
		<div className="mt-[100px]">
			<p className={`${styles.sectionSubText} mb-10`}>Social Networks</p>
			<div className="flex justify-between items-center">
				<div className="flex gap-6">
					{socialLinks.map((social) => (
						<Tilt key={social.id}>
							<div
								onClick={() => window.open(social.link, "_blank")}
								className="cursor-pointer bg-tertiary p-3 shadow-social rounded-xl"
							>
								<img
									draggable={false}
									className="w-[50px] h-[50px] object-contain"
									src={social.icon}
									alt={social.title}
								/>
							</div>
						</Tilt>
					))}
				</div>
				<a href="/SHARIF_MD._MINHAZ.pdf" download>
					<button className="active:shadow-none inline-flex gap-4 items-center py-3 px-8 bg-tertiary rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
						<img
							src="/download.png"
							className="inline-block w-[30px] h-[30px]"
							alt=""
						/>
						<span>Download CV</span>
					</button>
				</a>
			</div>
		</div>
	);
}