import { Component } from "react";
import UserSettingsIcon from "./UserSettingsIcon";
import MenuIcon from "@mui/icons-material/Menu";
import NicknameModalCreateGame from "../../Modals/NicknameModalCreateGame";
import NicknameModalJoinGame from "../../Modals/NicknameModalJoinGame";
import Button from "../../Common/Button";
import ArrowDownIcon from "../../../assets/arrow_down_icon.svg";
import { GameContext } from "../../../context";

class UserBar extends Component {
  static contextType = GameContext;
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
      <div>
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
            <img
              className="w-6 absolute top-0 -right-1.5"
              src={ArrowDownIcon}
            />
            <div className="menu_width absolute bg-tac-300 py-2 text-right rounded-lg py-2 px-4 mt-2 right-0 shadow-md">
              <span className="py-2 block hover:opacity-80 duration-100 font_base cursor-pointer">
                Settings
              </span>
              <span className="py-2 block hover:opacity-80 duration-100 font_base cursor-pointer">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
      /* <div className="flex items-center lg:text-xl">
                <Button onClick={this.toggleCreateModal} text={"Create Game"}/>
                <NicknameModalCreateGame
                    modal={this.state.showCreate}
                    showModal={this.toggleCreateModal}
                />
                <Button onClick={this.toggleJoinModal} text={"Join Game"}/>
                <NicknameModalJoinGame
                    modal={this.state.showJoin}
                    showModal={this.toggleJoinModal}
                />
                <div className="border-l-indigo-200 border-l border-dashed py-10"></div>
                <div className="flex hidden sm:inline-flex items-center">
                    {this.context.gameState.nickname !== undefined ? (
                        <div className="navBarItemSpacing buttonHover buttonSchema">
                            {this.context.gameState.nickname}
                        </div>
                    ) : (
                        <div className="navBarItemSpacing buttonHover buttonSchema">
                            Login
                        </div>
                    )}
                    <div className="navBarItemSpacing buttonHover buttonSchema">
                        Register
                    </div>
                    <UserSettingsIcon/>
                </div>
                <div className="navBarItemSpacing buttonHover buttonSchema sm:hidden">
                    <MenuIcon/>
                </div>
            </div>*/
    );
  }
}

export default UserBar;
