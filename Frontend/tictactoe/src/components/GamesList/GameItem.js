import {Component} from "react";

class GameItem extends Component{
    render() {
        return (
            <div className="overflow-auto ml-5 mr-5 mb-5 h-full border-2 border-dashed border-indigo-200">
                {this.props.gameList.length !== 0 ?
                    this.props.gameList.map(x=>{
                    return <div className="select-all">{x.gameCode}</div>
                }): <div className="text-3xl">Games not found</div>}
            </div>
        );
    }
}
export default GameItem;