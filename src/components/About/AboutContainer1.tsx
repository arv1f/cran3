import Cell from "../ui/Cell";
function AboutContainer1() {
  return(
    <div className="relative grid grid-cols-1 lg:grid-cols-[55.5%_44.5%] h-[550px] lg:h-[500px] mt-[86px] md:mt-[160px]">
      <div className="col-start-1 pt-1 w-[190%] z-10 px-4 lg:px-0 mt-10">
        <div className="text-[36px] md:text-[48px] lg:text-[56px] xl:text-[68px] 2xl:text-[96px] leading-none font-extrabold">НАША КОМПАНИЯ</div>
        <div className="text-xs text-[#999999] w-[50%] mt-4 text-[Inter]">CRAN Project — цифровой партнёр для промышленности, логистики и retail. Мы не внедряем системы ради систем. Мы начинаем с анализа процессов — и заканчиваем ростом вашей прибыли</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-[50%] mt-4 lg:mt-16 gap-3">
          <Cell heading="20+">Партнёров</Cell>
          <Cell heading="7">Направлений применения ИИ</Cell>
          <Cell heading="27%">Среднее снижение потерь</Cell>
        </div>
      </div>

      
      <div className="opacity-70 lg:opacity-100 col-start-1 lg:col-start-2 relative -z-1 h-[446px] border-2 border-[#141414] overflow-hidden">
    <img 
        className="w-full h-full object-cover hidden lg:block"
        src="src/public/image/Sub Container2.png"
        alt="Description"
    />
</div>
    </div>
  );};
export default AboutContainer1;

//sm: md: lg: xl: