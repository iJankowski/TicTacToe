import { Component } from "react";
import ArrowDownIcon from "../../../assets/arrow_down_icon.svg";
import UserSettingsIcon from "./UserSettingsIcon";
import MenuIcon from "@mui/icons-material/Menu";
import NicknameModalCreateGame from "../../Modals/NicknameModalCreateGame";
import NicknameModalJoinGame from "../../Modals/NicknameModalJoinGame";
import Button from "../../Common/Button";

class UserBar extends Component {
  state = {
    showCreate: false,
    showJoin: false,
    nickName: "",
    nickNameIsSet: false,
  };

  toggleCreateModal = () => {
    this.setState({ showCreate: !this.state.showCreate });
  };
  toggleJoinModal = () => {
    this.setState({ showJoin: !this.state.showJoin });
  };
  setIsNickNameSet = (cb) => {
    if (this.state.nickName !== "") {
      this.setState({ nickNameIsSet: true }, () => cb());
    } else {
      this.setState({ nickNameIsSet: false });
    }
  };
  setNickname = (e) => {
    this.setState({ nickName: e.target.value });
  };
  render() {
    return (
      <div>
        <span className="font_base px-4 cursor-pointer !text-tac-blue duration-100 text-shadow">
          Create game
        </span>
        <span className="hover:opacity-80 duration-100 font_base px-4 cursor-pointer">
          Join game
        </span>
        <div className="inline-block relative">
          <span className="hover:opacity-80 duration-100 font_base px-4 cursor-pointer">
            iTranqullity
          </span>
          <img className="w-6 absolute top-0 -right-1.5" src={ArrowDownIcon} />
          <div className="menu_width absolute bg-tac-300 py-2 text-right rounded-lg py-2 px-4 mt-2 right-0 shadow-md">
            <span className="py-2 block hover:opacity-80 duration-100 font_base cursor-pointer">
              Settings
            </span>
            <span className="py-2 block hover:opacity-80 duration-100 font_base cursor-pointer">
              Logout
            </span>
          </div>
        </div>
        {/*   <Button onClick={this.toggleCreateModal} text={"Create Game"}/>
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
                </div>*/}
      </div>
    );
  }
}
export default UserBar;
