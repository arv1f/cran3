import Zicon from "../../public/icons/Zicon";
import Button from "../ui/Button";
import Cell from "../ui/Cell";
function HomeContainer1() {
  return(
    <div className="mt-[130px] md:mt-[120px] relative grid grid-rows-[0px] lg:grid-rows-[100%] lg:grid-cols-1 lg:grid-cols-[60%_40%] xl:grid-cols-[55.5%_44.5%] h-[750px] lg:h-[664px] lg:px-7 w-full gap-10">
      <div className="col-start-1 pt-1 lg:mt-[115px] w-[97%] z-10">
        <div>
          <div className="text-[42px] sm:text-[70px] md:text-[72px] lg:text-[62px] xl:text-[75px] 2xl:text-[90px] leading-none font-black">РАЗРАБОТКА</div>{/*text-[96px] text-[40px]*/}
          <div className="text-[19px] sm:text-2xl md:text-[xs] lg:text-[28px] xl:text-[33px] 2xl:text-[40px] tracking-normal leading-tight font-[800] -mt-1">ОПТИМАЛЬНЫХ IT-РЕШЕНИЙ</div>
        </div>
        <div className="text-xs text-[#F5DFDF] mt-4 font-[Inter] font-medium">Мы анализируем бизнес-процессы, выявляем точки потерь, создаём и внедряем алгоритмы, которые повышают Вашу рентабельность</div>
        <Button buttonType="purple" className="mt-6 lg:mt-10 text-xl">Запросить аудит процессов</Button>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 w-[98.5%] md:mt-10 gap-4 xl:gap-6">
          <Cell className="text-[#F7D8D8]" heading="92%">Точность ИИ-<br className="hidden xl:block"/> решений в пилотах</Cell>
          <Cell className="text-[#F7D8D8]" heading="2000+">Часов анализа<br className="hidden xl:block"/> бизнес-процессов</Cell>
          <Cell className="text-[#F7D8D8]" heading="12">Направлений ИИ/ML<br className="hidden xl:block"/> в проектах</Cell>
        </div>
      </div>

      <div className="opacity-70 lg:opacity-100 col-start-1 lg:col-start-2 lg:top-0 relative w-[122.5%] -z-1">
        <img className="inset-0 w-full h-[780px] -ml-4 md:-ml-6 -mt-[65px] lg:-mt-[40px] lg:h-[660px] object-cover z-0"
        src="src\public\image\Container.png"/>
        <img className="absolute inset-0 w-full h-[620px] object-cover z-0 hidden lg:block"
        src="src\public\image\Untitled 1.png"/>

        <div className="absolute -left-[92px] xl:-left-[104px] top-[16.5%] z-30 hidden lg:block
          w-[50px] h-[50px] md:w-[85px] md:h-[85px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]">
          <img className="absolute inset-0 bg-cover bg-center animate-[spin_30s_linear_infinite]"
          src="src\public\image\Sub Container (1).png"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <Zicon className="w-[10px] h-[8px] sm:w-[12px] sm:h-[10px] md:w-[20px] h-[15px] lg:w-[40px] lg:h-[25px]"/>
          </div>
        </div>

      </div>

    </div>
  );};
export default HomeContainer1;

//sm: md: lg: xl: