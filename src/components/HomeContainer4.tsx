import Button from "./ui/Button";
import { Lightningicon, Squares } from "../public/icons/HC4icons";

function HomeContainer4() {
  return(
    <div className='mt-12 grid grid-cols-2 gap-8'>
      <div className="grid grid-rows-[30%_20%] border rounded border-[#262626] shadow-[0_0_0_6px_#191919] p-4 px-8 pb-7 pr-6">
        <div className="grid grid-cols-2">
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 text-[Inter]">Если необходим постоянный IT- отдел</div>
            <div className="text-base md:text-xl w-[100%] tracking-normal leading-tight font-bold">Внешний цифровой партнёр</div>
          </div>
          <Button buttonType="purple" className="w-[180px] text-nowrap ml-16 mt-8">Узнать подробнее</Button>
        </div>
        <div className="grid grid-cols-[53%_5%_47%]">
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 text-[Inter] space-x-1.5"><Squares/><span>Длительность договора</span></div>
            <div>от 1 до 5 лет</div>
          </div>
          <div className="w-[1px] h-[80%] mt-[30%] bg-[#202020]"/>
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 text-[Inter] space-x-1.5"><Lightningicon/><span>Стоимость</span></div>
            <div className="w-[100%] tracking-normal leading-tight font-bold text-[Inter]">от 1,7 млн рублей</div>
          </div>
        </div>
        <div className="grid grid-rows-[] border border-[#202020] rounded-lg gap-4 p-6 mt-4">
          <div className="text-xs">Для вас</div>
          <div className="text-xs">Мы становимся вашим внешним IT-отделом под ключ. Управляйте разработкой, поддержкой и развитием цифровых решений без создания внутренней  команды. Мы фокусируемся на ваших задачах, а вы — на бизнесе</div>
        </div>
      </div>


      <div className="grid grid-rows-[30%_20%] border rounded border-[#262626] shadow-[0_0_0_6px_#191919] p-4 px-8 pb-7 pr-6">
        <div className="grid grid-cols-2">
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 text-[Inter]">Если необходимо создать решение</div>
            <div className="text-base md:text-xl w-[140%] tracking-normal leading-tight font-bold">Проектная коммерческая разработка</div>
          </div>
          <Button buttonType="purple" className="w-[180px] text-nowrap ml-16 mt-8">Узнать подробнее</Button>
        </div>
        <div className="grid grid-cols-[53%_5%_47%]">
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 text-[Inter] space-x-1.5"><Squares/><span>Длительность договора</span></div>
            <div>разработка 1 решения</div>
          </div>
          <div className="w-[1px] h-[80%] mt-[30%] bg-[#202020]"/>
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 text-[Inter] space-x-1.5"><Lightningicon/><span>Стоимость</span></div>
            <div className="w-[100%] tracking-normal leading-tight font-bold text-[Inter]">от 750 000 рублей</div>
          </div>
        </div>
        <div className="grid grid-rows-[] border border-[#202020] rounded-lg gap-4 p-6 mt-4">
          <div className="text-xs">Для вас</div>
          <div className="text-xs">Мы разрабатываем решение под конкретную задачу вашего бизнеса. Анализируем  процесс, проектируем решение, внедряем и при необходимости обеспечиваем поддержку</div>
        </div>
      </div>
    </div>
      );};
export default HomeContainer4;