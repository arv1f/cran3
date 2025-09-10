function AboutSpace4() {
  return(
    <div className="grid grid-cols-1 grid-rows-[140px_auto] md:grid-rows-[auto] md:grid-cols-[2fr_1fr] mt-16 gap-[1.5%] sm:gap-4 xl:gap-[4%] px-3 lg:px-0">
      <div className="grid grid-cols-1 grid-rows-[20%_25%_auto_20%] md:grid-cols-[49%_1%_49%] md:grid-rows-[45%_1%_49%] gap-y-4 gap-x-[6px] lg:gap-4 border border-[#262626] shadow-[0_0_0_6px_#191919] px-2 lg:px-8 py-10 md:h-[460px] xl:h-[360px] mt-12 md:mt-4">
        <div className="col-start-1 row-start-1 p-2 px-1 min-h-[170px] w-[95%] py-4 md:py-0 -mt-6 md:mt-0">
          <div className="font-extrabold tracking-wider text-[23px] md:text-base lg:text-xl whitespace-normal">Ответственность</div>
          <div className="text-xs text-[#999999] mt-1 lg:mt-2 font-[Inter] font-medium">Мы не сдаём проект — мы отвечаем за то, как он работает в вашей среде</div>
        </div>
        
        
        <div className="col-start-1 md:col-start-3 row-start-2 md:row-start-1 p-2 px-1 min-h-[170px] w-[95%] py-4 md:py-0">
          <div className="font-extrabold tracking-wider text-[23px] md:text-base lg:text-xl">Человек в центре</div>
          <div className="text-xs text-[#999999] mt-1 lg:mt-2 font-[Inter] font-medium">Технологии служат людям — не заменяют, а усиливают их экспертность</div>
        </div>
        <div className="col-start-1 md:col-start-1 row-start-3 p-2 px-1 min-h-[170px] w-[95%] py-4 md:py-0">
          <div className="font-extrabold tracking-wider text-[23px] md:text-base lg:text-xl">Уважение к команде</div>
          <div className="text-xs text-[#999999] mt-1 lg:mt-2 font-[Inter] font-medium">Каждый специалист — не ресурс, а часть общей ответственности за результат</div>
        </div>
        
        <div className="col-start-1 md:col-start-3 row-start-4 md:row-start-3 p-2 px-1 min-h-[170px] w-[95%] py-4 md:py-0">
          <div className="font-extrabold tracking-wider text-[23px] md:text-base lg:text-xl">Этика в ИИ</div>
          <div className="text-xs text-[#999999] mt-1 lg:mt-2 font-[Inter] font-medium">Автоматизируем рутину, а не рабочие места. Технологии — для повышения качества, а не давления</div>
        </div>

        <div className="hidden md:block col-start-2 row-start-1 xl:h-[120px] border-l border-[#262626] -mt-4"></div>
        <div className="hidden md:block col-start-2 row-start-3 xl:h-[120px] border-l border-[#262626]"></div>
        <div className="md:w-[190%] col-start-1 row-start-2 col-end-3 border-t w-[100%] border-[#262626] -mt-4 md:mt-0"></div>
        <div className="md:hidden col-start-1 row-start-3 col-end-3 border-t w-[100%] border-[#262626] -mt-4"></div>
        <div className="md:hidden col-start-1 row-start-4 col-end-3 border-t w-[100%] border-[#262626] -mt-4"></div>

      </div>
      <div className="row-start-1 md:col-start-2 flex flex-col items-end justify-center mt-6">
      <img src="src\public\image\starsRight.png" alt="stars"
        className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%]"/>
        <div className="w-full flex flex-col items-end mt-2">
          <div className="text-right md:text-left tracking-wider text-[30px] sm:text-[31px] md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[42px] font-[800] w-full">
            Ценности <br className="hidden md:block"/>компании
          </div>
          <div className="text-right md:text-left text-xs text-[#999999] mt-3 font-[Inter] font-medium">
            Мы верим, что технологии должны работать на людей — внутри системы и за её пределами.
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutSpace4;