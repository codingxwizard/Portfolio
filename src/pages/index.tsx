import Head from "next/head";
import NavBar from "~/components/navbar";
import HomeBack from "~/components/home";
import AboutUs from "~/components/aboutus";
import SkillCards from "~/components/skillcard";
import Skills from "~/components/skills";

export default function Home() {

	return (
		<>
			<Head>
				<title>Coding Wizards</title>
				<meta name="description" content="Coding Wizards" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main className="bg-black max-w-full">
				<NavBar />
				<HomeBack />
				<AboutUs />
				<SkillCards />
				<Skills />
				<div className="h-[494px] my-14 bg-[url('/portal.png')] bg-center bg-cover justify-center items-center gap-2 flex flex-col">
					<h1 className="text-white text-8xl font-Viga font-light text-center tracking-widest leading-none">PORTAL OF WIZARDRY</h1>
					<h3 className="text-white text-2xl font-Bitter font-medium text-center">A Selected List of Recent Work</h3>
				</div>
				<div className="flex md:flex-row flex-col gap-10 justify-center">
					<div className="flex flex-col md:w-2/3 w-full items-center md:px-28 px-10 gap-5">
						<h1 className="text-white md:text-8xl text-7xl font-Viga font-normal">Meet The Wizards</h1>
						<img src="/meet.png" className="w-[80%] rounded"></img>
						<p className="text-white font-Bitter text-xl">
							Our extraordinary team of sorcerers,
							enchantresses, and magical creatures
							is dedicated to crafting bewitching
							digital experiences.Like their mythical
							counterparts, Coding Wizards
							hamess the arcane arts of programming
							languages and modern technology.Our
							extraordinary repertoire of projects
							showcases our talent for weaving
							magic into every pixel. Let us bewitch
							you with our dazzling creations.
						</p>
					</div>
					<div className="md:w-1/3 w-full flex flex-col items-center">
						<ul id="cards">
							<li className="card w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-[#141414] bg-opacity-90 hover:shadow-xl" id="card_1">
								<div className="card__content flex flex-col justify-center items-center w-full p-2">
									<img src="Raja.jpeg" className="h-44 rounded"></img>
									<h3 className="text-3xl font-Inter font-medium text-white pt-3">Raja Singh</h3>
									<h4 className="font-sans font-light text-[18px] text-white opacity-80 pt-2">Supreme Wizard</h4>
									<p className="font-sans font-light text-xs text-white opacity-80 pt-3 pb-3">Experienced in both functional and OOP:<br></br>
										Dart, Python, Java, JavaScript, TypeScript.</p>
									<button className="bg-[#F92D56] text-white text-xs font-Inter font-bold py-2 px-4 rounded-full">
										Learn More
									</button>
								</div>
							</li>
							<li className="card w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-[#141414] bg-opacity-90 hover:shadow-xl" id="card_1">
								<div className="card__content flex flex-col justify-center items-center w-full p-2">
									<img src="Raja.jpeg" className="h-44 rounded"></img>
									<h3 className="text-3xl font-Inter font-medium text-white pt-3">Raja Singh</h3>
									<h4 className="font-sans font-light text-[18px] text-white opacity-80 pt-2">Supreme Wizard</h4>
									<p className="font-sans font-light text-xs text-white opacity-80 pt-3 pb-3">Experienced in both functional and OOP:<br></br>
										Dart, Python, Java, JavaScript, TypeScript.</p>
									<button className="bg-[#F92D56] text-white text-xs font-Inter font-bold py-2 px-4 rounded-full">
										Learn More
									</button>
								</div>
							</li>
							<li className="card w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-[#141414] bg-opacity-90 hover:shadow-xl" id="card_1">
								<div className="card__content flex flex-col justify-center items-center w-full p-2">
									<img src="Raja.jpeg" className="h-44 rounded"></img>
									<h3 className="text-3xl font-Inter font-medium text-white pt-3">Raja Singh</h3>
									<h4 className="font-sans font-light text-[18px] text-white opacity-80 pt-2">Supreme Wizard</h4>
									<p className="font-sans font-light text-xs text-white opacity-80 pt-3 pb-3">Experienced in both functional and OOP:<br></br>
										Dart, Python, Java, JavaScript, TypeScript.</p>
									<button className="bg-[#F92D56] text-white text-xs font-Inter font-bold py-2 px-4 rounded-full">
										Learn More
									</button>
								</div>
							</li>
							<li className="card w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-[#141414] bg-opacity-90 hover:shadow-xl" id="card_1">
								<div className="card__content flex flex-col justify-center items-center w-full p-2">
									<img src="Raja.jpeg" className="h-44 rounded"></img>
									<h3 className="text-3xl font-Inter font-medium text-white pt-3">Raja Singh</h3>
									<h4 className="font-sans font-light text-[18px] text-white opacity-80 pt-2">Supreme Wizard</h4>
									<p className="font-sans font-light text-xs text-white opacity-80 pt-3 pb-3">Experienced in both functional and OOP:<br></br>
										Dart, Python, Java, JavaScript, TypeScript.</p>
									<button className="bg-[#F92D56] text-white text-xs font-Inter font-bold py-2 px-4 rounded-full">
										Learn More
									</button>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</>
	);
}
