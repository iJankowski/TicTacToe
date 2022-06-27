import Header from "../Header/Header";
import GameBar from "../Gamebar/GameBar";
import Game from "../Game/Game";
import GamesList from "../GamesList/GamesList";
import "../../index.css"

function App() {
  return (
        <div>
            <Header/>
            <GameBar/>
            <div className="flex-col lg:flex-row flex">
            <Game/>
            <GamesList/>
            </div>
        </div>

  );
}

export default App;
