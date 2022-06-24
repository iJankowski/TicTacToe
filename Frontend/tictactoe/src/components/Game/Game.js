import {Component} from "react";
import GameBoard from "./GameBoard/GameBoard";
import GameCode from "../Header/NavBar/GameCode";

class Game extends Component{
    render() {
        return(
            <div className="flex justify-center w-full h-full">
                <div className="flex flex-col h-full max-h-96 w-full max-w-2xl rounded-2xl p-10 m-10 bg-slate-800 items-center">
                <GameCode/>
                <GameBoard/>
                </div>
            </div>
        )
    }
}

export default Game;