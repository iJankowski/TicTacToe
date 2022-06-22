import {Component} from "react";
import './gameBar.css'

class GameBar extends Component {
    render() {
        return (<div className="centerGameBar">
                    <div className="gameBar">
                        <div className="players grow1">
                            <div className="player">Player O: Nickname1</div>
                            <div className="player">Player X: Nickname2</div>
                        </div>
                        <div className="players grow1">
                            <div className="player">Nickname1 won 3 times</div>
                            <div className="player">Nickname2 won 1 times</div>
                        </div>
                            <div className="grow1">Move: Nickname2 </div>
                        <div className="privateSwitcher grow1">
                            <div>Private</div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default GameBar;

