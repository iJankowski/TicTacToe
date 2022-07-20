import React from "react";
import ArrowDownIcon from "../../assets/arrow_down_icon.svg";
import GameListItem from "./gameListItem";

const GameList = () => {
  return (
    <div className="items-center py-2 rounded-lg pb-1.5 py-2 px-1.5 mt-2 right-0 shadow-md flex h-56 flex-col bg-tac-300 bottom-full mb-2 absolute left-0 w-screen max-w-xs">
      <span className="cursor-pointer py-0.5 relative text-sm text-tac-100">
        Close
        <img
          className="w-6 absolute -top-0 -right-5"
          src={ArrowDownIcon}
          alt="icon-up"
        />
      </span>
      <div className="h-full w-full bg-tac-400 rounded-md">
        <GameListItem
          gameID="RZA4QR"
          users="Avenauer, iTranquillity"
          count={2}
        />
        <GameListItem gameID="R3KS2A" users="BlackySeth" count={1} />
      </div>
    </div>
  );
};

export default GameList;
