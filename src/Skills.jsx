import {motion} from 'framer-motion'

function Skills(){
    return(
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2, margin: "-60px 0px 0px 0px"  }} >

        <div id='skills' className="card">
        <h2 className='card-head'>Skills</h2>
        </div>

    </motion.div>
    );
}

export default Skills