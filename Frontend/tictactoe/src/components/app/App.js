import GameBar from "../Gamebar/GameBar";
import Game from "../Game/Game";
import GamesList from "../GamesList/GamesList";
import "../../index.css";
import { createAndJoin } from "../Header/UserBar/CreateAndJoin";
import { useEffect, useState } from "react";
import NicknameModal from "../Modals/NicknameModal";
import Header from "../../containers/header/header";
import Footer from "../Footer/footer";

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
      createAndJoin("Ira", "join", "ABCXME")
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
    <div className="bg-gradient-to-b from-gradientlight to-gradientDark min-h-screen">
      {loading ? (
        <div className="flex justify-center">
          <div className="text-3xl bg-slate-800 m-10 p-10  rounded-2xl">
            Loading... please wait
          </div>
        </div>
      ) : (
        <>
          {nickname === "" && <NicknameModal modal={true} />}
          <Header />

          {/*<div className="flex flex-wrap-reverse md:flex-nowrap justify-center">
            <GamesList />
          </div>*/}
          <Game />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
