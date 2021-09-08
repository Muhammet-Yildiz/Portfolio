import Typewriter from "typewriter-effect";

import svg from '../Media/programmer.svg';

import centerSvg from '../Media/center.svg'

import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { motion } from "framer-motion";

const Home = () => {

    const style = { color: '#D76D0B' }

    return (

        <div className="mainPage">

            <div className="part1">

                <div className="mainSection">
                    <motion.div className="myInfo"

                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 50 }}
                    >
                        <div className="sumIntroduce">
                            <h2>Hi There! </h2>
                            <div className="handShake">
                                👋🏼
                            </div>
                        </div>
                        <div className="name">
                            I'M  <span>MUHAMMET YILDIZ
                            </span>
                        </div>
                        <div className="Typewritter">
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.pauseFor(1000).typeString("Full Stack Developer ").pauseFor(2000).deleteAll().typeString("Continuously Learning").pauseFor(2000).start()

                                }}
                                options={{
                                    loop: true
                                }}
                            />
                        </div>

                    </motion.div>

                    <motion.div className="illustrationIcon"
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 50 }}
                    >
                        <img src={svg} alt="pıc" />
                    </motion.div>


                </div>


            </div>

            <div className="part2">
                <motion.div className="Introduce_Yourself"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1 }}

                >

                    <div className="secInfo">
                        <h1 className="title_px">
                            LET ME  <span>INTRODUCE
                            </span>  MYSELF
                        </h1>
                        <p>
                            I loved programming and over time we understood each other better.
                        </p>
                        <br />
                        <p>My field of Interest's are building new
                            <span> Web Technologies and Products
                            </span>  </p>
                        <br />

                        <p>
                            A learning-hungry Full Stack Developer 🚀
                            I have an experience of building <span>  Web
                            </span> applications with <span>
                                JavaScript, Reactjs, Django
                            </span>
                            and some other cool libraries
                        </p>
                    </div>


                    <div className="illustrator_Centr">
                        <img src={centerSvg} alt="illustr" />

                    </div>

                </motion.div>

            </div>


            <motion.div className="part3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}

            >

                <div className="socialMedia_wq">
                    <h1>FIND ME ON </h1>
                    <p>Feel free to <span>connect
                    </span>  with me</p>

                    <ul>
                        <li>
                            <a href="https://github.com/Muhammet-Yildiz" target="_blank"
                                rel="noreferrer">
                                <FaGithub style={style} />
                            </a>
                        </li>

                        <li>

                            <a href="https://www.instagram.com/mryld.z/" target="_blank" rel="noreferrer">
                                <FaInstagram style={style} />
                            </a>
                        </li>

                        <li>
                            <a href="#!" target="_blank" rel="noreferrer">

                                <FaTwitter style={style} />
                            </a>
                        </li>
                        <li>
                            <a href="#!" target="_blank" rel="noreferrer">

                                <FaLinkedin style={style} />
                            </a>
                        </li>

                    </ul>
                </div>



            </motion.div>
        </div>

    )

}

export default Home;


