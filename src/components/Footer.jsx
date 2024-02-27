import "./Footer.css"
import {contact} from "../assets/data"

const Footer=()=>{
  const {call,fb,link}=contact
  return (
    <div className="footer">
    <div className="contact-box">
    <a href="tel:+18002001234">
    <img src="./images/phone-call.png" /> </a>
    <span className="space">{call}</span>
   
    </div>
    <div className="contact-box">
    <a href="https://www.facebook.com/cripumps"><img src="./images/facebook.png"></img> </a>
    <span className="space">{fb}</span>
   
    </div>
    <div className="contact-box">
    <a href="https://www.crigroups.com"><img src="./images/web.png"></img> </a>
    <span className="space">{link}</span>
    </div>
  </div>
  
  )
}

export default Footer;