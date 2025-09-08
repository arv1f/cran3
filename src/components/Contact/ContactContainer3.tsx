function ContactContainer3() {
  return(
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 px-3 lg:px-0">
      <div className="border border-[#262626]grid grid-rows-[10%_42%_3%_45%] sm:grid-rows-[13%_42%_5%_30%] p-6 h-[900px] lg:h-[505px]">
        <div className="row-start-1 text-lg font-[700] text-white xl:text-nowrap">Для среднего бизнеса</div>
        <div className="row-start-2 text-xs text-[#999999] font-medium">
            <ul className="list-none space-y-[6px] pl-0 text-[#999999]">
            {[
              "Поддержка и развитие одной ключевой системы (ERP, CRM, учёт и т.д.)",
              "Интеграция с 1С, WMS или другой основной системой",
              "Еженедельные статус-митинги и отчётность по KPI",
              "Доступ в платформу управления проектами — полный контроль за задачами и прогрессом"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-[6px] h-[6px] mt-[9px] mr-[8px] flex-shrink-0" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="5" fill="#999999"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
            </ul>
          </div>
        <div className="row-start-3 border-t w-[100%] border-[#262626] -mt-4"></div>
        <div className="row-start-4 grid grid-rows-3 lg:grid-cols-[30%_0.5%_34%_0.5%_32%] gap-1 h-[400px]">
          <div className="-ml-2 lg:ml-0 grid grid-rows-[50%_30%_auto] lg:grid-rows-[25%_40%_auto] gap-1 flex justify-center lg:items-center px-2">
            <div className="text-sm text-[#999999] text-left text-nowrap">Кол-во проектов в<br />месяц</div>
            <div className="text-lg font-[700] text-white min-w-[140px] text-left text-nowrap">2</div>
          </div>
          <div className="hidden lg:block border-l border-[#262626]"></div>
          <div className="grid grid-rows-[50%_30%_auto] lg:grid-rows-[25%_40%_auto] gap-1 flex justify-center items-center px-2">
            <div className="text-sm text-[#999999] text-left text-nowrap">Кол-во сотрудников<br />на проект</div>
            <div className="text-lg font-[700] text-white min-w-[140px] text-left text-nowrap">5</div>
          </div>
          <div className="hidden lg:block border-l border-[#262626]"></div>
          <div className="grid grid-rows-[50%_30%_auto] lg:grid-rows-[10%_50%_auto] gap-1 flex justify-center items-center px-3">
            <div className="text-sm text-[#999999] text-center">Стоимость</div>
            <div className="text-lg font-[700] text-white min-w-[140px] text-left text-nowrap">от 750 000 ₽ /<br />месяц</div>
          </div>
        </div>
      </div>

      <div className="border border-[#262626] grid grid-rows-[10%_52%_3%_35%] sm:grid-rows-[13%_42%_5%_40%] p-6 h-[820px] sm:h-[505px]">
        <div className="row-start-1 text-lg font-[700] text-white xl:text-nowrap">Для крупного бизнеса</div>
        <div className="row-start-2 text-xs text-[#999999] font-medium">
            <ul className="list-none space-y-[6px] pl-0 text-[#999999]">
            {[
              "Поддержка и развитие до 3 систем одновременно",
              "Глубокая интеграция с 1С, TMS, ERP, WMS и внутренними системами",
              "Приоритетный SLA: реакция на критические задачи — до 4 часов",
              "Еженедельная аналитика по эффективности решений (снижение издержек, рост точности)",
              "Доступ к платформе + персональный менеджер и технический архитектор"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-[6px] h-[6px] mt-[9px] mr-[8px] flex-shrink-0" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="5" fill="#999999"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
            </ul>
          </div>
        <div className="row-start-3 border-t w-[100%] border-[#262626] -mt-4"></div>
        <div className="row-start-4 grid grid-rows-3 lg:grid-cols-[30%_0.5%_34%_0.5%_32%] gap-1 h-[300px]">
          <div className="-ml-2 lg:ml-0 grid grid-rows-[30%_40%_auto] lg:grid-rows-[25%_40%_auto] gap-1 flex justify-center items-center px-2">
            <div className="text-sm text-[#999999] text-left text-nowrap">Кол-во проектов в<br />месяц</div>
            <div className="text-lg font-[700] text-white min-w-[140px] text-left text-nowrap">5</div>
          </div>
          <div className="hidden lg:block border-l border-[#262626]"></div>
          <div className="grid grid-rows-[30%_40%_auto] lg:grid-rows-[25%_40%_auto] gap-1 flex justify-center items-center px-2">
            <div className="text-sm text-[#999999] text-left text-nowrap">Кол-во сотрудников<br />на проект</div>
            <div className="text-lg font-[700] text-white min-w-[140px] text-left text-nowrap">15</div>
          </div>
          <div className="hidden lg:block border-l border-[#262626]"></div>
          <div className="grid grid-rows-[30%_45%_auto] lg:grid-rows-[10%_50%_auto] gap-1 flex justify-center items-center px-3">
            <div className="text-sm text-[#999999] text-center">Стоимость</div>
            <div className="text-lg font-[700] text-white min-w-[140px] text-left text-nowrap">от 1 750 000 ₽ /<br />месяц</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactContainer3;