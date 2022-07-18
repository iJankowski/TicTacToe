import "../../index.css";
import { createAndJoin } from "../Header/UserBar/CreateAndJoin";
import { useEffect, useState } from "react";
import NicknameModal from "../Modals/NicknameModal";
import { GameContext } from "../../context";
import axios from "axios";
import Header from "../../containers/common/header/header";
import GameBar from "../Gamebar/GameBar";
import Game from "../Game/Game";
import Footer from "../../containers/footer/footer";

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
    const userId = localStorage.getItem("userId");
    if (nickname !== null && userId !== null) {
      axios
        .get(`https://localhost:7122/User/userGet?userId=${userId}`)
        .then((user) => {
          if (user.data === "") {
            localStorage.removeItem("nickname");
            localStorage.removeItem("userId");
          } else {
            setGameState({ ...gameState, nickname: nickname });
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
      <div className="bg-gradient-to-b from-gradientlight to-gradientDark min-h-screen">
        {loading ? (
          <div className="flex justify-center">
            <div className="text-3xl bg-slate-800 m-10 p-10 rounded-2xl">
              Loading... please wait
            </div>
          </div>
        ) : (
          <>
            {/*{gameState.nickname === undefined && <NicknameModal />}*/}
            <Header />
            {/*<GameBar />*/}
            <div className="flex flex-wrap-reverse md:flex-nowrap justify-center">
              <Game />
            </div>
            <Footer />
          </>
        )}
      </div>
    </GameContext.Provider>
  );
}

export default App;
