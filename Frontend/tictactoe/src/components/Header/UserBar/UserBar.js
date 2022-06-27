import {Component} from "react";
import UserSettingsIcon from "../NavBar/UserSettingsIcon";
import CreateGame from "../NavBar/CreateGame";
import JoinGame from "../NavBar/JoinGame";
import MenuIcon from '@mui/icons-material/Menu';

class UserBar extends Component{
    render() {
        return(
            <div className="flex items-center lg:text-xl">
                <CreateGame/>
                <JoinGame/>
                <div className="border-l-indigo-200 border-l border-dashed py-10"></div>
                <div className="hidden sm:inline-flex">
                    <div className="navBarItemSpacing buttonHover buttonSchema">Login</div>
                    <div className="navBarItemSpacing buttonHover buttonSchema">Register</div>
                    <UserSettingsIcon/>
                </div>
                <div className="navBarItemSpacing buttonHover buttonSchema sm:hidden">
                    <MenuIcon/>
                </div>
            </div>
        )
    }
}
export default UserBar;