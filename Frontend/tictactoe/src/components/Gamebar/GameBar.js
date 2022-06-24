import {Component} from "react";

class GameBar extends Component {
    render() {
        return (<div className="flex justify-center w-full">
            <div className="flex w-full max-w-6xl rounded-2xl p-10 m-10 bg-slate-800 justify-between">
                <div>
                    <div>Player O: Nickname1</div>
                    <div>Player X: Nickname2</div>
                </div>
                <div>
                    <div>Nickname1 won 3 times</div>
                    <div>Nickname2 won 1 times</div>
                </div>
                <div>Move: Nickname2</div>
                <div>
                    <div>Private</div>
                    <input type="checkbox"/>
                </div>
            </div>
            </div>
        )
    }
}

export default GameBar;

