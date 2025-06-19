// src/components/BackButton/BackButton.jsx
import React from "react";
import arrowImage from "../../assets/weui_arrow-filled.png"; // adjust if path is different

const BackButton = () => {
  return (
    <div
      className="absolute flex items-center gap-[7px]"
      style={{
        width: "65px",
        height: "27px",
        top: "162px",
        left: "1295px",
      }}
    >
      <span
        className="text-[18px] font-medium leading-[1.2]"
        style={{
          fontFamily: "IBM Plex Sans Arabic",
          background:
            "linear-gradient(0deg, #6F6F6F, #6F6F6F), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        الرجوع
      </span>

      <img
        src={arrowImage}
        alt="Arrow Right"
        className="w-[12px] h-[24px] object-contain rotate-[270deg]"
      />
    </div>
  );
};

export default BackButton;
