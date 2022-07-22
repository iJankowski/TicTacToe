import { Component } from "react";
import GameBoard from "./GameBoard/GameBoard";
import Wrapper from "../../containers/common/wrapper";
import GameBar from "../Gamebar/GameBar";

class Game extends Component {
  render() {
    return (
      <Wrapper className="py-10">
        <GameBar />
        <GameBoard />
      </Wrapper>
    );
  }
}

export default Game;
