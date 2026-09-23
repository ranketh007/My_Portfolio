import {motion} from 'framer-motion'

function Edu(){    
    const edu = [{school: "University of Westminster (Affiliated with IIT)", course: "B.Sc. (Hons), Computer Science (2025 - 2029)"}, 
                    {school: "Informatics Institute of Technology", course: "Foundation Certificate in Higher Edcuation, Computer Sceince"}, 
                    {school: "Vidura College, Colombo", course: "GCE O/Ls (9As)"}];
    
    const listItems = edu.map((item, index) => <li key={index}> <b>{item.school}</b>: &nbsp; {item.course} </li>); 

    return(<>
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.2, margin: "-60px 0px 0px 0px"  }} >
    <div className="card">
    <h3 className="list-category">Education</h3>
    <ol className="list-ol">{listItems}</ol>
    </div>
    </motion.div>
    </>
    )
}

export default Edu
