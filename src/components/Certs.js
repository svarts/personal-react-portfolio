import CertCard from "./CertCard.js"
import hr from "../assets/curve-hr.svg"

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of my Projects</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-4 gap-8">
                <CertCard className="border-yellow-400 border border-3 shadow" name="" img="" issued="Adinusa" date="Jul 2022" />
                <CertCard className="border-yellow-400 border border-3" name="" img="" issued="Mikrotik" date="Jun 2022" />
                <CertCard className="border-yellow-400 border border-3" name="" img="" issued="Dicoding Indonesia" date="Feb 2022" />
                <CertCard className="border-yellow-400 border border-3" name="" img="" issued="Dicodig Indonesia" date="Mei 2021" />
                <CertCard className="border-yellow-400 border border-3" name="" img="" issued="Dicodig Indonesia" date="Jan 2023" />
                <CertCard className="border-yellow-400 border border-3" name="" img="" issued="Dicodig Indonesia" date="Dec 21" />
                <CertCard className="border-yellow-400 border border-3" name="" img="" issued="Progate" date="Oct 2020" />
                <CertCard className="border-yellow-400 border border-3" name="" img="" issued="Progate" date="Oct 2020" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
