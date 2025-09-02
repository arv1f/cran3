import Button from "../ui/Button";

function HomeSpace1() {
  return(
    <div className="ml-3">
      <img className="inset-0 w-[60px] h-[20px] object-cover z-0 lg:-ml-[2%] mt-2"
        src="src\public\image\stars.png"/>
      <div className="grid lg:grid-cols-[1fr_auto] mt-2">
        <div>
          <div className="text-sm md:text-[20px] lg:text-[24px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">Что нас отличает от типовых IT-интеграторов</div>
          <div className="text-xs text-[#999999] w-[90%] mt-3 text-[Inter]">Мы не просто внедряем технологии — мы интегрируем их в вашу операционную модель. Наша задача — не сроки и отчётность, а измеримое повышение эффективности вашего бизнеса</div>
        </div>
        <Button buttonType="purple" className="mt-9 lg:-ml-[20%] w-[200px] lg:w-[112%] text-medium">Подробнее</Button>
      </div>
    </div>
  );};
export default HomeSpace1;