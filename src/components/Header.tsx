import Button from "./ui/Button";
import CRANicon from "../public/icons/CRANicon";
function Header() {
  return(
      <div className="sticky top-0 z-50 grid lg:grid-cols-[38%_50%_12%] gap-3 py-[6px] md:py-[10px] text-nowrap bg-[#141414] -ml-[10%] px-[10%] w-[120%] border border-[#262626]">
        <div className="ml-[6%] sm:ml-0 grid grid-cols-[38px_auto] md:grid-cols-[40px_auto] lg:grid-cols-[44px_auto] col-start-1 h-[48px] lg:h-[55px] mt-[2px]"> 
          <div className="w-[34px] md:w-[36px] lg:w-[40px]">
            <CRANicon size={"100%"}/>
          </div>
          <div className="grid grid-rows-[50%] md:grid-rows-[50%] lg:grid-rows-[60%] h-[50px]">
            <div className="text-xl md:text-xl lg:text-2xl font-semibold tracking-wider ">CRAN</div>
            <div className="text-xs font-thin tracking-wider">Digital Agency</div>
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-[22%_30%_20%_20%] md:grid-cols-[25%_32%_22%_20%] lg:grid-cols-[17.5%_22%_18.5%_20%] col-start-2 mt-[5px]">
          <Button>Главная</Button>
          <Button>О компании</Button>
          <Button>Кейсы</Button>
          <Button>Блог</Button>
        </div>
        <button className="sm:hidden flex flex-col col-start-3 justify-center items-center w-10 h-10 ml-[40%] sm:-ml-0">
          <div className="w-6 h-0.5 bg-[#FFFFFF] mb-1.5"></div>
          <div className="w-4 h-0.5 bg-[#FFFFFF] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#FFFFFF]"></div>
        </button>

        <Button borderTransparent={false} className="hidden sm:block col-start-3 bg-[#101010] mt-[5px]">Контакты</Button>
      </div>);};
export default Header;