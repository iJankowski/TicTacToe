import './App.css';
import Header from "../Header/Header";
import GameBar from "../Gamebar/GameBar";
import Game from "../Game/Game";
import GamesList from "../GamesList/GamesList";

function App() {
  return (
      <div className="center">
        <div className="App">
            <Header/>
            <GameBar/>
            <Game/>
            <GamesList/>
        </div>
      </div>
  );
}

export default App;
