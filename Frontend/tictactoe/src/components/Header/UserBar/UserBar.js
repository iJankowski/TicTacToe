import {Component} from "react";
import './userBar.css';
import UserSettingsIcon from "../NavBar/UserSettingsIcon";

class UserBar extends Component{
    render() {
        return(
            <div className="userBar">
                <div className="login">Login</div>
                <div className="register">Register</div>
                <UserSettingsIcon/>
            </div>
        )
    }
}
export default UserBar;