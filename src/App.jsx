import Navbar from "./components/Navbar/Navbar";
import BackButton from "./components/BackButton";
import SectionTitle from "./components/SectionTitle";
import IconBox from "./components/IconBox";
import BookingInfoBox from "./components/BookingInfoBox";
import MedicalTourismLayout from "./components/MedicalTourismLayout";

export default function App() {
  return (
    <div className="bg-[#F9FAFB] pt-[64px]">
      <Navbar />

      {/* Absolute-positioned section with fixed height */}
      <div className="relative h-[300px]">
        {" "}
        {/* 👈 adjust height to fit all absolute elements */}
        <BackButton />
        <SectionTitle />
        <IconBox />
        <BookingInfoBox />
      </div>

      {/* This will now appear *after* the absolute section */}
      <div className="mt-4">
        <MedicalTourismLayout />
      </div>
    </div>
  );
}
g;
