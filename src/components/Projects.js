
import { PROJECTS } from "./JsonProjects";
import ProjectCard from "./ProjectCard";

import { motion } from "framer-motion";



const Projects = () => {

  return (
    <div className="Projects_Page">
      <section>
        <div className="head_2s">
          <motion.h1 className="title_ws"

            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
          >
            My Recent <span>Works
            </span>
          </motion.h1>
          <motion.p
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 1.2 }}
          >
            Here are a few projects I've worked on recently.
          </motion.p>
        </div>


        <motion.ul className="few_projects"

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {PROJECTS.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}

        </motion.ul>

      </section>



    </div>
  );
};

export default Projects;