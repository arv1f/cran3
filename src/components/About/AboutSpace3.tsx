function AboutSpace3() {
  return(
    <div className="ml-4 lg:ml-2 mt-16">
      <img className="inset-0 w-[60px] h-[20px] object-cover z-0 lg:-ml-[2%] mt-2"
        src="src\public\image\stars.png"/>
      <div className="grid lg:grid-cols-[1fr_auto] mt-2">
        <div>
          <div className="text-sm md:text-[20px] lg:text-[24px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">Основная команда</div>
          <div className="text-xs text-[#999999] w-[90%] mt-3 text-[Inter]">
          Мы не теоретики. Мы решаем задачи, которые влияют на прибыль
          </div>
        </div>
      </div>
    </div>
  );};
export default AboutSpace3;