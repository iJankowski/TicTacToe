import {Component} from "react";

class GameItem extends Component{
    render() {
        return (
            <div className="overflow-auto ml-5 mr-5 mb-5 h-full border-2 border-dashed border-indigo-200">
                {[...Array(50)].map(x=>{
                    return <div>GameItem</div>
                })}
            </div>
        );
    }
}
export default GameItem;