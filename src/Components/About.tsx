import Button from "./Button";
export default function About() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.3" id="about" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tighter'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste et cum aliquid delectus sed tenetur quas, officiis itaque, nihil iure qui illo dolorum. Fugiat illum eligendi similique dolorum sint!
            </h1>
            <div className="w-full border-t-[1px] mt-16 border-[#a7c635]"></div>
            <Button text="Open it" />
        </div>
    )
}
