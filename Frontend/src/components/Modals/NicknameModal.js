import React, {useContext, useState} from "react";
import axios from "axios";
import {GameContext} from "../../context";

const NicknameModal = () => {
    const gameState = useContext(GameContext);
    const [nickname, setNickname] = useState("");

    const handleNicknameChange = (e) => {
        console.log(gameState);
        setNickname(e.target.value);
    };

    const handleNicknameSave = () => {
        axios
            .post(`https://localhost:7122/User/new?nickname=${nickname}`)
            .then((response) => {
                localStorage.setItem("nickname", response.data.userNickname);
                localStorage.setItem("userId", response.data.userId);
                gameState.setGameState({
                    ...gameState.gameState,
                    nickname: response.data.userNickname,
                    userId: response.data.userId,
                });
            })
            .catch((error) => {
                alert("Unable to create a new user.");
            });
    };

    return (
        <div className="block fixed top-0 left-0 bg-black/50 w-full h-full flex justify-center items-center">
            <div className="rounded-2xl p-10 pb-2 bg-slate-900 relative">
                <div>
                    <div>What is your nickname?</div>
                    <input
                        className="mt-2 bg-slate-800 block"
                        onChange={handleNicknameChange}
                        value={nickname}
                    />
                    <div className="flex justify-end">
                        <div
                            className="buttonHover buttonSchema mt-1 p-2"
                            onClick={handleNicknameSave}
                        >
                            Submit
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NicknameModal;
