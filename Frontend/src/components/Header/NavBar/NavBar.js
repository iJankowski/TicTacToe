import {Component} from "react";
import LogoIcon from "../UserBar/LogoIcon";

class NavBar extends Component {
    render() {
        return (
            <div className="flex px-5">
                <LogoIcon/>
            </div>
        )
    }
}

export default NavBar;