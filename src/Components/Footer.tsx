import { Link } from "react-router-dom"
import FooterSection from "./FooterSection"


function Footer() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full h-screen bg-zinc-900 px-[2rem] py-[3rem] flex gap-[5rem]'>
            <div className='w-1/2  font-Founders flex flex-col h-full justify-between' >
                <div className="heading">
                    <h1 className="text-[6vw] uppercase leading-none -tracking-[0.06em] font-medium -mb-[1rem]">Transforming</h1>
                    <h1 className="text-[6vw] -tracking-[0.06em] uppercase font-[500] leading-none -mb-[1rem]">Moments-</h1>
                    <h1 className="text-[6vw] uppercase -tracking-[0.06em] font-medium leading-none -mb-[1rem]">into</h1>
                </div>
                <Link to={"/"}>
                    <img src="assets\logo.png" className="w-32 " alt="AS Production" />
                </Link>

            </div>
            <div className="w-1/2">
                <h1 className="text-[6vw] uppercase font-Founders font-medium -tracking-[0.06em] leading-none">
                    Masterpieces
                </h1>
                <div className="sections">
                    <FooterSection heading={'Social Media'} content={[{ name: "Instagram", url: "https://www.instagram.com/abhi_edit159" }, { name: "Facebook", url: "#" }, { name: "Youtube", url: "#" }]} />

                    <FooterSection heading={'Address'} content={[{ name: "Kathora Tal,", url: "#" }, { name: "Kashipur,", url: "#" }, { name: "UK (244713)", url: "#" }]} />

                    <FooterSection heading={'Email'} content={[{ name: "asproduction@gmail.com", url: "#" }]} />

                    <p className="font-extralight font-['Neue Montreals'] -tracking-[0.06em] text-zinc-500">All right are reserverd</p>

                </div>
            </div>
        </div>
    )
}

export default Footer