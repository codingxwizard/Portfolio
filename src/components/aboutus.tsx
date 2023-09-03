export default function AboutUs() {
  return (
    <div className="flex flex-col md:gap-20 gap-10">
      <div className="flex justify-center items-center gap-4">
        <img src="/about-me.png" className="h-36" />
        <h1>ABOUT US</h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center md:gap-10 gap-5 md:px-40 px-20">
        <img src="about-me-1.png" className="md:w-1/2 w-full object-contain rounded"></img>
        <div className="flex flex-col w-full gap-5">
          <p className="text-white text-lg tracking-wide">
            At Coding Wizards, we are a passionate and
            professional group of coders dedicated to crafting
            innovative and seamless technological solutions for
            clients worldwide.With our wizardry in web
            development, web apps, software engineering, and
            Android applications, we deliver top-notch services
            that elevate businesses and organizations to new
            heights.<br />
            Our mission is simple yet powerful - to harness the
            power of cutting-edge technologies and leverage
            our expertise to provide exceptional tech solutions
            that empower businesses to thrive in the digital
            age. We aim to be the go-to destination for clients
            seeking reliable, efficient, and transformative tech
            services.
          </p>
          <button type="button" className="focus:outline-none text-white shadow-[0px_0px_9px_0px_#F92D56] bg-[#F92D56] hover:bg-[#F92D56] w-fit rounded-lg px-5 p-2 dark:bg-[#F92D56] dark:hover:bg-[#F92D56] dark:focus:ring-[#F92D56]">Explore More</button>
        </div>
      </div>
    </div>
  )
}