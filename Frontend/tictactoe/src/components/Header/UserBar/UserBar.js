import {Component} from "react";
import UserSettingsIcon from "./UserSettingsIcon";
import MenuIcon from '@mui/icons-material/Menu';
import NicknameModalCreateGame from "../../Modals/NicknameModalCreateGame";
import NicknameModalJoinGame from "../../Modals/NicknameModalJoinGame";
import Button from "../../Common/Button";

class UserBar extends Component{
        state = {
            showCreate : false,
            showJoin : false,
            nickName : "",
            nickNameIsSet : false
        }
        toggleCreateModal = () => {
            this.setState({showCreate : !(this.state.showCreate)})
        }
        toggleJoinModal = () => {
            this.setState({showJoin : !(this.state.showJoin)})
        }
        setIsNickNameSet = (cb) =>{
            if(this.state.nickName !== ""){
                this.setState({nickNameIsSet: true}, () => cb())
            }else{
                this.setState({nickNameIsSet: false})
            }
        }
        setNickname = (e) => {
            this.setState({nickName : e.target.value})
        }
    render(){
        return(
            <div className="flex items-center lg:text-xl">
                <Button onClick={this.toggleCreateModal} text={"Create Game"}/>
                <NicknameModalCreateGame setIsNickNameSet={this.setIsNickNameSet} isNickNameSet={this.state.nickNameIsSet} modal={this.state.showCreate} showModal={this.toggleCreateModal} inputNickName={this.setNickname} nickName={this.state.nickName}/>
                <Button onClick={this.toggleJoinModal} text={"Join Game"}/>
                <NicknameModalJoinGame setIsNickNameSet={this.setIsNickNameSet} isNickNameSet={this.state.nickNameIsSet} modal={this.state.showJoin} showModal={this.toggleJoinModal} setNickName={this.setNickname} nickName={this.state.nickName}/>
                <div className="border-l-indigo-200 border-l border-dashed py-10"></div>
                <div className="flex hidden sm:inline-flex items-center">
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