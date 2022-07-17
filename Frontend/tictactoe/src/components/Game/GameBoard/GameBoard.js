import { Component } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { GameContext } from "../../../context";

class GameBoard extends Component {
  static contextType = GameContext;
  state = {
    fields: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  };
  handleClick = (x, y) => {
    console.log({ x, y });
    console.log(this.context);
    axios.post("https://localhost:7122/UserChoice/move", {
      gameCode: this.context.gameState.gameCode,
      boardPlaceX: x,
      boardPlaceY: y,
    });
  };
  render() {
    return (
      <div>
        {this.context.gameState.game?.ticTacToeGame?.map((x, i) => {
          return (
            <div className="border-2 border-dashed border-slate-400" key={i}>
              <div className="border-t-2 border-solid first-of-type:border-none">
                {x.map((y, j) => {
                  return (
                    <span
                      className="inline-block  p-3.5 sm:p-5 border-l-2 border-solid first-of-type:border-none hover:bg-slate-900"
                      key={`${i}${j}`}
                      onClick={() => this.handleClick(i, j)}
                    >
                      {y === 0 ? undefined : y === 1 ? (
                        <CloseIcon />
                      ) : (
                        <TripOriginIcon />
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default GameBoard;
