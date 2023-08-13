export default function HomeBack() {
    return (
        <div className="flex min-h-[810px] bg-[#000627] dark:bg-[#000627] bg-center bg-cover gap-6 justify-center">
        <div className="flex-col">
          <h1 className="text-white text-[88px] font-Imbue tracking-widest mt-28 leading-tight">Welcome to the<br/>
          Enchanted Realm<br/>
          of <span className="text-[#DD2232] font-semibold">Coding Wizards!</span>
          </h1>
          <p className="text-white font-light text-base font-Inter tracking-widest">Unleash the Magic of Web Development and Experience<br/> Extraordinary Digital Creations</p>
          <div className="flex justify-center">
            <button type="button" className="text-white mt-8 shadow-[0px_0px_16px_0px_#750F87] bg-[#750F87] hover:bg-[#750F87] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-4 py-2 text-center md:mr-0 dark:bg-[#750F87] dark:hover:bg-[#750F87] dark:focus:ring-[#750F87]">Discover our work</button>
          </div>
        </div>
        <img src="/side-img.png" className="h-[660px] mt-6 hidden sm:block"></img>
      </div>
    )
} 