export default function Skills() {
    return (
        <>
            <div className="h-[919px] w-full bg-[url('/photo-gallery.png')] bg-center bg-cover flex justify-center items-center">
                <h1 className="text-white text-8xl font-Viga font-semibold text-center tracking-widest leading-none">
                    LET&apos;S CREATE<br />
                    MAGIC<br />
                    TOGETHER<br />
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="text-white text-[128px] font-Imbue">Wizardry Skills</h1>
                <img src="/wizard-skills.png" className="h-[203px]"></img>
            </div>
            <div className="flex items-center justify-center pt-12">
                <div className="w-[1152px] h-[442px] border-4 border-white flex flex-row">
                    <div className="w-[384px] border-r-4 border-white flex gap-4 justify-center p-8">
                        <img src="/software.png" className="w-14 h-14"></img>
                        <div>
                            <span className="text-2xl text-white font-extrabold"><div className="bg-[#792CB6] px-4 w-44 h-[26px] bg-[center_top_500px]">Software</div><div className="px-4">Development</div></span>
                        </div>
                    </div>
                    <div className="w-[384px] h-full border-r-4 border-white">

                    </div>
                </div>
            </div>
        </>
    )
}