import Header from "../Header/Header";
import GameBar from "../Gamebar/GameBar";
import Game from "../Game/Game";
import GamesList from "../GamesList/GamesList";
import "../../index.css";
import { createAndJoin } from "../Header/UserBar/CreateAndJoin";
import { useEffect, useState } from "react";
import NicknameModal from "../Modals/NicknameModal";

function App() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const [loading, setLoading] = useState(false);
  const [nickname, setNickname] = useState("");

  //hook
  useEffect(() => {
    const nickname = localStorage.getItem("nickname");
    if (nickname !== null) {
      setNickname(nickname);
    }
    if (typeof params.invite !== "undefined" && params.invite !== "") {
      setLoading(true);
      createAndJoin(nickname, "join", "ABCXME")
        .then((game) => {
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [params.invite]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center">
          <div className="text-3xl bg-slate-800 m-10 p-10  rounded-2xl">
            Loading... please wait
          </div>
        </div>
      ) : (
        <>
          {nickname === "" && (
            <NicknameModal
              modal={nickname === ""}
              setGameNickname={setNickname}
            />
          )}
          <Header nickname={nickname} />
          <GameBar />
          <div className="flex flex-wrap-reverse md:flex-nowrap justify-center">
            <GamesList />
            <Game />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
