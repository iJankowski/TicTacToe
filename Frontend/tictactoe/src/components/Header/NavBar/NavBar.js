import {Component} from "react";
import CreateGame from "./CreateGame";
import JoinGame from "./JoinGame";
import './navBar.css';
import Logo from "./Logo";

class NavBar extends Component{
    render() {
        return(
            <div className="navBar">
                <Logo/>
                <div className="buttons">
                    <CreateGame/>
                    <JoinGame/>
                </div>
            </div>
        )
    }
}
export default NavBar;