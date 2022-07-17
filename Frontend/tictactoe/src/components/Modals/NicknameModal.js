import React, { useState } from "react";

const NicknameModal = (props) => {
  const [nickname, setNickname] = useState("");
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };
  const handleNicknameSave = () => {
    localStorage.setItem("nickname", nickname);
  };

  //todo: change to: block : hidden later
  return (
    <div
      className={`${
        props.modal ? "hidden" : "hidden"
      } fixed top-0 left-0 bg-black/50 w-full h-full flex justify-center items-center`}
    >
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
