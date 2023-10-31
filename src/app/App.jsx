import { BrowserRouter } from "react-router-dom";
import {
	About,
	Navbar,
	Contact,
	Experience,
	Feedbacks,
	StarsCanvas,
	Hero,
	Tech,
	Works,
} from "./../components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="bg-primary z-0 relative">
				<div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
