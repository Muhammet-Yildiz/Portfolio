import Skills from "./Skills";
import GithubActivity from "./GithubActivity";

import relaxSvg from '../Media/relax.svg'

import { SiBancontact } from 'react-icons/si';

import { motion } from "framer-motion";


const About = () => {
    const hoobys = ['Playing Games', 'Reading', 'Eating more food 🙂']
    return (

        <div className="About_Page">

            <div className="About_Content_Psf">

                <motion.div className="whoAmI"
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 40, delay: 0.2 }}

                >
                    <h1>Know Who <span>
                        I'M
                    </span> </h1>

                    <p>
                        Hi Everyone, I am <span> Muhammet Yıldız
                        </span> from  <span>Istanbul, Turkey.
                        </span>
                        <br />
                        I am currently studying computer engineering at Çanakkale 18 Mart University.
                    </p>
                    <br />
                    <p>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <br />

                    <ul>
                        {hoobys.map((hobby ,index) => {
                            return (

                                <li key={index}>
                                    <SiBancontact />
                                    {hobby}
                                </li>
                            )

                        })}
                    </ul>


                </motion.div>


                <motion.div className="illustrateIcon_rlx"
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 40, delay: 0.2 }}

                >
                    <img src={relaxSvg} alt="pic" />
                </motion.div>

            </div>

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


            <motion.div className="github_Calendar"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <GithubActivity />
            </motion.div>

        </div>

    )

}

export default About;