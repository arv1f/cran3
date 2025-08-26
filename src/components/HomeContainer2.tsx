function HomeContainer2() {
  return(
  <div className="grid grid-cols-[1fr_1fr_1fr] gap-8 mt-14">
    <div className="grid grid-rows-[8%_] border border-[#262626] p-6 gap-6 rounded-lg">
      <div className="text-xs lg:text-[16px] xl:text-[20px] font-extrabold w-full">Погружение в процессы</div>
      <div className="">
        <img src="src\public\image\Container (2).png" alt="" />
      </div>
      <div className="text-xs text-[#999999] w-[90%] text-[Inter]">Мы не начинаем с выбора платформы. Мы начинаем с анализа вашей операционной модели</div>
    </div>
    <div className="grid grid-rows-[8%_] border border-[#262626] p-6 gap-6 rounded-lg">
      <div className="text-xs lg:text-[16px] xl:text-[20px] font-extrabold w-full">Скорость валидации решения</div>
      <div className="">
        <img src="src\public\image\Container (3).png" alt="" />
      </div>
      <div className="text-xs text-[#999999] w-[90%] text-[Inter]">Благодаря ИИ-усилению команды, мы формируем прототип за 2 недели — с учётом специфики вашего производства или логистики</div>
    </div>
    <div className="grid grid-rows-[8%_] border border-[#262626] p-6 gap-6 rounded-lg">
      <div className="text-xs lg:text-[16px] xl:text-[20px] font-extrabold w-full">Фокус на бизнес-результат</div>
      <div className="">
        <img src="src\public\image\Container (4).png" alt="" />
      </div>
      <div className="text-xs text-[#999999] w-[90%] text-[Inter]">Мы не измеряем успех по срокам внедрения. Мы измеряем — по снижению издержек, росту точности, увеличению оборота</div>
    </div>
  </div>
  );};
export default HomeContainer2;