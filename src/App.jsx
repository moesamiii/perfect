import Navbar from "./components/Navbar/Navbar";
import BackButton from "./components/BackButton";
import SectionTitle from "./components/SectionTitle";
import IconBox from "./components/IconBox";
import BookingInfoBox from "./components/BookingInfoBox";
import MedicalTourismLayout from "./components/MedicalTourismLayout";

export default function App() {
  return (
    <div className="bg-[#F9FAFB] pt-[64px] relative">
      {/* Header/Navbar */}
      <Navbar />

      {/* Top Absolute Elements */}
      <BackButton />
      <SectionTitle />
      <IconBox />

      {/* تعليمات وطرق الحجز Button */}
      <div
        className="absolute flex items-center bg-[#003B5B] rounded-[8px] gap-[10px] px-[22px] py-[6px]"
        style={{
          width: "217px",
          height: "40px",
          top: "204px",
          left: "82px",
          direction: "rtl",
        }}
      >
        <span
          className="text-white text-[18px] font-medium leading-[100%]"
          style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
        >
          تعليمات وطرق الحجز
        </span>
        <div className="w-[27px] h-[27px] flex items-center justify-center rounded-full bg-white">
          <span className="text-[#003B5B] text-[18px] font-bold">i</span>
        </div>
      </div>
    </div>
  );
}
