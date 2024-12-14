import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe , faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin , FaTwitter} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";

export default function Footer(){
    return<>
    <div className="Container-Footer">
        <div className="logo-footer">
            <img className='logo' src='./Images/logo2.png'/>
        </div>
        <div className="Info"> 
         <h1 className='Company-Name'>STIVALO</h1> 
           <FaLocationDot /> <a href="https://maps.app.goo.gl/Mk9zpRn1MthwBwb67">Latakia, Alamircan street</a>
            <div>
            <FontAwesomeIcon icon={faPhone} /> <a href="tel:0981541998">0995406449</a>
            </div>
            <div>
           <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:stivalo@gmail.com">stivalo@gmail.com</a>
         </div>
          
        </div>
        
        <div className="Social-Media">
            <h1 className='keep'>Keep In Touch</h1>
           <a href='#Stivalo-facebook'><FaFacebook /></a>
           <a href='#Stivalo-instagram'><FaInstagram /></a>
           <a href='#Stivalo-linkedin'><FaLinkedin /></a>
           <a href='#Stivalo-twitter'><FaBehanceSquare /></a>
           <a href='#Stivalo-behance'><FaTwitter /></a> 
        </div>
       
       
    </div>
    </>
}