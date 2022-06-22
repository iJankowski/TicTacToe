import {Component} from "react";
import GameItem from "./GameItem";

class GamesList extends Component{
    render() {
        return(
            <div>
                <div>GameList</div>
                <GameItem/>
            </div>
        )
    }
}
export default GamesList;