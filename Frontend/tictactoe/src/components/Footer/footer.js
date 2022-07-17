import React from "react";
import Wrapper from "../../containers/common/wrapper";
import LinkedinIcon from "../../assets/linkedin_icon.svg";
import GithubIcon from "../../assets/github_icon.svg";
import CopyIcon from "../../assets/copy_icon.svg";
import ArrowUpIcon from "../../assets/arrow_up_icon.svg";

const Footer = () => {
  return (
    <Wrapper className="py-2 relative flex justify-between items-center">
      <div>
        <span className="font_caption text-tac-200">Game list</span>
        <div className="relative text-tac-100">
          Join game
          <img className="w-6 absolute top-0 -right-6" src={ArrowUpIcon} />
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <img className="h-6 inline-block fill-tac-blue" src={CopyIcon} alt="" />
        <span className="ml-2 font_caption text-tac-200">RZA4QR</span>
      </div>
      <div>
        <img
          className="h-6 hover:opacity-80 duration-100 cursor-pointer inline-block fill-tac-blue"
          src={GithubIcon}
          alt=""
        />
        <img
          className="h-6 cursor-pointer duration-100 hover:opacity-80 inline-block"
          src={LinkedinIcon}
          alt=""
        />
      </div>
    </Wrapper>
  );
};

export default Footer;
