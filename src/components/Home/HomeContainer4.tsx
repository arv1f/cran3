import { Squares, Lightningicon } from "../../public/icons/HC4icons";
import Button from "../ui/Button";


function HomeContainer4() {
  return(
    <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-3'>
      <div className="grid grid-rows-[30%_20%_50%] sm:grid-rows-[30%_20%_45%] md:grid-rows-[35%_15%_50%] border rounded border-[#262626] shadow-[0_0_0_6px_#191919] p-4 md:px-8 pb-7 md:pr-6 ml-[3%] lg:ml-0 w-[94.5%] lg:w-full h-[750px] md:h-[500px] lg:h-[650px]">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div>
            <div className="text-xs text-[#999999] lg:text-nowrap mt-2 text-[Inter]">Если необходим постоянный IT- отдел</div>
            <div className="text-base md:text-xl xl:w-[120%] tracking-normal leading-tight font-bold">Внешний цифровой партнёр</div>
          </div>
          <Button buttonType="purple" className="w-[180px] text-nowrap xl:ml-14 md:mt-8 xl:mt-14">Узнать подробнее</Button>
        </div>
        <div className="grid grid-cols-[53%_5%_47%]">
          <div>
            <div className="text-xs text-[#999999] xl:w-[120%] mt-3 text-[Inter] space-x-1.5"><Squares/><span>Длительность договора</span></div>
            <div>от 1 до 5 лет</div>
          </div>
          <div className="w-[1px] md:h-[80%] mt-[30%] bg-[#202020]"/>
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 text-[Inter] space-x-1.5"><Lightningicon/><span>Стоимость</span></div>
            <div className="w-[100%] mt-4 sm:mt-0 tracking-normal leading-tight font-bold text-[Inter]">от 1,7 млн рублей</div>
          </div>
        </div>
        <div className="grid grid-rows-[15%_auto] border border-[#202020] rounded-lg gap-4 p-4 md:p-6 mt-6">
          <div className="text-xs">Для вас</div>
          <div className="text-xs">Мы становимся вашим внешним IT-отделом под ключ. Управляйте разработкой, поддержкой и развитием цифровых решений без создания внутренней  команды. Мы фокусируемся на ваших задачах, а вы — на бизнесе</div>
        </div>
      </div>


      <div className="grid grid-rows-[30%_20%_50%] sm:grid-rows-[30%_20%_45%] md:grid-rows-[35%_15%_50%] border rounded border-[#262626] shadow-[0_0_0_6px_#191919] p-4 md:px-8 pb-7 md:pr-6 ml-[3%] lg:ml-0 w-[94.5%] lg:w-full h-[750px] md:h-[500px] lg:h-[650px]">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div>
            <div className="text-xs text-[#999999] md:w-[120%] mt-2 text-[Inter]">Если необходимо создать решение</div>
            <div className="text-base md:text-xl md:w-[120%] xl:w-[160%] tracking-normal leading-tight font-bold">Проектная коммерческая разработка</div>
          </div>
          <Button buttonType="purple" className="w-[180px] text-nowrap xl:ml-14 md:mt-8 xl:mt-14">Узнать подробнее</Button>
        </div>
        <div className="grid grid-cols-[53%_5%_47%]">
          <div>
            <div className="text-xs text-[#999999] xl:w-[120%] mt-3 text-[Inter] space-x-1.5"><Squares/><span>Длительность договора</span></div>
            <div>разработка 1 решения</div>
          </div>
          <div className="w-[1px] md:h-[80%] mt-[30%] bg-[#202020]"/>
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 text-[Inter] space-x-1.5"><Lightningicon/><span>Стоимость</span></div>
            <div className="w-[100%] mt-4 sm:mt-0 tracking-normal leading-tight font-bold text-[Inter]">от 750 000 рублей</div>
          </div>
        </div>
        <div className="grid grid-rows-[15%_auto] border border-[#202020] rounded-lg gap-4 p-4 md:p-6 mt-6">
          <div className="text-xs">Для вас</div>
          <div className="text-xs">Мы разрабатываем решение под конкретную задачу вашего бизнеса. Анализируем  процесс, проектируем решение, внедряем и при необходимости обеспечиваем поддержку</div>
        </div>
      </div>
    </div>
      );};
export default HomeContainer4;