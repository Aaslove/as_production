import Eye from "./Eye"
import { useEffect, useState } from "react"


function EyeBg() {
    const [rotate, setRotate] = useState<number>(0);


    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            let x: number = e.clientX;
            let y: number = e.clientY;

            let deltaX: number = x - window.innerWidth / 2;
            let deltaY: number = y - window.innerHeight / 2;

            // Calculate the angle based on the relative position of the mouse
            var angle: number = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            setRotate(angle - 180);
        }

        window.addEventListener("mousemove", handleMouseMove);
        // return () => {
        //     window.removeEventListener("mousemove", handleMouseMove);
        // };
    }, []);


    return (
        <div className="eyes w-full h-screen  bg-zinc-100 overflow-hidden">
            <div data-scroll data-scroll-speed="-0.7" className='relative w-full  h-full bg-cover bg-center bg-[url("./src/assets/eyeBg.jpg")]'>
                <Eye rotate={rotate} />
            </div>
        </div >
    )
}

export default EyeBg