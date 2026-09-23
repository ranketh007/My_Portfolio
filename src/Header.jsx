import { FaLinkedin } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import cv from './assets/resume.pdf'

function Header(){

    return(
        <header>
            <nav className="header">
                <h2 className="firstel">Dinitha Ranketh</h2>
                <ul className="nav-links">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="nav-actions">
                <a href="https://www.linkedin.com/in/dinithamahamethige" target="_blank" className="linkedin"><FaLinkedin /></a>
                <a href={cv} download="Dinitha_Ranketh_CV" className="cv-btn"><AiOutlineDownload /> CV</a>
                </div>
            </nav>
        </header>

    );
}

export default Header