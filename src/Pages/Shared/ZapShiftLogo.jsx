import React from "react";
import logo from "../../assets/assets/logo.png";

const ZapShiftLogo = ({ textColor = "text-black" }) => {
  return (
    <div className=" flex items-end ">
      <img className="mb-2" src={logo} alt="logo" />
      <h3 className={`text-3xl font-extrabold -ms-2 ${textColor}`}>ZapShift</h3>
    </div>
  );
};

export default ZapShiftLogo;
