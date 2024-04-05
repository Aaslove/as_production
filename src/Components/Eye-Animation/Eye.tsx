
function Eye({ rotate }: { rotate: number }) {


    return (
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
                <div className="relative bg-zinc-900  w-2/3 h-2/3 rounded-full">
                    <div className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-8 " style={{ transform: `translate(-50% , -50%) rotate(${rotate}deg)` }}>
                        <div className=" bg-zinc-100  w-[2vw] h-[2vw] rounded-full flex items-center justify-center"></div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
                <div className="relative bg-zinc-900  w-2/3 h-2/3 rounded-full">
                    <div className="line absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-8 " style={{ transform: `translate(-50% , -50%) rotate(${rotate}deg)` }}>
                        <div className=" bg-zinc-100 w-[2vw] h-[2vw] rounded-full flex items-center justify-center"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Eye