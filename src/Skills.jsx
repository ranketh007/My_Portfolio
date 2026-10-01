import {motion} from 'framer-motion'
import { FaReact } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { VscGithubAction } from "react-icons/vsc";
import { FaMicrochip } from "react-icons/fa6";

function Skills(){
    return(
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2, margin: "-60px 0px 0px 0px"  }} >

        <div id='skills' className="card !flex-col !gap-2">
        <h2 className='card-head'>Skills</h2>
        <p className='card-para mb-6'>A summarized overview of the technical skills I possess.</p>
        
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='skill-tab'>
            <div className='flex gap-[10px] mt-[10px]'>
                <FaReact className='mt-10px text-[clamp(16px,4vw,23px)] text-[Aqua] p-[2px] bg-[#202020] border-[1px] rounded-[5px]'/>
                <h3>Frontend</h3>
            </div>
            <ul>
                <li>React.js</li>
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
        </div>
        <div className='skill-tab'>
            <div className='flex gap-[10px] mt-[10px]'>
                <IoCodeSlash className='text-[clamp(16px,4vw,23px)] text-[Aqua] p-[2px] bg-[#202020] border-[1px] rounded-[5px]'/>
                <h3>Backend</h3>
            </div>
            <ul>
                <li>Spring Boot</li>
                <li>Node.js</li>
                <li>REST APIs</li>
            </ul>
        </div>
        <div className='skill-tab'>
            <div className='flex gap-[10px] mt-[10px]'>
                <FaJava className='text-[clamp(16px,4vw,23px)] text-[Aqua] p-[2px] bg-[#202020] border-[1px] rounded-[5px]'/>
                <h3>Core</h3>
            </div>
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
            </ul>
        </div>
        <div className='skill-tab mt-5'>
            <div className='flex gap-[10px] mt-[10px]'>
                <FaDatabase className='text-[clamp(16px,4vw,23px)] text-[Aqua] p-[2px] bg-[#202020] border-[1px] rounded-[5px]'/>
                <h3>Databases</h3>
            </div>
            <ul>
                <li>React.js</li>
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
        </div>
        <div className='skill-tab mt-5'>
            <div className='flex gap-[10px] mt-[10px]'>
                <VscGithubAction className='text-[clamp(16px,4vw,23px)] text-[Aqua] p-[2px] bg-[#202020] border-[1px] rounded-[5px]'/>
                <h3>Workflow</h3>
            </div>
            <ul>
                <li>React.js</li>
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
        </div>
        <div className='skill-tab mt-5'>
            <div className='flex gap-[10px] mt-[10px]'>
                <FaMicrochip className='text-[clamp(16px,4vw,23px)] text-[Aqua] p-[2px] bg-[#202020] border-[1px] rounded-[5px]'/>
                <h3>Utilities</h3>
            </div>
            <ul>
                <li>React.js</li>
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
        </div>
        </div>
        
        </div>
    </motion.div>
    );
}

export default Skills