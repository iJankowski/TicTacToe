import {Component} from "react";
import GameItem from "./GameItem";

class GamesList extends Component{
    render() {
        return(
            <div className="rounded-2xl flex flex-col w-full max-w-xs bg-slate-800 m-10">
                <div className="mt-2 ml-5">GameList</div>
                <GameItem/>
            </div>
        )
    }
}
export default GamesList;