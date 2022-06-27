import {Component} from "react";

class GameItem extends Component{
    render() {
        return (
            <div className="overflow-auto ml-5 mr-5 mb-5 h-full border-2 border-dashed border-indigo-200">
                {this.props.gameList.map(x=>{
                    return <div className="select-all">{x.gameCode}</div>
                })}
            </div>
        );
    }
}
export default GameItem;