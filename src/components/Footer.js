import hr from '../assets/curve-hr.svg'

export default function Footer(){
  return (
    <div className="mt-4 rounded-md text-white px-8 py-4">
      <ul className="text-center">
        <li><a href="#home" className="text-shadow">About</a></li>
        <li><a href="#skills" className="text-shadow">Skills</a></li>
        <li><a href="#honors" className="text-shadow">Honor & Awards</a></li>
        <li><a href="#certs" className="text-shadow">Certfications</a></li>
      </ul>

      <img src={hr} className="mb-4 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

      <p className="text-sm font-light text-center">Copyright © 2023. All Right Reserved</p>

    </div>
  )
}
