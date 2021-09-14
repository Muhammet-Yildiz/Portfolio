import { useState  } from "react";

import { Link } from "react-router-dom";

import logo from '../Media/logo.png'

import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineMenu } from 'react-icons/ai'
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
const Header = () => {
    const [headerHighlight, setHeaderHighlight] = useState(false);

    const scrollHandler = () => {
        setHeaderHighlight(window.scrollY >= 20);
    };
    window.addEventListener('scroll', scrollHandler)


    
    const [showStatus,setShowStatus] = useState(false)
    
    const handleShow = () => setShowStatus(true)

    const scroolToTop = () => {

        window.scrollTo(0,0)
    }


    return (

        <header
            style={headerHighlight ? { borderBottom: '1px solid #222222' } : null}
        >
            <motion.div className="container header"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 50, delay: 2 }}
            >

                <div className="hamburger-menu"
                    onClick ={handleShow}
                >
                    <AiOutlineMenu />

                </div>

                <div className="logo">


                    <Link to="/"  onClick ={scroolToTop}>
                        <img src={logo} alt="logo" />

                    </Link>


                </div>
                <ul>
                    <li>
                        <Link to="/" onClick ={scroolToTop}>

                            <AiOutlineHome />
                            <span>Home</span>

                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick ={scroolToTop}>
                            <AiOutlineUser />
                            <span>About</span>

                        </Link>
                    </li>

                    <li>
                        <Link to="/projects" onClick ={scroolToTop}>

                            <AiOutlineFundProjectionScreen />
                            <span>Projects</span>

                        </Link>
                    </li>
                </ul>

            </motion.div>


            
            <Sidebar showStatus={showStatus} setShowStatus ={setShowStatus}  />
        </header>

    )

}

export default Header;