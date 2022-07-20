import React from "react";
import Logo from "../../../components/Common/Logo";
import Wrapper from "../wrapper";
import UserBar from "../../../components/Header/UserBar/UserBar";

const Header = () => {
  return (
    <div className="w-full">
      <Wrapper
        className="py-10 items-center flex justify-between"
        children={
          <>
            <Logo />
            <UserBar />
          </>
        }
      />
    </div>
  );
};

export default Header;
