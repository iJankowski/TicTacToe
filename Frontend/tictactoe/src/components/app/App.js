import Header from "../Header/Header";
import GameBar from "../Gamebar/GameBar";
import Game from "../Game/Game";
import GamesList from "../GamesList/GamesList";
import "../../index.css";
import { createAndJoin } from "../Header/UserBar/CreateAndJoin";

function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  if (typeof params.invite !== "undefined" && params.invite !== "") {
    createAndJoin("Ira", "joinGame", "ABCXME");
  }

  return (
    <div>
      <Header />
      <GameBar />
      <div className="flex flex-wrap-reverse md:flex-nowrap justify-center">
        <GamesList />
        <Game />
      </div>
    </div>
  );
}

export default App;
