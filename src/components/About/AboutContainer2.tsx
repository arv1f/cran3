function AboutContainer2() {
  return(
    <div className='mt-8 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 w-[98.7%]'>
      <div className="grid gap-4 grid-rows-2 border border-[#262626] shadow-[0_0_0_6px_#191919] p-4 lg:p-7 md:px-9 md:pr-6 ml-[3%] w-[94.5%] lg:ml:-0 lg:w-full">
        <div className="text-base md:text-xl lg:text-2xl xl:text-[37px] xl:w-[120%] tracking-normal leading-tight font-extrabold">Глубина</div>
        <div className="text-xs text-[#999999] font-regular font-[Inter]">Изучаем проблемы до уровня операционных узких мест</div>
      </div>
      <div className="grid gap-4 grid-rows-2 border border-[#262626] shadow-[0_0_0_6px_#191919] p-4 lg:p-7 md:px-9 md:pr-6 ml-[3%] w-[94.5%] lg:ml:-0 lg:w-full">
        <div className="text-base md:text-xl lg:text-2xl xl:text-[37px] xl:w-[120%] tracking-normal leading-tight font-extrabold">Партнёрство</div>
        <div className="text-xs text-[#999999] font-regular font-[Inter]">Не подрядчик, который исчезает после сдачи. А партнёр, который отвечает за результат.</div>
      </div>
      <div className="grid gap-4 grid-rows-2 border border-[#262626] shadow-[0_0_0_6px_#191919] p-4 lg:p-7 md:px-9 md:pr-6 ml-[3%] w-[94.5%] lg:ml:-0 lg:w-full">
        <div className="text-base md:text-xl lg:text-2xl xl:text-[37px] xl:w-[120%] tracking-normal leading-tight font-extrabold">Результат</div>
        <div className="text-xs text-[#999999] font-regular font-[Inter]">Не отчёт. А прибыль, которую вы получаете уже в первые месяцы.</div>
      </div>
    </div>
  );
};
export default AboutContainer2;