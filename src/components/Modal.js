

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GiCrossedBones } from 'react-icons/gi'
import { BiBookmark } from 'react-icons/bi'

const Modal = ({ title, description, image, setCurrent, technologies, links }) => {


    const [showStatus, setShowStatus] = useState(false)
    const handleShow = () => setShowStatus(true)
    const handleClose = () => setShowStatus(false)


    const { src } = image || {};

    const { site, repo } = links || {};


    useEffect(() => {

        if (title && description && image) {
            handleShow()

        }

    }, [title, description, image])

    const handlerClick = (e) => {

        if (e.target.className && (e.target.classList.contains('backDrop'))) {
            handleClose()
            setCurrent(null)
        }

    }

    const closeModal = () => {
        handleClose()
        setCurrent(null)
    }
    return (

        <div className={showStatus ? 'visible backDrop' : 'hidden backDrop'} onClick={handlerClick} >
            <motion.div className="Modal"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >

                <img src={src} alt="pic_Detail" />

                <h3>
                    {title}
                </h3>
                <div className="technologies">
                    {
                        technologies &&
                        technologies.map((item,index) => {
                            return (

                                <p key ={index}>
                                    {item}
                                </p>
                            )

                        })


                    }

                </div>
                <section>
                    <a href={site} target=" _blank" className="wiewProjectBtn"
                        rel="noreferrer"
                    >
                        <BiBookmark />

                        Wiew Project</a>
                    <a href={repo} target="_blank" className="knowMoreBtn"
                        rel="noreferrer">
                        <BiBookmark />

                        Know More </a>

                </section>



                <div className="closeBtn" onClick={closeModal}>
                    <GiCrossedBones />
                </div>


            </motion.div>

        </div>


    )

}

export default Modal;

