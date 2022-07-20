import React from "react";

const GameListItem = ({ gameID, users, count }) => {
  return (
    <div className="cursor-pointer px-2 py-1 overflow-hidden group hover:bg-tac-300 duration-100 flex w-full justify-between text-left">
      <div className="overflow-ellipsis">
        <span className="text-tac-100">{gameID}</span>
        <span className="overflow-ellipsis whitespace-nowrap pl-2 font_caption text-tac-200">
          {users}
        </span>
      </div>
      <span
        className={`${
          count >= 2 ? "text-tac-blue" : "text-tac-200"
        } text-right w-full`}
      >
        {count}/2
      </span>
    </div>
  );
};

export default GameListItem;
