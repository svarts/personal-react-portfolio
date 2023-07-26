import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import adinusa from "../assets/certs/adinusa.png"
import dicodingAws from "../assets/certs/dicoding-aws.png"
import dicodingJs from "../assets/certs/dicoding-js.png"
import dicodingNetwork from "../assets/certs/dicoding-network.png"
import progateHtml from "../assets/certs/progate-htmlcss.png"
import progateJs from "../assets/certs/progate-js.png"
import fccResponsive from "../assets/certs/fcc-responsive.png"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of my Projects</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-8">
                <CertCard className="border-yellow-400 border border-3 shadow" name="Bootcamp Btech Academy Cloud Engineer" img={adinusa} issued="Adinusa" date="Jul 2022" />
                <CertCard className="border-yellow-400 border border-3" name="Mikrotik Certfied Network Associate" img={mtcna} issued="Mikrotik" date="Jun 2022" />
                <CertCard className="border-yellow-400 border border-3" name="Cloud Practitioner Essentials" img={dicodingAws} issued="Dicoding Indonesia" date="Feb 2022" />
                <CertCard className="border-yellow-400 border border-3" name="Dasar Pemprograman Javascript" img={dicodingJs} issued="Dicodig Indonesia" date="Mei 2021" />
                <CertCard className="border-yellow-400 border border-3" name="Jaringan Komputer untuk Pemula" img={dicodingNetwork} issued="Dicodig Indonesia" date="Jan 2023" />
                <CertCard className="border-yellow-400 border border-3" name="Responsive Web Design " img={fccResponsive} issued="Dicodig Indonesia" date="Dec 21" />
                <CertCard className="border-yellow-400 border border-3" name="Kursus Javascript" img={progateJs} issued="Progate" date="Oct 2020" />
                <CertCard className="border-yellow-400 border border-3" name="Kursus HTML & CSS" img={progateHtml} issued="Progate" date="Oct 2020" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
