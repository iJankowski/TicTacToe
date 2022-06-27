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
            <div className="flex flex-wrap-reverse md:flex-nowrap justify-center">
                <GamesList/>
                <Game/>
            </div>
        </div>

  );
}

export default App;
