import {Component} from "react";
import './header.css'
import NavBar from "./NavBar/NavBar";
import UserBar from "./UserBar/UserBar";

class Header extends Component{
    render() {
        return(
            <div className="header">
                <NavBar/>
                <UserBar/>
            </div>
        )
    }
}

export default Header;