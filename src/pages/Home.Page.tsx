import { FaArrowUpLong } from "react-icons/fa6"
import { Marquee, About, EyeBg, FeaturedProject } from "../Components"
import { motion } from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react"


export default function Home() {
    useEffect(() => {
        new LocomotiveScroll({
            smooth: true,
            lerp: .06,
            multiplier: .5
        });
    }, []);

    return (
        <div id="home" className='w-full h-full bg-zinc-900 pt-1'>
            <div data-scroll data-scroll-speed="-0.3" className="w-full h-[78vh] mb-[2.8rem]">
                <div className="mt-[6rem] px-[4rem] ">
                    {["Transforming ", " Moments-into", "Masterpieces"].map((item, index) => (
                        <div key={index} className="w-fit flex item-end overflow-hidden ">
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "6vw" }}
                                    transition={{ ease: [.76, 0, 0.24, 1], duration: 1 }}
                                    className="mr-4"
                                >
                                    <img src="assets\edit2.jpg" className="mr-[1vw] w-[8vw] rounded-md h-[5vw]  mt-[1vw] " alt="" />
                                </motion.div>)}
                            <h1 className={`${index === 1 ? "text-zinc-200" : ""} text-[8vw] uppercase  font-Founders font-semibold pt-[2vw] -mb-[1vw] -tracking-[0.03em] leading-[.75em] pr-2`}>
                                {item}
                            </h1>
                        </div>
                    ))}

                </div>
                <div className="border-t-[1px] border-zinc-800 mt-[8rem] flex justify-between items-center">
                    {["Creating Visual Magic With Video Editing", "From Vision to Vibrant Editing."].map((item, index) => (
                        <p key={index} className="text-md font-light mx-4 tracking-tight leading-none">{item}</p>
                    ))}
                    <div className="start flex mx-4 pt-4 pb-2 uppercase ">
                        <div className="px-4 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm">Talk to us</div>
                        <div className="rounded-full mx-2 w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500">
                            <span className="rotate-[45deg]">
                                <FaArrowUpLong />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Marquee />
            <About />
            <EyeBg />
            <FeaturedProject />
        </div>
    )
}