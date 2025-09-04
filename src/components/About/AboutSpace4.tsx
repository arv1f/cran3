import { CirclePeople, CircleStar, CircleStudy } from "../../public/icons/CompanyValues";

function AboutSpace4() {
  return(
    <div className="grid grid-cols-1 grid-rows-[1_auto] md:grid-cols-[2fr_1fr] mt-12 gap-[1.5%] lg:gap-[5%] px-3 lg:px-0">
      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-[49%_1%_49%] md:grid-rows-[45%_1%_49%] gap-y-4 gap-x-[6px] lg:gap-4 border rounded border-[#262626] shadow-[0_0_0_6px_#191919] px-2 lg:px-8 py-10 md:h-[500px] mt-12 md:mt-4">
        <div className="col-start-1 row-start-1 p-2 min-h-[170px] w-[95%] py-4 md:py-0 -mt-6 md:mt-0">
          <div className="text-nowrap space-x-2"><CircleStar className="w-10 h-12 lg:w-[60px] lg:h-11 mb-1 text-[24px]"/><span>Ответственность</span></div>
          <div className="text-xs text-[#999999] mt-1 lg:mt-2">Мы не сдаём проект — мы отвечаем за то, как он работает в вашей среде</div>
        </div>
        
        
        <div className="col-start-1 md:col-start-3 row-start-2 md:row-start-1 p-2 min-h-[170px] w-[95%] py-4 md:py-0">
          <div className="text-nowrap space-x-2"><CircleStudy className="w-10 h-11 lg:w-[60px] lg:h-11 mb-1 text-[24px]"/><span>Человек в центре</span></div>
          <div className="text-xs text-[#999999] mt-1 lg:mt-2">Технологии служат людям — не заменяют, а усиливают их экспертность</div>
        </div>
        <div className="col-start-1 md:col-start-1 row-start-3 p-2 min-h-[170px] w-[95%] py-4 md:py-0">
          <div className="text-nowrap space-x-2"><CirclePeople className="w-10 h-11 lg:w-[60px] lg:h-11 mb-1 text-[24px]"/><span>Уважение к команде</span></div>
          <div className="text-xs text-[#999999] mt-1 lg:mt-2">Каждый специалист — не ресурс, а часть общей ответственности за результат</div>
        </div>
        
        <div className="col-start-1 md:col-start-3 row-start-4 md:row-start-3 p-2 min-h-[170px] w-[95%] py-4 md:py-0">
          <div className="text-nowrap space-x-2"><CircleStar className="w-10 h-11 lg:w-[60px] lg:h-11 mb-1 text-[24px]"/><span>Этика в ИИ</span></div>
          <div className="text-xs text-[#999999] mt-1 lg:mt-2">Автоматизируем рутину, а не рабочие места. Технологии — для повышения качества, а не давления</div>
        </div>

        <div className="hidden md:block col-start-2 row-start-1 border-l border-[#262626] -mt-4"></div>
        <div className="hidden md:block col-start-2 row-start-3 border-l border-[#262626]"></div>
        <div className="md:w-[190%] col-start-1 row-start-2 col-end-3 border-t w-[100%] border-[#262626] -mt-4 md:mt-0"></div>
        <div className="md:hidden col-start-1 row-start-3 col-end-3 border-t w-[100%] border-[#262626] -mt-4"></div>
        <div className="md:hidden col-start-1 row-start-4 col-end-3 border-t w-[100%] border-[#262626] -mt-4"></div>

      </div>
      <div className="row-start-1 md:col-start-2 flex flex-col gap-2 justify-center md:-mt-2">
        <img src="src\public\image\stars.png"alt="stars"
        className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%] md:scale-x-[-1] md:items-end -ml-[1px] md:ml-auto"/>
        <div className="text-2xl md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-10 font-[600]">Ценности <br className="hidden md:block"/>компании</div>
        <div className="text-xs text-[#999999]">Мы верим, что технологии должны работать на людей — внутри системы и за её пределами.</div>
      </div>
    </div>
  );
}

export default AboutSpace4;