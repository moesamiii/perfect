import React from "react";
import image1 from "../../assets/frame1.png"; // update names accordingly
import image2 from "../../assets/frame2.png";
import image3 from "../../assets/frame3.png";

export default function MedicalTourismLayout() {
  return (
    <div className="flex gap-[48px] w-[1277px] h-[701px] mx-auto" dir="rtl">
      {/* Left Section */}
      <div className="flex flex-col gap-[24px] w-[608px] h-full">
        {/* Title + Description */}
        <div className="flex flex-col gap-[8px] w-[598px] h-[85px]">
          <h2 className="text-[20px] font-bold text-[#0798F1] leading-[100%]">
            السياحة العلاجية
          </h2>
          <p className="text-[16px] font-normal text-[#686767] leading-[100%]">
            استمتع بأفضل الخدمات الطبية والرعاية المتكاملة في أفضل المستشفيات
            العالمية. نحن نوفر لك كل ما تحتاجه من إجراءات طبية متطورة، وإقامة
            فاخرة، وخدمات نقل آمنة للحالات الحرجة.
          </p>
        </div>

        {/* Feature Cards Placeholder */}
        <div className="w-[608px] h-[528px] bg-gray-100 rounded-[20px] flex items-center justify-center text-sm text-gray-400">
          {/* Replace with actual FeatureCardGrid component later */}
          Feature cards go here...
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-[568px] h-[701px]">
        {/* Stacked Images */}
        <img
          src={image1}
          alt="image 1"
          className="absolute top-0 left-0 w-[223px] h-[389px] rounded-[8.48px] border-[2.87px] border-white"
        />
        <img
          src={image2}
          alt="image 2"
          className="absolute top-[60px] left-[120px] w-[332px] h-[577px] rounded-[12.59px] border-[2.87px] border-white"
        />
        <img
          src={image3}
          alt="image 3"
          className="absolute top-[0] left-[230px] w-[339px] h-[701px] rounded-[15.32px] border-[2.87px] border-white"
        />

        {/* Left arrow */}
        <div className="absolute top-[288px] -left-[28px] w-[53px] h-[53px] rounded-full border border-[#D8D8D8] bg-white flex items-center justify-center">
          <span className="text-[#0798F1] text-xl">{"<"}</span>
        </div>

        {/* Right arrow */}
        <div className="absolute top-[288px] -right-[28px] w-[53px] h-[53px] rounded-full border border-[#D8D8D8] bg-[#0798F1] flex items-center justify-center">
          <span className="text-white text-xl">{">"}</span>
        </div>
      </div>
    </div>
  );
}
