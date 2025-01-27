import logo from '../assets/logo.png';

export default function Navbar() {
    return (
    <div className='fixed z-50 nav w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={logo} className="App-logo w-10 rounded-full w-[60px] h-[60px]" alt="logo" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="text-shadow">About</a></li>
            <li className="p-4"><a href="#skills" className="text-shadow">Skills</a></li>
            <li className="p-4"><a href="#honors" className="text-shadow">Honor & Awards</a></li>
            <li className="p-4"><a href="#certs" className="text-shadow">Certfications</a></li>
            </ul>
            <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=resmakaraca@gmail.com' rel="noreferrer" target="_blank" className="rounded-full px-4 py-1 border border-yellow-400 border border-4 shadow">Contact Me!</a>
        </div>
    </div>
    )
}
