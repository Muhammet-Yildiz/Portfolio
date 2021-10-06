
import { motion } from "framer-motion";
import { SiBancontact } from 'react-icons/si';
import relaxSvg from '../Media/relax.svg'

const WhoAmI= () => {
    const hoobys = ['Playing Games', 'Reading', 'Eating more food 🙂']

    return (

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
                I am currently studying computer engineering at Sakarya University.
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

   

    )

}

export default WhoAmI ; 
