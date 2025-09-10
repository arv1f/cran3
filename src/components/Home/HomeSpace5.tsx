import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function HomeSpace5() {
  const navigate = useNavigate();
  return(
    <div className="ml-1">
      <img className="inset-0 w-[60px] h-[20px] object-cover z-0 lg:-ml-[2%] mt-12"
        src="src\public\image\stars.png"/>
      <div className="grid lg:grid-cols-[auto_115px] mt-2">
        <div>
          <div className="tracking-wider text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[42px] font-[800] leading-none w-[96%] sm:w-[107%] xl:w-full">Дайджест наших статей</div>
          <div className="text-xs text-[#999999] w-[90%] mt-7 sm:mt-3 font-[Inter] font-medium">Наши материалы — о том, как ИИ и автоматизация работают на рентабельность Вашего бизнеса.</div>
        </div>
        <Button onClick={() => navigate('/blog')} buttonType="black" className="mt-4 lg:mt-9 w-[110px] text-medium bg-[#1A1A1A] border border-[#272727]">Наш блог</Button>
      </div>
    </div>
  );};
export default HomeSpace5;