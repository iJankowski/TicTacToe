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
      <div>
        {this.state.fields.map((x, i) => {
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
                      {JSON.stringify(y)}
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
