import {Component} from "react";
import {GameContext} from "../../context";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

class GameBar extends Component {
    static contextType = GameContext;
    onClickClose = () => {
        axios.post(
            `https://localhost:7122/Game/deleteGame/${this.context.gameState.gameCode}`
        );
    };

    render() {
        return (
            <div className="flex justify-center w-full">
                <div className="flex w-full max-w-6xl text-xs md:text-xl rounded-2xl bg-slate-800 justify-center">
                    <div className="flex">
                        <div className="p-1 sm:p-3 lg:p-10">
                            <div>
                                Player O:{" "}
                                {this.context.gameState.game?.firstPlayer?.userNickname}
                            </div>
                            <div>
                                Player X:{" "}
                                {this.context.gameState.game?.secondPlayer?.userNickname}
                            </div>
                        </div>
                        <div className="p-1 sm:p-3 lg:p-10">
                            <div>
                                {this.context.gameState.game?.firstPlayer?.userNickname} won X
                                times
                            </div>
                            <div>
                                {this.context.gameState.game?.secondPlayer?.userNickname} won O
                                times
                            </div>
                        </div>
                        <div className="p-1 sm:p-3 lg:p-10">
                            <div>
                                Move:
                                {this.context.gameState.game?.queue
                                    ? this.context.gameState.game?.secondPlayer?.userNickname
                                    : this.context.gameState.game?.firstPlayer?.userNickname}
                            </div>
                        </div>
                        <div className="p-1 sm:p-3 lg:p-10">
                            <div>Private</div>
                            <input type="checkbox"/>
                        </div>
                        <CloseIcon
                            onClick={this.onClickClose}
                            className="m-10 buttonSchema"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default GameBar;
