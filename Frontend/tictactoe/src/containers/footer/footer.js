import React from "react";
import Wrapper from "../../containers/common/wrapper";
import LinkedinIcon from "../../assets/linkedin_icon.svg";
import GithubIcon from "../../assets/github_icon.svg";
import CopyIcon from "../../assets/copy_icon.svg";
import ArrowUpIcon from "../../assets/arrow_up_icon.svg";
import GameList from "./gameList";

const Footer = () => {
  return (
    <Wrapper className="py-2 relative flex justify-between items-center">
      <div className="relative">
        <span className="font_caption text-tac-200">Game list</span>
        <div className="relative text-tac-100">
          Join game
          <img
            className="w-6 absolute top-0 -right-6"
            src={ArrowUpIcon}
            alt="icon-up"
          />
        </div>
        <GameList />
      </div>
      <div
        title="Copy game link"
        className="absolute left-1/2 cursor-pointer group -translate-x-1/2"
      >
        <img className="h-6 inline-block fill-tac-blue" src={CopyIcon} alt="" />
        <span className="ml-1 group-hover:ml-2 font_caption text-tac-200 group-hover:text-tac-100 duration-100">
          RZA4QR
        </span>
      </div>
      <div>
        <img
          title="Github profile"
          className="h-6 m-1 hover:opacity-80 duration-100 cursor-pointer inline-block fill-tac-blue"
          src={GithubIcon}
          alt="Github profile icon"
        />
        <img
          title="Linkedin profile"
          className="h-6 m-1 cursor-pointer duration-100 hover:opacity-80 inline-block"
          src={LinkedinIcon}
          alt="Linkedin profile icon"
        />
      </div>
    </Wrapper>
  );
};

export default Footer;
