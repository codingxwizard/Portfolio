export default function HomeBack() {
  return (
    <div className="flex md:flex-row flex-col-reverse  min-h-[calc(100vh-4rem)] w-full bg-contain bg-right bg-no-repeat dark:bg-[#000627] gap-6">
      <div className="flex flex-col md:w-1/2 w-full justify-center pl-14 gap-4">
        <h1 className="text-white text-[65px] font-Viga tracking-widest leading-tight">Welcome to the Enchanted Realm of<br />
          <span className="text-[#DD2232] font-semibold">Coding Wizards!</span>
        </h1>
        <p className="text-white font-medium font-Bitter tracking-widest">Unleash the Magic of Web Development and Experience<br /> Extraordinary Digital Creations</p>
        <button type="button" className="text-white font-Bitter w-fit shadow-[0px_0px_16px_0px_#750F87] bg-[#750F87] hover:bg-[#7f2d8d] focus:outline-none font-medium text-lg rounded-lg px-4 p-2 text-center md:mr-0 dark:bg-[#750F87] dark:hover:bg-[#750F87]">Discover our work</button>
      </div>
      <img src="/side-img.png" className="md:w-1/2 w-full object-contain float"></img>
    </div>
  )
} 