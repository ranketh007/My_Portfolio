import {motion} from 'framer-motion'
import profilePic from './assets/avatar.jpg'
import { IoLocationSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdSchool } from "react-icons/md";


function About(){

    return(
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2, margin: "-60px 0px 0px 0px" }} >
        <div id="about" className="card">
                <img className="card-img" src={profilePic} alt="Profile picture"></img>
                <div>
                    <h2 className="card-head">ABOUT ME</h2>
                    <p className='card-title'>Dinitha Ranketh</p>
                
                    <p className='card-desc'>Full-Stack Engineer Intern</p>
                    <p className="card-para">I am a computing student who enjoys building practical solutions and continuously learning through hands-on projects. 
                        My academic journey and personal exploration in computing have helped me strengthen my problem-solving, analytical thinking, and ability to approach technical challenges with a structured mindset.</p>
                    <ul className='card-list'>
                        <li><IoLocationSharp /> Malabe, Sri Lanka</li>
                        <li><ImProfile /> Computer Science Undergraduate</li>
                        <li><MdSchool /> Informatics Institute of Technology</li>
                    </ul>
                </div>
        </div>
    </motion.div>
    );

}

export default About