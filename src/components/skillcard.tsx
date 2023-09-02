export default function SkillCards(){
    return (
    <div className="flex flex-col gap-14 my-24">
      <div>
        <div className="flex justify-center items-center gap-4">
          <img src="/mystical-solutions.png" className="h-40"></img>
          <h1 className="text-white md:text-8xl sm:text-7xl text-5xl font-Viga tracking-widest">Mystical Solutions</h1>
        </div>
      </div>
    <div className="flex flex-col">
      <div className="flex overflow-x-scroll px-10 hide-scroll-bar no-scrollbar overflow-y-scroll">
        <div className="flex flex-nowrap">
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
        <div className="inline-block px-3">
          <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          ></div>
        </div>
        <div className="inline-block px-3">
          <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          ></div>
        </div>
        <div className="inline-block px-3">
          <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
          ></div>
        </div>
        <div className="inline-block px-3">
          <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
        </div>
      </div>
        </div>
        </div>
    </div>
    )
}