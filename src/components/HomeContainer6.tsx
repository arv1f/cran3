import Button from "./ui/Button";

function HomeContainer6() {
  return(
    <div className="mt-10 grid grid-cols-3 gap-6">
      <div className="border border-[#262626] p-6 gap-6 rounded-lg p-4 grid grid-rows-[50%_7%_]">
        <img src="src\public\image\image1.png" alt="" />
        <div>Почему ERP не даёт прибыли —<br/> и что с этим делать</div>
        <div className="text-xs text-[#999999] text-[Inter]">A stunning 4-bedroom, 3-bathroom villa in a<br/> peaceful suburban neighborhood... <span className="text-white underline">Read More</span></div>
        <div className="grid grid-cols-7 gap-9 text-xs">
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
        </div>
        <Button buttonType="purple" className="w-full">Читать полностью</Button>
      </div>

      <div className="border border-[#262626] p-6 gap-6 rounded-lg p-4 grid grid-rows-[50%_7%_]">
        <img src="src\public\image\image2.png" alt="" />
        <div>Как избежать типичных ошибок<br/> при цифровизации</div>
        <div className="text-xs text-[#999999] text-[Inter]">A chic and fully-furnished 2-bedroom apartment<br/> with panoramic city views... <span className="text-white underline">Read More</span></div>
        <div className="grid grid-cols-7 gap-9 text-xs">
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
        </div>
        <Button buttonType="purple" className="w-full">Читать полностью</Button>
      </div>

      <div className="border border-[#262626] p-6 gap-6 rounded-lg p-4 grid grid-rows-[50%_7%_]">
        <img src="src\public\image\image3.png" alt="" />
        <div>ИИ в логистике: 3 кейса, где<br/> технологии сэкономили {">"}2 млн</div>
        <div className="text-xs text-[#999999] text-[Inter]">An elegant 3-bedroom, 2.5-bathroom townhouse<br/> in a gated community... <span className="text-white underline">Read More</span></div>
        <div className="grid grid-cols-7 gap-9 text-xs">
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
          <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl w-fit px-2 p-1 flex items-center justify-center">ТЕГ</div>
        </div>
        <Button buttonType="purple" className="w-full">Читать полностью</Button>
      </div>
    </div>
  );};
export default HomeContainer6;