function HomeContainer2() {
  return(
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 mt-14 sm:px-[10%] md:px-1">
    <div className="grid grid-rows-[80px_auto_30%] sm:grid-rows-[60px_auto_30%] xl:grid-rows-[40px_auto_30%] border border-[#262626] p-7 xl:p-10 px-3 lg:px-5 xl:px-8 gap-5">
      <div className="text-xl sm:text-[29px] md:text-[26px] lg:text-[21px] xl:text-[21px] 2xl:text-[26px] font-extrabold">Погружение в процессы</div>
      <div className="">
        <img src="src\public\image\Container (2).png" alt="" className="w-full" />
      </div>
      <div className="text-sm lg:text-xs text-[#999999] w-[90%] font-[Inter]">Мы не начинаем с выбора платформы. Мы начинаем с анализа вашей операционной модели</div>
    </div>
    <div className="grid grid-rows-[80px_auto_30%] sm:grid-rows-[60px_auto_30%] xl:grid-rows-[40px_auto_30%] border border-[#262626] p-7 xl:p-10 px-3 lg:px-5 xl:px-8 gap-5">
      <div className="text-xl sm:text-[29px] md:text-[26px] lg:text-[21px] xl:text-[21px] 2xl:text-[26px] font-extrabold">Скорость валидации решения</div>
      <div className="">
        <img src="src\public\image\Container (3).png" alt="" className="w-full" />
      </div>
      <div className="text-sm lg:text-xs text-[#999999] w-[90%] font-[Inter]">Благодаря ИИ-усилению команды, мы формируем прототип за 2 недели — с учётом специфики вашего производства или логистики</div>
    </div>
    <div className="grid grid-rows-[80px_auto_30%] sm:grid-rows-[60px_auto_30%] xl:grid-rows-[40px_auto_30%] border border-[#262626] p-7 xl:p-10 px-3 lg:px-5 xl:px-8 gap-5">
      <div className="text-xl sm:text-[29px] md:text-[26px] lg:text-[21px] xl:text-[21px] 2xl:text-[26px] font-extrabold">Фокус на бизнес-результат</div>
      <div className="">
        <img src="src\public\image\Container (4).png" alt="" className="w-full" />
      </div>
      <div className="text-sm lg:text-xs text-[#999999] w-[90%] font-[Inter]">Мы не измеряем успех по срокам внедрения. Мы измеряем — по снижению издержек, росту точности, увеличению оборота</div>
    </div>
  </div>
  );};
export default HomeContainer2;