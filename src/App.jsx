import Navbar from "./components/Navbar/Navbar";
import BackButton from "./components/BackButton";
import SectionTitle from "./components/SectionTitle";
import IconBox from "./components/IconBox";

export default function App() {
  return (
    <div className="bg-[#F9FAFB] pt-[64px] relative">
      <Navbar />
      <BackButton />
      <SectionTitle />
      <IconBox />
    </div>
  );
}
