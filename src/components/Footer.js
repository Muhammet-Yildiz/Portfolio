
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {

    return (

        <footer>
            <div>
                Designed and Developed by Muhammet Yıldız
            </div>
            <div>
                Copyright © 2021 MY.dev
            </div>
            <div>
                <li>
                    <a href="https://github.com/Muhammet-Yildiz" target="_blank"
                        rel="noreferrer">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mryld.z/" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href="#!" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="#!" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
            </div>

        </footer>
    )
}


export default Footer;