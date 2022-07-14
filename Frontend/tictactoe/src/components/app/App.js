import Header from "../Header/Header";
import GameBar from "../Gamebar/GameBar";
import Game from "../Game/Game";
import GamesList from "../GamesList/GamesList";
import "../../index.css";
import { createAndJoin } from "../Header/UserBar/CreateAndJoin";
import { useEffect, useState } from "react";
import NicknameModal from "../Modals/NicknameModal";
import { GameContext } from "../../context";
import axios from "axios";

function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const [loading, setLoading] = useState(false);
  const [gameState, setGameState] = useState({});

  const UpdateGameStatus = () => {
    axios
      .get(`https://localhost:7122/Game/status/${gameState.gameCode}`)
      .then((x) => {
        setGameState({ ...gameState, game: x.data });
      });
  };

  //hook
  useEffect(() => {
    const nickname = localStorage.getItem("nickname");
    if (nickname !== null) {
      setGameState({ ...gameState, nickname: nickname });
    }
    if (typeof params.invite !== "undefined" && params.invite !== "") {
      setLoading(true);
      createAndJoin(nickname, "join", params.invite)
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, []);
  useEffect(() => {
    if (gameState.gameCode !== "" && gameState.nickname !== undefined) {
      const interval = setInterval(UpdateGameStatus, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [gameState.gameCode]);
  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      <div>
        {loading ? (
          <div className="flex justify-center">
            <div className="text-3xl bg-slate-800 m-10 p-10  rounded-2xl">
              Loading... please wait
            </div>
          </div>
        ) : (
          <>
            {gameState.nickname === undefined && <NicknameModal />}
            <Header />
            <GameBar />
            <div className="flex flex-wrap-reverse md:flex-nowrap justify-center">
              <GamesList />
              <Game />
            </div>
          </>
        )}
      </div>
    </GameContext.Provider>
  );
}

export default App;
