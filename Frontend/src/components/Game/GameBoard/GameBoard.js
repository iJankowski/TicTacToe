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
      <div className="bg-tac-500 p-6 board mx-auto rounded-xl max-w-xl border-2 border-tac-400 shadow-lg">
        {this.state.fields?.map((x, i) => {
          return (
            <div className={`flex column_${i}`} key={i}>
              {x.map((y, j) => {
                return (
                  <span
                    className="border_spot"
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
          );
        })}
      </div>
    );
  }
}

export default GameBoard;
