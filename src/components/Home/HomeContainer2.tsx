function HomeContainer2() {
  return(
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 px-1">
    <div className="grid grid-rows-[40px_auto_30%] border border-[#262626] p-6 px-3 xl:px-6 gap-10 rounded-lg">
      <div className="text-base lg:text-[16px] xl:text-[20px] font-extrabold w-full">Погружение в процессы</div>
      <div className="">
        <img src="src\public\image\Container (2).png" alt="" />
      </div>
      <div className="text-xs text-[#999999] w-[90%] text-[Inter]">Мы не начинаем с выбора платформы. Мы начинаем с анализа вашей операционной модели</div>
    </div>
    <div className="grid grid-rows-[40px_auto_30%] border border-[#262626] p-6 px-3 xl:px-6 gap-10 rounded-lg">
      <div className="text-base lg:text-[16px] xl:text-[20px] font-extrabold w-full">Скорость валидации решения</div>
      <div className="">
        <img src="src\public\image\Container (3).png" alt="" />
      </div>
      <div className="text-xs text-[#999999] w-[90%] text-[Inter]">Благодаря ИИ-усилению команды, мы формируем прототип за 2 недели — с учётом специфики вашего производства или логистики</div>
    </div>
    <div className="grid grid-rows-[40px_auto_30%] border border-[#262626] p-6 px-3 xl:px-6 gap-10 rounded-lg">
      <div className="text-base lg:text-[16px] xl:text-[20px] font-extrabold w-full">Фокус на бизнес-результат</div>
      <div className="">
        <img src="src\public\image\Container (4).png" alt="" />
      </div>
      <div className="text-xs text-[#999999] w-[90%] text-[Inter]">Мы не измеряем успех по срокам внедрения. Мы измеряем — по снижению издержек, росту точности, увеличению оборота</div>
    </div>
  </div>
  );};
export default HomeContainer2;