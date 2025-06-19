import man from "../../assets/man.png";
import arrow from "../../assets/weui_arrow-filled.png";
import cart from "../../assets/Cart Plus.png";
import bell from "../../assets/Component 7.png";
import logo from "../../assets/ulmcare-logo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[1440px] h-[42px] mx-auto px-[80px] flex items-center justify-between">
        {/* ✅ Left Section (Avatar, ENG, Icons) */}
        <div className="flex items-center gap-[16px] h-[42px]">
          <img
            src={man}
            alt="User Avatar"
            className="w-[42px] h-[42px] rounded-full object-cover"
          />

          <div className="flex items-center gap-[6.67px]">
            <img
              src={arrow}
              alt="Arrow Down"
              className="w-[8px] h-[16px] object-contain"
            />
            <span className="text-[#6F6F6F] font-medium text-[16px] leading-none">
              ENG
            </span>
          </div>

          <img
            src={cart}
            alt="Cart"
            className="w-[24px] h-[24px] object-contain"
          />

          <img
            src={bell}
            alt="Notifications"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>

        {/* ✅ Right Section (Links + Logo) */}
        <div className="flex items-center gap-[42px]">
          <div className="flex items-center gap-[16px] text-[#6F6F6F] text-[16px] font-normal">
            <span className="cursor-pointer">الدعم</span>
            <span className="cursor-pointer">كونكت الاطباء</span>
            <div className="flex items-center gap-[5px] cursor-pointer">
              <img
                src={arrow}
                alt="Arrow"
                className="w-[8px] h-[16px] object-contain"
              />
              <span>خدماتنا</span>
            </div>
            <span className="text-[#0798F1] font-bold cursor-pointer">
              الرئيسية
            </span>
          </div>

          <img
            src={logo}
            alt="Ulm Care Logo"
            className="w-[131.54px] h-[36px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
