import {Component} from "react";
import GameBoard from "./GameBoard/GameBoard";
import GameCode from "../Header/NavBar/GameCode";

class Game extends Component{
    render() {
        return(
            <div className="flex justify-center max-w-2xl w-full">
                <div className="flex flex-col w-full max-w-2xl rounded-2xl p-10 pt-2 m-10 bg-slate-800 items-center">
                <GameCode/>
                <GameBoard/>
                </div>
            </div>
        )
    }
}

export default Game;