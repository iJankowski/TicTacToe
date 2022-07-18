import React from "react";
import X_Blue from "../../assets/x.svg";
import O_Blue from "../../assets/o.svg";
import X_Orange from "../../assets/x_orange.svg";
import O_Orange from "../../assets/o_orange.svg";

const style = "inline-block w-10";

const Logo = () => {
  return (
    <div className="h-12 inline-block">
      <img className={`blue_shadow ${style}`} src={X_Blue} alt="" />
      <img className={`blue_shadow ${style}`} src={O_Blue} alt="" />
      <img className={`orange_shadow ${style}`} src={X_Orange} alt="" />
      <img className={`orange_shadow ${style}`} src={O_Orange} alt="" />
    </div>
  );
};

export default Logo;
