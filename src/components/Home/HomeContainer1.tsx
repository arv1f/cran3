import Zicon from "../../public/icons/Zicon";
import Button from "../ui/Button";
import Cell from "../ui/Cell";
function HomeContainer1() {
  return(
    <div className="mt-[130px] md:mt-[120px] relative grid grid-rows-[0px] lg:grid-rows-[100%] lg:grid-cols-1 lg:grid-cols-[55.5%_44.5%] h-[800px] lg:h-[664px] w-full">
      <div className="col-start-1 pt-1 lg:mt-[115px] w-[100%] z-10 px-[4%]">
        <div>
          <div className="text-[36px] md:text-[48px] lg:text-[56px] xl:text-[72px] 2xl:text-[96px] leading-none font-extrabold">РАЗРАБОТКА</div>{/*text-[96px] text-[40px]*/}
          <div className="text-sm md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] tracking-normal leading-tight font-[800]">ОПТИМАЛЬНЫХ IT-РЕШЕНИЙ</div>
        </div>
        <div className="text-xs text-[#F5DFDF] w-[100%] mt-4 text-[Inter]">Мы анализируем бизнес-процессы, выявляем точки потерь, создаём и внедряем алгоритмы, которые повышают Вашу рентабельность</div>
        <Button buttonType="purple" className="mt-10 text-xl">Запросить аудит процессов</Button>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-[100%] mt-10 gap-3">
          <Cell heading="92%">Точность ИИ-решений в пилотах</Cell>
          <Cell heading="2000+">Часов анализа бизнес-процессов</Cell>
          <Cell heading="12">Направлений ИИ/ML в проектах</Cell>
        </div>
      </div>

      <div className="opacity-70 lg:opacity-100 col-start-1 lg:col-start-2 lg:top-0 relative w-[122.5%] -z-1">
        <img className="inset-0 w-full h-[820px] -mt-[65px] lg:-mt-[40px] lg:h-[660px] object-cover z-0"
        src="src\public\image\Container.png"/>
        <img className="absolute inset-0 w-full h-[620px] object-cover z-0 hidden lg:block"
        src="src\public\image\Untitled 1.png"/>

        <div className="absolute -left-[62px] xl:-left-[70px] top-[19.5%] z-30 hidden lg:block
          w-[50px] h-[50px] md:w-[85px] md:h-[85px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px]">
          <img className="absolute inset-0 bg-cover bg-center animate-[spin_30s_linear_infinite]"
          src="src\public\image\Sub Container (1).png"/>
          <div className="absolute inset-0 flex items-center justify-center">
            <Zicon className="w-[10px] h-[8px] sm:w-[12px] sm:h-[10px] md:w-[20px] h-[15px] lg:w-[25px] lg:h-[20px]"/>
          </div>
        </div>

      </div>

    </div>
  );};
export default HomeContainer1;

//sm: md: lg: xl: