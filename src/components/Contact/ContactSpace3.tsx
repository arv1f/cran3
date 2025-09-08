function ContactSpace3() {
  return(
    <div className="mt-6 px-3 lg:px-0 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-2">
      <div className="ml-3">
        <img className="inset-0 w-[60px] h-[20px] object-cover z-0 lg:-ml-[4%] mt-2"
          src="src\public\image\stars.png"/>
        <div className="grid lg:grid-cols-[1fr_auto] mt-2">
          <div>
            <div className="text-2xl md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">Оставьте заявку<br />-- проведём аудит</div>
            <div className="text-base text-[#999999] w-[90%] mt-3 text-[Inter] mt-[100px]">Ореинтеровочная стоимость</div>
            <div className="text-2xl md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">от 750 000 руб</div>
          </div>
        </div>
      </div>

      <div className="border border-[#262626] grid grid-rows-[10%_0%_45%] lg:grid-rows-[12%_4%_40%_4%_40%] gap-y-2 p-6 h-[900px] lg:h-[420px] mt-8">
        <div className="row-start-1 text-base sm:text-lg font-[700] text-white xl:text-nowrap">Гибкий тариф —<br className="sm:hidden" />соберите свой объём</div>
        <div className="hidden lg:block row-start-2 border-t border-[#262626]" />
        <div className="row-start-3 grid grid-rows-2 lg:grid-cols-[47%_0%_47%] gap-4">
          <div className="col-start-1 space-y-7 w-full">
            <div className="text-xs text-[#999999]">Выберите количество задач в месяц (от 1 до 20)</div>
            <div className="max-h-[70px] border border-[#262626] bg-[#1A1A1A] text-[#666666] px-3 py-3">
              <input type="text" placeholder="Enter First Name" className="bg-transparent outline-none placeholder-[#666666]"/>
            </div>
          </div>
          <div className="hidden lg:block col-start-2 border-l border-[#262626]"/>
          <div className="lg:col-start-3 space-y-3 w-full">
            <div className="text-xs text-[#999999]">Добавьте специалистов: разработчик, аналитик,<br/> ML-инженер и др.</div>
            <div className="max-h-[70px] border border-[#262626] bg-[#1A1A1A] text-[#666666] px-3 py-3">
              <input type="text" placeholder="Enter First Name" className="bg-transparent outline-none placeholder-[#666666]"/>
            </div>
          </div>
        </div>
        <div className="hidden lg:block row-start-4 border-t border-[#262626]" />
        <div className="row-start-5 grid grid-rows-2 lg:grid-cols-[47%_0%_47%] gap-4">
          <div className="col-start-1 space-y-3 w-full">
            <div className="text-xs text-[#999999]">Укажите необходимость интеграций, поддержки,<br /> внедрения ИИ</div>
            <div className="max-h-[70px] border border-[#262626] bg-[#1A1A1A] text-[#666666] px-3 py-3">
              <input type="text" placeholder="Enter First Name" className="bg-transparent outline-none placeholder-[#666666]"/>
            </div>
          </div>
          <div className="hidden lg:block col-start-2 border-l border-[#262626]" />
          <div className="lg:col-start-3 space-y-7 w-full">
            <div className="text-xs text-[#999999]">Уточните SLA: стандартный или приоритетный</div>
            <div className="max-h-[70px] border border-[#262626] bg-[#1A1A1A] text-[#666666] px-3 py-3">
              <input type="text" placeholder="Enter First Name" className="bg-transparent outline-none placeholder-[#666666]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSpace3;