import {Component} from "react";

class GameBar extends Component {
    render() {
        return (<div className="flex justify-center w-full">
                <div className="flex w-full max-w-6xl text-xs md:text-xl rounded-2xl bg-slate-800 justify-center">
                    <div className="flex">
                        <div className="p-1 sm:p-3 lg:p-10">
                            <div>Player O: Nickname1</div>
                            <div>Player X: Nickname2</div>
                        </div>
                        <div className="p-1 sm:p-3 lg:p-10">
                            <div>'Nickname1' won X times</div>
                            <div>'Nickname2' won O times</div>
                        </div>
                        <div className="p-1 sm:p-3 lg:p-10">
                            <div>Move: 'nickname'</div>
                        </div>
                        <div className="p-1 sm:p-3 lg:p-10">
                            <div>Private</div>
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameBar;

