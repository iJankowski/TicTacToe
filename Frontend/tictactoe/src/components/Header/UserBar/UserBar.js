import { Component } from "react";
import UserSettingsIcon from "./UserSettingsIcon";
import MenuIcon from "@mui/icons-material/Menu";
import NicknameModalCreateGame from "../../Modals/NicknameModalCreateGame";
import NicknameModalJoinGame from "../../Modals/NicknameModalJoinGame";
import Button from "../../Common/Button";

class UserBar extends Component {
  state = {
    showCreate: false,
    showJoin: false,
  };
  toggleCreateModal = () => {
    this.setState({ showCreate: !this.state.showCreate });
  };
  toggleJoinModal = () => {
    this.setState({ showJoin: !this.state.showJoin });
  };
  render() {
    return (
      <div className="flex items-center lg:text-xl">
        <Button onClick={this.toggleCreateModal} text={"Create Game"} />
        <NicknameModalCreateGame
          modal={this.state.showCreate}
          showModal={this.toggleCreateModal}
          nickname={this.props.nickname}
        />
        <Button onClick={this.toggleJoinModal} text={"Join Game"} />
        <NicknameModalJoinGame
          modal={this.state.showJoin}
          showModal={this.toggleJoinModal}
          nickname={this.props.nickname}
        />
        <div className="border-l-indigo-200 border-l border-dashed py-10"></div>
        <div className="flex hidden sm:inline-flex items-center">
          {this.props.nickname !== "" ? (
            <div className="navBarItemSpacing buttonHover buttonSchema">
              {this.props.nickname}
            </div>
          ) : (
            <div className="navBarItemSpacing buttonHover buttonSchema">
              Login
            </div>
          )}
          <div className="navBarItemSpacing buttonHover buttonSchema">
            Register
          </div>
          <UserSettingsIcon />
        </div>
        <div className="navBarItemSpacing buttonHover buttonSchema sm:hidden">
          <MenuIcon />
        </div>
      </div>
    );
  }
}
export default UserBar;
