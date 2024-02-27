import './Header.css'
import {header} from '../assets/data'

const Header=()=>{
    const {name,logo,tagline}=header
    return(
        <div className="header">
          <img src={logo} alt="Your Image" />
        </div>
    
    )
}

export default Header