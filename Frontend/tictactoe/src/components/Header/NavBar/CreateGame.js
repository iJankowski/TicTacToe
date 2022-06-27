import {Component} from "react";
import axios from "axios";

class CreateGame extends Component{

    createGame=()=>{
       axios.post("https://localhost:7122/Game/new?playerNickname=Blacky");
    }
    render() {
        return(
        <span className="navBarItemSpacing buttonHover buttonSchema" onClick={this.createGame}>Create Game</span>
    )
    }
}

export default CreateGame;