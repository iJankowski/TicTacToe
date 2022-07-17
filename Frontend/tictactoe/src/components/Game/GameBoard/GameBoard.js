import { Component } from "react";

class GameBoard extends Component {
  state = {
    fields: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  };
  handleClick = (x, y) => {
    console.log({ x, y });
  };
  render() {
    return (
      <div className="bg-tac-500 p-10 board mx-auto rounded-xl max-w-lg border-2 border-tac-400 shadow-lg">
        {this.state.fields.map((x, i) => {
          return (
            <div className={`flex column_${i}`} key={i}>
              {x.map((y, j) => {
                return (
                  <span
                    className="border_spot"
                    key={`${i}${j}`}
                    onClick={() => this.handleClick(i, j)}
                  >
                    {JSON.stringify(y)}
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
