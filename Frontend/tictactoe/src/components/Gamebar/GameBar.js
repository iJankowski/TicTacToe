import { Component } from "react";
import { GameContext } from "../../context";
import axios from "axios";

const Stats = (
  <div className="flex absolute left-1/2 -translate-x-1/2 bottom-0 origin">
    <div className="pr-2 text-tac-blue text-right w-12 font_score">9</div>
    <div className="w-4 h-1 relative top-3.5 rounded-full bg-tac-200" />
    <div className="pl-2 text-tac-orange w-12 font_score">9</div>
  </div>
);

class GameBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      player: false,
    };
  }

  static contextType = GameContext;
  onClickClose = () => {
    axios.post(
      `https://localhost:7122/Game/deleteGame/${this.context.gameState.gameCode}`
    );
  };

  render() {
    return (
      <div className="relative px-2 pb-2 max-w-xl flex justify-between mx-auto">
        <div>
          <span className="font_caption text-tac-200">You</span>
          <div
            className={`font_player ${
              this.player ? "text-tac-blue" : "text-tac-100"
            }`}
          >
            iTranquillity
          </div>
        </div>
        {Stats}
        <div className="text-right">
          <span className="font_caption text-tac-200">Enemy</span>
          <div
            className={`font_player ${
              this.player ? "text-tac-100" : "text-tac-orange"
            }`}
          >
            Avenauer
          </div>
        </div>
      </div>
      /*   <div className="flex justify-center w-full">
        <div className="flex w-full max-w-6xl text-xs md:text-xl rounded-2xl bg-slate-800 justify-center">
          <div className="flex">
            <div className="p-1 sm:p-3 lg:p-10">
              <div>
                Player O:{" "}
                {this.context.gameState.game?.firstPlayer?.userNickname}
              </div>
              <div>
                Player X:{" "}
                {this.context.gameState.game?.secondPlayer?.userNickname}
              </div>
            </div>
            <div className="p-1 sm:p-3 lg:p-10">
              <div>
                {this.context.gameState.game?.firstPlayer?.userNickname} won X
                times
              </div>
              <div>
                {this.context.gameState.game?.secondPlayer?.userNickname} won O
                times
              </div>
            </div>
            <div className="p-1 sm:p-3 lg:p-10">
              <div>
                Move:
                {this.context.gameState.game?.queue
                  ? this.context.gameState.game?.secondPlayer?.userNickname
                  : this.context.gameState.game?.firstPlayer?.userNickname}
              </div>
            </div>
            <div className="p-1 sm:p-3 lg:p-10">
              <div>Private</div>
              <input type="checkbox" />
            </div>
            <CloseIcon
              onClick={this.onClickClose}
              className="m-10 buttonSchema"
            />
          </div>
        </div>
      </div>*/
    );
  }
}

export default GameBar;
