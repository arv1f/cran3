import { Squares, Lightningicon } from "../../public/icons/HC4icons";
import Button from "../ui/Button";


function HomeContainer4() {
  return(
    <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full md:px-3'>
      <div className="grid gap-3 grid-rows-[30%_20%_50%] sm:grid-rows-[30%_20%_45%] md:grid-rows-[140px_80px_auto] lg:grid-rows-[200px_80px_auto] xl:grid-rows-[120px_60px_auto] border border-[#262626] shadow-[0_0_0_6px_#191919] p-4 px-2 sm:px-4 md:px-8 pb-8 ml-[3%] lg:ml-0 w-[94.5%] lg:w-full h-[700px] md:h-[500px] lg:h-[620px] xl:h-[500px]">
        <div className="grid grid-rows-[auto_100px] xl:grid-cols-[auto_180px]">
          <div>
            <div className="text-xs text-[#999999] lg:text-nowrap mt-2 font-[Inter] font-medium">Если необходим постоянный IT- отдел</div>
            <div className="text-base md:text-xl tracking-normal leading-tight font-bold mt-1">Внешний цифровой партнёр</div>
          </div>
          <Button buttonType="purple" className="w-[180px] text-nowrap mt-4 xl:mt-7">Узнать подробнее</Button>
        </div>
        <div className="grid grid-cols-[53%_5%_47%]">
          <div>
            <div className="text-xs text-[#999999] xl:w-[120%] mt-3 font-[Inter] font-medium space-x-1.5"><Squares/><span>Длительность договора</span></div>
            <div className="text-[16px] mt-2 font-[Inter] font-medium">от 1 до 5 лет</div>
          </div>
          <div className="w-[1px] md:h-[100%] mt-[30%] bg-[#202020]"/>
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 font-[Inter] font-medium space-x-1.5"><Lightningicon/><span>Стоимость</span></div>
            <div className="w-[100%] mt-4 sm:mt-2 tracking-normal leading-tight font-[Inter] font-extrabold">от 1,7 млн рублей</div>
          </div>
        </div>
        <div className="grid grid-rows-[15%_auto] border border-[#202020] gap-4 p-4 md:p-6 mt-6">
          <div className="text-xs font-[Inter] font-semibold">Для вас</div>
          <div className="text-xs font-[Inter] font-medium">Мы становимся вашим внешним IT-отделом под ключ. Управляйте разработкой, поддержкой и развитием цифровых решений без создания внутренней  команды. Мы фокусируемся на ваших задачах, а вы — на бизнесе</div>
        </div>
      </div>


      <div className="grid gap-3 grid-rows-[30%_20%_50%] sm:grid-rows-[30%_20%_45%] md:grid-rows-[140px_80px_auto] lg:grid-rows-[200px_80px_auto] xl:grid-rows-[120px_60px_auto] border border-[#262626] shadow-[0_0_0_6px_#191919] p-4 px-2 sm:px-4 md:px-8 pb-8 ml-[3%] lg:ml-0 w-[94.5%] lg:w-full h-[700px] md:h-[500px] lg:h-[620px] xl:h-[500px]">
        <div className="grid grid-rows-[auto_100px] xl:grid-cols-[auto_180px]">
          <div>
            <div className="text-xs text-[#999999] lg:text-nowrap mt-2 font-[Inter] font-medium">Если необходимо создать решение</div>
            <div className="text-base md:text-xl tracking-normal leading-tight font-bold mt-1">Проектная коммерческая разработка</div>
          </div>
          <Button buttonType="purple" className="w-[180px] text-nowrap mt-4 xl:mt-7">Узнать подробнее</Button>
        </div>
        <div className="grid grid-cols-[53%_5%_47%]">
          <div>
            <div className="text-xs text-[#999999] xl:w-[120%] mt-3 font-[Inter] font-medium space-x-1.5"><Squares/><span>Длительность договора</span></div>
            <div className="text-[16px] mt-2 font-[Inter] font-medium">разработка 1 решения</div>
          </div>
          <div className="w-[1px] md:h-[100%] mt-[30%] bg-[#202020]"/>
          <div>
            <div className="text-xs text-[#999999] w-[120%] mt-3 font-[Inter] font-medium space-x-1.5"><Lightningicon/><span>Стоимость</span></div>
            <div className="w-[100%] mt-4 sm:mt-2 tracking-normal leading-tight font-[Inter] font-extrabold">от 750 000 рублей</div>
          </div>
        </div>
        <div className="grid grid-rows-[15%_auto] border border-[#202020] gap-4 p-4 md:p-6 mt-6">
          <div className="text-xs font-[Inter] font-semibold">Для вас</div>
          <div className="text-xs font-[Inter] font-medium">Мы разрабатываем решение под конкретную задачу вашего бизнеса. Анализируем  процесс, проектируем решение, внедряем и при необходимости обеспечиваем поддержку</div>
        </div>
      </div>
    </div>
      );};
export default HomeContainer4;