import { FaArrowUpLong } from "react-icons/fa6"
import { Marquee, About, EyeBg, FeaturedProject } from "../Components"
export default function Home() {
    return (
        <div className='w-full h-full bg-zinc-900 pt-1'>
            <div className="mt-40 px-16 ">
                {["Transforming ", " Moments-into", "Masterpieces"].map((item, index) => (
                    <div key={index} className="w-fit flex item-end overflow-hidden ">
                        {index === 1 && (<div className="mr-[1vw] w-[6vw] rounded-md h-[5vw]  mt-[1vw] bg-green-500 "></div>)}
                        <h1 className="text-[8vw] uppercase  font-Founders font-semibold pt-[2vw] -mb-[1vw] -tracking-[0.06em] leading-[.75em]">
                            {item}
                        </h1>
                    </div>
                ))}

            </div>
            <div className="border-t-[1px] border-zinc-800 mt-32 pb-12 flex justify-between items-center">
                {["Creating Visual Magic With Video Editing", "From Vision to Vibrant Editing."].map((item, index) => (
                    <p key={index} className="text-md font-light mx-4 tracking-tight leading-none">{item}</p>
                ))}
                <div className="start flex mx-4 py-4 uppercase ">
                    <div className="px-4 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm">Talk to us</div>
                    <div className="rounded-full mx-2 w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500">
                        <span className="rotate-[45deg]">
                            <FaArrowUpLong />
                        </span>
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