import { motion } from "framer-motion";

function Marquee() {
    return (
        <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className="text border-t-2 border-b-2 border-zinc-300 flex  gap-20 overflow-hidden whitespace-nowrap">
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className='text-[22vw] -tracking-[0.04em] leading-none font-Founders uppercase pt-[6vw] -mb-[2vw] font-medium'>We  are  Best</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 8 }} className='text-[22vw] -tracking-[0.04em] leading-none font-Founders uppercase pt-[6vw] -mb-[2vw] font-medium'>We  are  Best</motion.h1>
            </div>
        </div>
    )
}

export default Marquee