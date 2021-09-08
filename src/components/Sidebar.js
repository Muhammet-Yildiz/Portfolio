
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import {GiCrossedBones} from 'react-icons/gi'
const Sidebar = ({showStatus,setShowStatus}) => {

    const handleClose= () => setShowStatus(false)

    

    const resizeHandler = () => {
        if (window.innerWidth >= 600) {
            setShowStatus(false)

        }
    }
    window.addEventListener('resize', resizeHandler)




    useEffect(() => {

        console.log(showStatus)

    }, [showStatus,setShowStatus])


    const handlerClick =() => {
        console.log("TIKLANDI")
        handleClose()
    }
    return (
        <motion.div className="Sidebar"
         
            initial={{width:0 }}
            animate={ showStatus ? {width :'100%'} : {width :'0'}}
            transition={{duration : 0.7 }}

        >

        <ul>
            <li onClick={handlerClick}>
                <Link to="/"  >

                    <AiOutlineHome />
                    <span>Home</span>

                </Link>
            </li>
            <li>
                <Link to="/about" onClick={handlerClick}>
                    <AiOutlineUser />
                    <span>About</span>

                </Link>
            </li>

            <li>
                <Link to="/projects" onClick={handlerClick}>

                    <AiOutlineFundProjectionScreen />
                    <span>Projects</span>

                </Link>
            </li>
        </ul>

        <div className="closeModalBtn" onClick={handleClose}>
                <GiCrossedBones />
        </div>

        </motion.div>

    )


}

export default Sidebar;