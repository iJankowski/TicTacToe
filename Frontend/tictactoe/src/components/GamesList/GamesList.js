import { Component } from "react";
import GameItem from "./GameItem";
import axios from "axios";
import RefreshIcon from "@mui/icons-material/Refresh";

class GamesList extends Component {
  state = {
    gamesList: [],
  };
  gameListRefresh = () => {
    axios
      .get("https://localhost:7122/game/games")
      .then((gameList) => {
        this.setState({ gamesList: gameList.data });
      })
      .catch((err) => {
        console.log("Backend is offline");
      });
  };
  componentDidMount() {
    this.gameListRefresh();
  }

  render() {
    return (
      <div className="rounded-2xl flex flex-col max-h-96 w-full md:max-w-xs bg-slate-800 m-10 mt-0 md:mt-10">
        <div className="my-4 mx-5 flex justify-between">
          <div className="">Games</div>
          <RefreshIcon
            className="buttonSchema"
            onClick={this.gameListRefresh}
          />
        </div>
        <GameItem gameList={this.state.gamesList} />
      </div>
    );
  }
}
export default GamesList;
