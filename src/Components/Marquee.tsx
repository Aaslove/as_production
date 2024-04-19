import { motion } from "framer-motion";

function Marquee() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-[4rem] rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className="text border-t-2 border-b-2 border-zinc-300 flex   overflow-hidden whitespace-nowrap">
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
                    className='text-[18vw] -tracking-[0.04em] leading-none font-Founders uppercase pt-[5vw]  font-bold pr-20'>
                    We  are  Best
                </motion.h1>
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 12 }}
                    className='text-[18vw] -tracking-[0.04em] leading-none font-Founders uppercase pt-[5vw]  font-bold pr-20'>
                    We  are  Best
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee