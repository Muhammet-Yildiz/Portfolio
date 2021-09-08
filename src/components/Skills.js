import {
  DiJavascript1,
  DiReact,
  DiCss3,
  DiDjango,
  DiJava,
  DiGit,
  DiPython
} from 'react-icons/di';

import {
  SiRedux,
  SiFramer,
  SiFirebase,
} from 'react-icons/si';
import { motion } from "framer-motion";

const Skills = () => {

  const liVariants ={
    hover : {
      scale : 1.1 ,
      transition : {
        type :"tween",
        duration : 0.5
      }
    }
  }

  return (
    <ul >
      <motion.li 
        variants={liVariants}
        whileHover ='hover'
      >
        <SiFramer />

      </motion.li>
      <motion.li
      variants={liVariants}
      whileHover ='hover' >

      <DiGit />

      </motion.li>
      <motion.li
      variants={liVariants}
      whileHover ='hover' >
      <DiCss3 />

      </motion.li>
      <motion.li
      
      variants={liVariants}
        whileHover ='hover'>
      <DiDjango />

      </motion.li>
      <motion.li
      variants={liVariants}
      whileHover ='hover' >
      <DiReact />

      </motion.li>
      <motion.li 
      variants={liVariants}
      whileHover ='hover'>

      <DiJavascript1 />

      </motion.li>
      <motion.li 
      variants={liVariants}
      whileHover ='hover'>
        <SiFirebase />
      </motion.li>
      <motion.li
      variants={liVariants}
      whileHover ='hover' >
        <SiRedux />
      </motion.li>
      <motion.li
      variants={liVariants}
      whileHover ='hover' >
        <DiJava />
      </motion.li>
      <motion.li
      variants={liVariants}
      whileHover ='hover' >
        <DiPython />

      </motion.li>
    </ul>
  );
};

export default Skills;