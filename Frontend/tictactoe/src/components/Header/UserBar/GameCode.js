import { Component } from "react";
import { GameContext } from "../../../context";

class GameCode extends Component {
  static contextType = GameContext;
  render() {
    return (
      <div className="flex flex-col items-center">
        <div>Game Code: </div>
        <div className="pb-1 select-all ">
          {this.context.gameState.gameCode}
        </div>
      </div>
    );
  }
}
export default GameCode;
