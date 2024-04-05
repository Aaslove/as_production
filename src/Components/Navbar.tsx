import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className=' fixed z-[999] w-full pl-1 pr-20 py-2  font-["Neue Montreals"] flex justify-between items-center'>
            <div className="logo">
                <Link to={"/"}>
                    <img src="src\assets\logo.png" className="w-32 " alt="AS Production" />
                </Link>

            </div>
            <div className="links flex gap-10">
                {["Home", "About", "Services", "Projects", "Contact"].map((item, index) => (
                    <Link to={`/${item.toLowerCase()}`} key={index}>
                        <a className={`text-lg font-light ${index === 4 && "ml-48"}`}>
                            {item}
                        </a></Link>
                ))}
            </div>
        </div>
    )
}

export default Navbar