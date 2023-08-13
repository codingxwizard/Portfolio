export default function AboutUs(){
    return (
        <div>
          <div className="flex justify-center">
            <h1 className="text-white text-9xl mt-16 pr-8 font-Imbue tracking-widest">ABOUT US</h1>
            <img src="/about-me.png" className="h-40 mt-10"/>
          </div>
          <div className="flex justify-center gap-20 p-20">
            <img src="about-me-1.png" className="h-[426px]"></img>
            <div>
              <p className="text-white font-Inter font-light pt-2 pb-4 tracking-wide">
                At Coding Wizards, we are a passionate and<br/>
                professional group of coders dedicated to crafting<br/>
                innovative and seamless technological solutions for<br/>
                clients worldwide.With our wizardry in web<br/>
                development, web apps, software engineering, and<br/>
                Android applications, we deliver top-notch services<br/>
                that elevate businesses and organizations to new<br/>
                heights.<br/>
                Our mission is simple yet powerful - to harness the<br/>
                power of cutting-edge technologies and leverage<br/>
                our expertise to provide exceptional tech solutions<br/>
                that empower businesses to thrive in the digital<br/>
                age. We aim to be the go-to destination for clients<br/>
                seeking reliable, efficient, and transformative tech<br/>
                services.<br/>
              </p>
              <div className="flex justify-center">
                <button type="button" className="focus:outline-none text-white shadow-[0px_0px_9px_0px_#F92D56] bg-[#F92D56] hover:bg-[#F92D56] focus:ring-4 focus:ring-[#F92D56] font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-[#F92D56] dark:hover:bg-[#F92D56] dark:focus:ring-[#F92D56]">Explore More</button>
              </div>
            </div>
          </div>
        </div>
    )
}