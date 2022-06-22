import {Component} from "react";
import CreateGame from "./CreateGame";
import JoinGame from "./JoinGame";
import './navBar.css';

class NavBar extends Component{
    render() {
        return(
            <div className="navBar">
                <div className="buttons">
                    <CreateGame/>
                    <JoinGame/>
                </div>
            </div>
        )
    }
}
export default NavBar;