import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import cv from './assets/resume.pdf';
import { GiHamburgerMenu } from "react-icons/gi";


function Header(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <header>
            <nav className="header">
                <h2 className="firstel">Dinitha Ranketh</h2>
                <ul className={`nav-links ${isOpen ? '!flex absolute top-16 right-0 flex-col w-48 shadow-xl z-50' : 'hidden'} md:flex md:static md:flex-row md:w-auto md:shadow-none`}>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="nav-actions">
                <a href="https://www.linkedin.com/in/dinithamahamethige" target="_blank" className="linkedin"><FaLinkedin /></a>
                <a href={cv} download="Dinitha_Ranketh_CV" className="cv-btn"><AiOutlineDownload /> CV</a>
                <button className="block md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                <GiHamburgerMenu className="h-7 w-7"/>
                </button>
                </div>
            </nav>
        </header>

    );
}

export default Header