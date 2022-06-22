import {Component} from "react";
import GameBoard from "./GameBoard/GameBoard";

class Game extends Component{
    render() {
        return(
            <div>
                <div>Game</div>
                <GameBoard/>
            </div>
        )
    }
}

export default Game;