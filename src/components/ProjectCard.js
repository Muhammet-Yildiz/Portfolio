
import { useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, description, technologies, links }) => {


    const [current, setCurrent] = useState(null)

    const handleClick = (e) => {

        setCurrent({ image, title, description, technologies, links })
    }

    return (
        <>
            <motion.div className="projectCard" onClick={handleClick}
                initial={{
                    boxShadow: '0 4px 8px #f39d4d'
                }}
                whileHover={{ scale: 1.1, boxShadow: '0 8px 10px #f39d4d' }}
                transition={{ duration: 0.4 }}

            >
                <div className="imgField">
                    <img src={image.src} alt="pıc" />
                </div>
                <h4 className="project_title">{title}  </h4>
                <p className="p_descr">
                    {description}
                </p>


            </motion.div>

            {current &&
                <Modal {...current} setCurrent={setCurrent} />
            }

        </>

    )
}

export default ProjectCard;