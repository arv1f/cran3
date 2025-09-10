import Cell from "../ui/Cell";
function AboutContainer1() {
  return(
    <div className="relative grid grid-cols-1 lg:grid-cols-[55.5%_44.5%] h-[550px] lg:h-[500px] mt-[146px] md:mt-[160px] gap-2">
      <div className="col-start-1 pt-1 z-10 lg:px-0 lg:mt-8">
        <div className="text-[42px] sm:text-[44px] md:text-[48px] lg:text-[56px] xl:text-[66px] 2xl:text-[80px] leading-none font-extrabold">НАША КОМПАНИЯ</div>
        <div className="text-xs text-[#999999] w-[90%] mt-6 font-[Inter]">CRAN Project — цифровой партнёр для промышленности, логистики и retail. Мы не внедряем системы ради систем. Мы начинаем с анализа процессов — и заканчиваем ростом вашей прибыли</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 lg:mt-6 xl:mt-16 gap-3 h-[130px] lg:w-[90%]">
          <Cell heading={<div className="mt-3">20+</div>}>Партнёров</Cell>
          <Cell heading={<div className="mt-3">7</div>}>Направлений применения ИИ</Cell>
          <Cell heading={<div className="mt-3">27%</div>}>Среднее снижение потерь</Cell>
        </div>
      </div>

      
      <div className="hidden lg:block col-start-2 relative -z-1 h-[446px] border-2 border-[#141414] overflow-hidden mt-2">
    <img 
        className="w-full h-full object-cover"
        src="src/public/image/Sub Container2.png"
        alt="Description"
    />
</div>
    </div>
  );};
export default AboutContainer1;

//sm: md: lg: xl: