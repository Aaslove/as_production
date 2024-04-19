import { motion } from "framer-motion";
import { useState } from "react"
import { lazy } from "react";

const VideoProject = lazy(() => import("./VideoProject"))

function LeftCard({ src, project }: { src: string, project: string }) {
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const handleHover = () => {
        setIsHovering(!isHovering)
    }
    return (
        <div className="card-container  w-1/2 ">
            <span className=" py-12 font-['Neue_Montreal']"> {project}</span>
            <div
                className="card-component relative mt-10 h-[75vh]"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}>
                <h1 className="absolute text-[#CDEA68] left-full -translate-x-[50%] -translate-y-[50%] top-1/2  z-[9] font-Founders  text-5xl flex overflow-hidden">
                    {project.split("").map((item: string, index: number) => (
                        <motion.span
                            initial={{ y: "100%" }}
                            animate={isHovering ? { y: "0" } : { y: "100%" }}
                            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                            className="block"
                        >{item}</motion.span>
                    ))}
                </h1>
                <div className="card h-full w-full bg-zinc-100 flex items-center justify-center  overflow-hidden  rounded-xl">
                    <VideoProject src={src} />
                </div>
            </div>
        </div>
    )
}

export default LeftCard