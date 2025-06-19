import Navbar from "./components/Navbar/Navbar";
import arrowImage from "./assets/weui_arrow-filled.png"; // Adjust if in different path

export default function App() {
  return (
    <div className="bg-[#F9FAFB] pt-[64px] relative">
      <Navbar />

      {/* Fixed-position frame: الرجوع + arrow */}
      <div
        className="absolute flex items-center gap-[7px]"
        style={{
          width: "65px",
          height: "27px",
          top: "162px",
          left: "1295px",
        }}
      >
        {/* Text: الرجوع */}
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

        {/* Arrow image */}
        <img
          src={arrowImage}
          alt="Arrow Right"
          className="w-[12px] h-[24px] object-contain rotate-[270deg]"
        />
      </div>
    </div>
  );
}
