import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { FaReact } from 'react-icons/fa';
import { TbBrandFlutter } from 'react-icons/tb';

export default function Skills() {
    return (
        <section className="flex flex-col gap-20">
            <div className="h-screen w-full bg-[url('/photo-gallery.png')] bg-center bg-cover flex justify-center items-center">
                <h1 className="text-white text-7xl text-center tracking-widest">
                    LET&apos;S CREATE<br />
                    MAGIC<br />
                    TOGETHER<br />
                </h1>
            </div>
            <div className="flex items-center justify-center gap-4">
                <img src="/wizard-skills.png" className="h-36"></img>
                <h1>WIZARDRY SKILLS</h1>
            </div>
            <div className="flex items-center justify-center px-40">
                <div className="w-full border-2 rounded border-white text-white flex flex-row">
                    <div className="w-1/3 border-r-2 py-12 border-white flex flex-col gap-4 items-center p-8">
                        <div className='flex gap-2'>
                            <HiOutlineComputerDesktop className='w-14 h-14 text-white' />
                            <h2 className='flex flex-col text-white text-2xl font-extrabold text-center'><span className='bg-[#792CB6] w-full px-3 flex'>Software</span><span>Development</span></h2>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex flex-col items-center gap-2'>
                                <h3>{"<h3>"}</h3>
                                <span className='border-l-2 h-full'></span>
                                <h3>{"<h3>"}</h3>
                            </div>
                            <p className='py-10 w-[80%]'>Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.</p>
                        </div>
                    </div>
                    <div className="w-1/3 h-full border-r-2 py-12 border-white flex flex-col items-center gap-4 justify-center p-8">
                        <div className='flex gap-2'>
                            <FaReact className='w-14 h-14 text-white' />
                            <h2 className='flex flex-col text-white text-2xl font-extrabold text-center'><span className='bg-[#0E3A8D] w-full px-3 flex'>Frontenv Dev</span><span>ReactJS, NextJS</span></h2>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex flex-col items-center gap-2'>
                                <h3>{"<h3>"}</h3>
                                <span className='border-l-2 h-full'></span>
                                <h3>{"<h3>"}</h3>
                            </div>
                            <p className='py-10 w-[80%]'>Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.</p>
                        </div>
                    </div>
                    <div className="w-1/3 h-full border-white py-12 flex flex-col items-center gap-4 p-8">
                        <div className='flex gap-2'>
                            <TbBrandFlutter className='w-14 h-14 text-white' />
                            <h2 className='flex flex-col text-white text-2xl font-extrabold text-center'><span className='bg-[#D81A1B] w-full px-3 flex'>Android, iOS Dev</span><span>Flutter</span></h2>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex flex-col items-center gap-2'>
                                <h3>{"<Widget>"}</h3>
                                <span className='border-l-2 h-full'></span>
                                <h3>{"<Widget>"}</h3>
                            </div>
                            <p className='py-10 w-[80%]'>Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}