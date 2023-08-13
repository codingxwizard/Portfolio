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
        <NavBar/>
        <HomeBack />
        <AboutUs />
        <SkillCards/>
        <Skills/>
        <div className="h-[494px] mt-48 bg-[url('/portal.png')] bg-center bg-cover justify-center items-center flex flex-col">
          <h1 className="text-white text-[96px] font-Imbue font-light text-center tracking-widest leading-none">PORTAL OF WIZARDRY</h1>
          <h3 className="text-white text-[24px] font-Inter font-light text-center">A SELECTED LIST OF RECENT WORK</h3>
        </div>
		<div className="flex flex-row gap-60 pt-24 justify-center">
		<div className="flex flex-col">
			<h1 className="text-white text-[96px] font-Imbue font-normal text-center leading-none pb-8">Meet The Wizards</h1>
			<img src="/meet.png" className="w-[457px] h-[305px]"></img>
			<p className="text-white font-Inter font-light text-[24px] pt-8">
			Our extraordinary team of sorcerers,<br></br>
			enchantresses, and magical creatures<br></br>
			is dedicated to crafting bewitching<br></br>
			digital experiences.Like their mythical<br></br>
			counterparts, Coding Wizards<br></br>
			hamess the arcane arts of programming<br></br>
			languages and modern technology.Our<br></br>
			extraordinary repertoire of projects<br></br>
			showcases our talent for weaving<br></br>
			magic into every pixel. Let us bewitch<br></br>
			you with our dazzling creations.<br></br>
			</p>
		</div>
		<div className="pt-24">
		<ul id="cards">
			<li className="card w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-[#141414] bg-opacity-90 hover:shadow-xl" id="card_1">
				<div className="card__content flex flex-col justify-center items-center w-full p-2">
					<img src="raja.png"></img>
					<h3 className="text-3xl font-Inter font-medium text-white pt-3">Raja Singh</h3>
					<h4 className="font-sans font-light text-[18px] text-white opacity-80 pt-2">Supreme Wizard</h4>
					<p className="font-sans font-light text-xs text-white opacity-80 pt-3 pb-3">Experienced in both functional and OOP:<br></br>
						Dart, Python, Java, JavaScript, TypeScript.</p>
					<button className="bg-[#F92D56] text-white text-xs font-Inter font-bold py-2 px-4 rounded-full">
						Learn More
					</button>
				</div>
			</li>
			<li className="card w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-[#141414] hover:shadow-xl" id="card_2">
			<div className="card__content flex flex-col justify-center items-center w-full p-2">
					<img src="raja.png"></img>
					<h3 className="text-3xl font-Inter font-medium text-white pt-3">Raja Singh</h3>
					<h4 className="font-sans font-light text-[18px] text-white opacity-80 pt-2">Supreme Wizard</h4>
					<p className="font-sans font-light text-xs text-white opacity-80 pt-3 pb-3">Experienced in both functional and OOP:<br></br>
						Dart, Python, Java, JavaScript, TypeScript.</p>
					<button className="bg-[#F92D56] text-white text-xs font-Inter font-bold py-2 px-4 rounded-full">
						Learn More
					</button>
				</div>
			</li>
			<li className="card w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-[#141414] hover:shadow-xl" id="card_3">
			<div className="card__content flex flex-col justify-center items-center w-full p-2">
					<img src="raja.png"></img>
					<h3 className="text-3xl font-Inter font-medium text-white pt-3">Raja Singh</h3>
					<h4 className="font-sans font-light text-[18px] text-white opacity-80 pt-2">Supreme Wizard</h4>
					<p className="font-sans font-light text-xs text-white opacity-80 pt-3 pb-3">Experienced in both functional and OOP:<br></br>
						Dart, Python, Java, JavaScript, TypeScript.</p>
					<button className="bg-[#F92D56] text-white text-xs font-Inter font-bold py-2 px-4 rounded-full">
						Learn More
					</button>
				</div>
			</li>
			<li className="card w-96 h-96 max-w-xs rounded-lg shadow-md bg-[#141414] hover:shadow-xl" id="card_4">
			<div className="card__content flex flex-col justify-center items-center w-full p-2">
					<img src="raja.png"></img>
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
