import axios from "axios";

export const createAndJoin = (nickName, createOrJoin, gameCode) => {
    return axios.post(
        `https://localhost:7122/Game/${createOrJoin}?nickname=${nickName}${
            createOrJoin === "join" ? `&gameCode=${gameCode}` : ""
        }`
    );
};
