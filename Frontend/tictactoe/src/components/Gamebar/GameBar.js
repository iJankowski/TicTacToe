import React, { useState } from "react";

const GameBar = () => {
  const [player, setPlayer] = useState(true);
  return (
    <div className="relative pb-2 max-w-lg flex justify-between mx-auto">
      <div>
        <span className="font_caption text-tac-200">You</span>
        <div
          className={`font_player ${player ? "text-tac-blue" : "text-tac-100"}`}
        >
          iTranquillity
        </div>
      </div>
      {Stats}
      <div className="text-right">
        <span className="font_caption text-tac-200">Enemy</span>
        <div
          className={`font_player ${
            player ? "text-tac-100" : "text-tac-orange"
          }`}
        >
          Avenauer
        </div>
      </div>
    </div>
  );
};

export default GameBar;

const Stats = (
  <div className="flex absolute left-1/2 -translate-x-1/2 bottom-0 origin">
    <div className="pr-2 text-tac-blue text-right w-12 font_score">9</div>
    <div className="w-4 h-1 relative top-3.5 rounded-full bg-tac-200" />
    <div className="pl-2 text-tac-orange w-12 font_score">9</div>
  </div>
);
