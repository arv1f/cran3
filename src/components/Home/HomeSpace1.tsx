import Button from "../ui/Button";

function HomeSpace1() {
  return(
    <div className="ml-1">
      <img className="inset-0 w-[60px] h-[20px] object-cover z-0 lg:-ml-[2%] mt-8"
        src="src\public\image\stars.png"/>
      <div className="grid lg:grid-cols-[auto_115px] mt-5">
        <div>
          <div className="tracking-wider text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[42px] font-[800] leading-none w-[96%] sm:w-[107%] xl:w-full">Что нас отличает от типовых IT-интеграторов</div>
          <div className="text-xs text-[#999999] w-[90%] mt-7 sm:mt-3 font-[Inter] font-medium">Мы не просто внедряем технологии — мы интегрируем их в вашу операционную модель. Наша задача — не сроки и отчётность, а измеримое повышение эффективности вашего бизнеса</div>
        </div>
        <Button buttonType="purple" className="mt-5 lg:mt-9 lg:-ml-[20%] w-[201px] lg:w-[112%]">Подробнее</Button>
      </div>
    </div>
  );};
export default HomeSpace1;