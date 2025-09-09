import Righticon from "../../public/icons/Righticon";
import Button from "../ui/Button";
function HomeContainer6() {
  return(
  <div className="mt-10 px-2 lg:px-0">
    <div className="gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <div className="border border-[#262626] p-6 gap-4 grid rounded-none grid-rows-[auto]">
        <img src="src\public\image\image1.png" className="clip-path-[polygon(0_0,100%_0,100%_90%,90%_100%,0_100%)] rounded-none" alt="" />
        <div className="font-semibold">Почему ERP не даёт прибыли — и что с этим делать</div>
        <div className="text-xs text-[#999999] font-[Inter]">A stunning 4-bedroom, 3-bathroom villa in a<br /> peaceful suburban neighborhood... <span className="text-white underline">Read More</span></div>
        <div className="grid grid-cols-3 gap-2 text-xs w-[180px] font-[Inter]">
          <div className="bg-[#1A1A1A] border border-[#262626] h-8 w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] h-8 w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] h-8 w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
        </div>
        <Button buttonType="purple" className="w-full">Читать полностью</Button>
      </div>

      <div className="border border-[#262626] p-6 gap-4 grid rounded-none grid-rows-[auto]">
        <img src="src\public\image\image2.png" alt="" />
        <div className="font-semibold">Как избежать типичных ошибок<br/> при цифровизации</div>
        <div className="text-xs text-[#999999] font-[Inter]">A chic and fully-furnished 2-bedroom apartment<br/> with panoramic city views... <span className="text-white underline">Read More</span></div>
        <div className="grid grid-cols-3 gap-2 text-xs w-[180px] font-[Inter]">
          <div className="bg-[#1A1A1A] border border-[#262626] h-8 w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] h-8 w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] h-8 w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
        </div>
        <Button buttonType="purple" className="w-full">Читать полностью</Button>
      </div>

      <div className="border border-[#262626] p-6 gap-4 grid rounded-none grid-rows-[auto]">
        <img src="src\public\image\image3.png" alt="" />
        <div className="font-semibold">ИИ в логистике: 3 кейса, где<br/> технологии сэкономили {">"}2 млн</div>
        <div className="text-xs text-[#999999] font-[Inter]">An elegant 3-bedroom, 2.5-bathroom townhouse<br/> in a gated community... <span className="text-white underline">Read More</span></div>
        <div className="grid grid-cols-3 gap-2 text-xs w-[180px] font-[Inter]">
          <div className="bg-[#1A1A1A] border border-[#262626] h-8 w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] h-8 w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] h-8 w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
        </div>
        <Button buttonType="purple" className="w-full">Читать полностью</Button>
      </div>
    </div>
    <div className="mt-12 border-t-2 border-[#262626] px-2 lg:px-0 py-4 relative flex flex-col items-end col-start-1 col-end-5">
        <div className="text-xs text-[#999999] text-[Montserrat] absolute left-0 font-medium">
          <span className="text-white">01</span> of 60
        </div>
        <div className="col-start-3">
          <Righticon className="opacity-45 scale-x-[-1] mr-2 cursor-pointer hover:opacity-100"/>
          <Righticon className="opacity-75 cursor-pointer hover:opacity-100"/>
        </div>
      </div>
  </div>
    
  );};
export default HomeContainer6;