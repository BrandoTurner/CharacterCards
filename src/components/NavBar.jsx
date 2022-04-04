import { NavLink } from "react-router-dom";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";



const NavBar = () => {
    return(
        <div>
        <nav>
            <span>Character Information Cards</span>
        <NavLink className="list"to={"/"}>Home</NavLink>
        <NavLink className="list" to={"/FrontCard"}>Front</NavLink>
        <NavLink className="list" to={"/BackCard"}>Back</NavLink>
        </nav>
    </div>
    
    )
    
}

export default NavBar;