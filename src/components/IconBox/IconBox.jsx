// src/components/IconBox/IconBox.jsx
import React from "react";
import mokIcon from "../../assets/mok.png";

const IconBox = () => {
  return (
    <div
      className="absolute rounded-[8px]"
      style={{
        width: "45px",
        height: "40px",
        top: "204px",
        left: "307px",
        backgroundColor: "#023554",
        backdropFilter: "blur(11.5px)",
      }}
    >
      <div
        className="w-full h-full rounded-[8px] border"
        style={{
          backgroundColor: "#003049",
          borderColor: "#03446C",
          padding: "7px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={mokIcon}
          alt="Icon"
          className="w-[21px] h-[27px] object-contain"
        />
      </div>
    </div>
  );
};

export default IconBox;
