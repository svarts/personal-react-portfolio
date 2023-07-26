import {useState} from 'react'

import profileText from '../assets/profileText.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={profileText} alt="profile" onLoad={() => setLoaded(false)} />
            </div> 
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-amber-200 via-pink-200 to-indigo-400 inline-block text-transparent bg-clip-text">Hi, I'm</h1>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-200 via-pink-200 to-indigo-400 inline-block text-transparent bg-clip-text">Esma Karaca</h1>
                    <p class="text-2xl font-bold bg-gradient-to-r from-amber-200 via-pink-200 to-indigo-400 inline-block text-transparent bg-clip-text mb-5">Software Developer</p>
                    <p className="text-xl font-light bg-gradient-to-r from-amber-200 via-pink-200 to-indigo-400 inline-block text-transparent bg-clip-text mb-5">I'm proficient in a wide range of programming languages and frameworks, I have a strong passion for creating robust, scalable, and user-friendly applications. My solid understanding of software development lifecycle and best practices allows me to consistently deliver high-quality code and meet project deadlines.</p>
                </div>
                <a href='' className='mt-2 block '>Reach me <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a>
                
                <ul className='flex mt-2 gap-4 items-center'>
                    <li>
                        <a href='https://github.com/svarts' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                    </li> 
                    <li>
                        <a href='https://www.instagram.com/svartsyn/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/esmkaraca/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
