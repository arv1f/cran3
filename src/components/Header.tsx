import Button from "./ui/Button";
import CRANicon from "../public/icons/CRANicon";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isUpHeaderVisible: boolean;
}

function Header({ isUpHeaderVisible }: HeaderProps) {
  const navigate = useNavigate();
  
  return(
      <div className={`fixed -left-1 z-50 grid md:grid-cols-[144px_60%_10%] lg:grid-cols-[28%_auto_30px] xl:grid-cols-[38%_auto_30px] gap-3 py-[6px] md:py-[10px] text-nowrap bg-[#141414] px-[10%] w-[101%] border border-[#262626] transition-all duration-1000 ${isUpHeaderVisible ? 'top-[64px] md:top-[38px] lg:top-[52px]' : 'top-0'}`}>
        <div className="ml-[10%] sm:ml-0 grid grid-cols-[38px_auto] md:grid-cols-[40px_auto] lg:grid-cols-[44px_auto] col-start-1 mt-[8px]"> 
          <div className="w-[144px] md:w-[140px] lg:w-[164px] h-[40px]">
            <CRANicon width={'100%'} height={"100%"} />
          </div>
        </div>

        <div className="hidden sm:grid sm:grid-cols-[90px_120px_80px_60px] lg:grid-cols-[110px_140px_100px_80px] col-start-2 mt-[2px]">
          <Button onClick={() => navigate('/')}>Главная</Button>
          <Button onClick={() => navigate('/about')}>О компании</Button>
          <Button onClick={() => navigate('/')}>Кейсы</Button>
          <Button onClick={() => navigate('/blog')}>Блог</Button>
        </div>
        <button className="sm:hidden flex flex-col col-start-3 justify-center items-center w-10 h-10 ml-[40%] sm:-ml-0">
          <div className="w-6 h-0.5 bg-[#FFFFFF] mb-1.5"></div>
          <div className="w-4 h-0.5 bg-[#FFFFFF] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#FFFFFF]"></div>
        </button>

        <Button onClick={() => navigate('/contact')} borderTransparent={false} className="hidden sm:block col-start-3 bg-[#101010] mt-[3px]">Контакты</Button>
      </div>);
}

export default Header;