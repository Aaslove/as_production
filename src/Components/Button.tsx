import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

function Button({ text }: { text: string }) {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className=" shine-button flex uppercase gap-5 font-['Neue_Montreal'] font-medium items-center px-10 py-6 bg-zinc-900 w-[12.5rem] h-[5rem] mt-10 rounded-full text-white ">

            <p className="w-2/3">{text}</p>
            {!hovered ?
                < div className=" w-[.5rem] h-[.5rem] bg-zinc-100 rounded-full " >
                </div > : < div className=" flex justify-center items-center w-[2rem] h-[2rem] bg-zinc-100 rounded-full" ><FiArrowUpRight className="text-black" /></div>}
        </button >
    )
}

export default Button