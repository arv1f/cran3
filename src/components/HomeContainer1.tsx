import Zicon from "../public/icons/Zicon";
import Button from "./ui/Button";
import Cell from "./ui/Cell";
function HomeContainer1() {
  return(
    <div className="relative grid grid-cols-[55.5%_44.5%] h-[664px]">
      <div className="mt-[115px] w-[190%]">
        <div>
          <div className="text-[36px] md:text-[48px] lg:text-[58px] xl:text-[76px] 2xl:text-[96px] leading-none font-extrabold">РАЗРАБОТКА</div>{/*text-[96px] text-[40px]*/}
          <div className="text-sm md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] tracking-normal leading-tight font-[800]">ОПТИМАЛЬНЫХ IT-РЕШЕНИЙ</div>
        </div>
        <div className="text-xs text-[#F5DFDF] w-[50%] mt-4 text-[Inter]">Мы анализируем бизнес-процессы, выявляем точки потерь, создаём и внедряем алгоритмы, которые повышают Вашу рентабельность</div>
        <Button buttonType="purple" className="mt-10 text-xl">Запросить аудит процессов</Button>
        <div className="grid grid-cols-3 w-[50%] mt-10 gap-3">
          <Cell heading="92%">Точность ИИ-решений в пилотах</Cell>
          <Cell heading="2000+">Часов анализа бизнес-процессов</Cell>
          <Cell heading="12">Направлений ИИ/ML в проектах</Cell>
        </div>
      </div>

      <div className="absolute right-[39.3%] top-[15.9%] z-30 
      w-[50px] h-[50px] md:w-[85px] md:h-[85px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]">
        <img className="absolute inset-0 bg-cover bg-center animate-[spin_30s_linear_infinite]"
        src="src\public\image\Sub Container (1).png"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <Zicon className="w-[10px] h-[8px] sm:w-[12px] sm:h-[10px] md:w-[20px] h-[15px] lg:w-[25px] lg:h-[20px]"/>
        </div>
      </div>

      <div className="relative -z-3 w-[122.5%]">
        <img className="inset-0 w-full h-[610px] object-cover z-0"
        src="src\public\image\Container.png"/>
        <img className="absolute inset-0 w-full h-[610px] object-cover z-0"
        src="src\public\image\Untitled 1.png"/>
      </div>
    </div>
  );};
export default HomeContainer1;

//sm: md: lg: xl: