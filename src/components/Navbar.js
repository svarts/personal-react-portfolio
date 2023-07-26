import logo from '../assets/logo.png';
import resume from "../assets/resume.pdf"

export default function Navbar() {
    return (
    <div className='fixed z-50 nav w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={logo} className="App-logo w-10 rounded-full w-[60px] h-[60px]" alt="logo" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
            <li className="p-4"><a href="#honors" className="hover:underline">Honor & Awards</a></li>
            <li className="p-4"><a href="#certs" className="hover:underline">Certfications</a></li>
            </ul>
            <a href={resume} rel="noreferrer" target="_blank" className="rounded-full px-4 py-1 border border-yellow-400 border border-4">Contact Me!</a>
        </div>
    </div>
    )
}
