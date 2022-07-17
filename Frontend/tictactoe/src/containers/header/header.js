import React from "react";
import Wrapper from "../common/wrapper";
import Logo from "../../components/Common/Logo";
import UserBar from "../../components/Header/UserBar/UserBar";

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
