// src/components/BookingInfoBox/BookingInfoBox.jsx
import React from "react";
import infoIcon from "../../assets/i.png";

const BookingInfoBox = () => {
  return (
    <div
      className="absolute rounded-[8px] flex items-center"
      style={{
        width: "217px",
        height: "40px",
        top: "204px",
        left: "82px",
        backgroundColor: "#023554",
        padding: "6px 22px",
        gap: "10px",
      }}
    >
      {/* Inner Frame */}
      <div
        className="flex items-center"
        style={{
          width: "173px",
          height: "27px",
          gap: "5px",
        }}
      >
        {/* Text */}
        <span
          className="text-[18px] font-medium leading-[100%]"
          style={{
            fontFamily: "IBM Plex Sans Arabic",
            color: "#FEFEFE",
          }}
        >
          تعليمات وطرق الحجز
        </span>

        {/* Icon */}
        <img
          src={infoIcon}
          alt="Info"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </div>
  );
};

export default BookingInfoBox;
