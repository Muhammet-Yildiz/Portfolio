
import { motion } from "framer-motion";

import Skills from "./Skills";
const SkillsField = () => {

    return (

        <motion.div className="Avalible_Skills"

        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
    >

        <div className="title_skls"
        >

            Avalible  <span>Skills
            </span>
        </div>

        <Skills />
    </motion.div>


    )
}

export default SkillsField ; 



