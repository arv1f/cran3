function ContactContainer2() {
  return(
    <div className="relative grid grid-rows-6 md:grid-rows-3 lg:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-10 font-medium px-3 lg:px-0">
      <div className="col-start-1 row-start-1 inset-0 rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl p-[2px] bg-gradient-to-br from-[#5D3C7A] to-transparent z-0 ">
        <div className="px-3 grid grid-rows-[32%_auto] w-full h-full bg-[#0f0f0f] rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl bg-[linear-gradient(120.79deg,#9966CC_-49.01%,rgba(153,102,204,0)_13.65%)] py-8 px-2 lg:px-8">
          <div className="text-lg font-[700] text-white xl:text-nowrap">Прозрачный процесс</div>
          
          <div className="text-white text-xs font-medium">
            <span className="block text-[#999999]">Вы видите:</span>
            <ul className="list-none space-y-1 pl-0 text-[#999999]">
            {[
              "Что нужно сделать",
              "Кто отвечает",
              "Сроки и приоритет",
              "Прогресс в реальном времени"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-[6px] h-[6px] mt-[9px] mr-1 flex-shrink-0" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="5" r="5" fill="#999999"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-1 lg:col-start-2 lg:row-start-1 inset-0 rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl p-[2px] bg-gradient-to-br from-[#5D3C7A] to-transparent z-0 ">
        <div className="px-3 grid grid-rows-[32%_auto] w-full h-full bg-[#0f0f0f] rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl bg-[linear-gradient(120.79deg,#9966CC_-49.01%,rgba(153,102,204,0)_13.65%)] py-8 px-2 lg:px-8">
          <div className="text-lg font-[700] text-white xl:text-nowrap">Удобную коммуникацию</div>
          <div className="text-xs text-[#999999]">На нашей платформе непосредственно Вы отслеживаете этапы разработки, исполнителей и сроки</div>
        </div>
      </div>
      <div className="col-start-1 row-start-3 md:col-start-1 md:row-start-2 lg:col-start-3 lg:row-start-1 inset-0 rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl p-[2px] bg-gradient-to-br from-[#5D3C7A] to-transparent z-0 ">
        <div className="px-3 grid grid-rows-[32%_auto] w-full h-full bg-[#0f0f0f] rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl bg-[linear-gradient(120.79deg,#9966CC_-49.01%,rgba(153,102,204,0)_13.65%)] py-8 px-2 lg:px-8">
          <div className="text-lg font-[700] text-white xl:text-nowrap">Полноценный штат</div>
          <div className="text-xs text-[#999999]">Больше не нужно нанимать целый HR-отдел, чтобы он нанял IT-отдел, заниматься внутренним менеджментом и поиском добросовестного аутсорса</div>
        </div>
      </div>
      <div className="col-start-1 row-start-4 md:col-start-2 md:row-start-2 lg:col-start-1 lg:row-start-2 inset-0 rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl p-[2px] bg-gradient-to-br from-[#5D3C7A] to-transparent z-0 ">
        <div className="px-3 grid grid-rows-[32%_auto] w-full h-full bg-[#0f0f0f] rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl bg-[linear-gradient(120.79deg,#9966CC_-49.01%,rgba(153,102,204,0)_13.65%)] py-8 px-2 lg:px-8">
          <div className="text-lg font-[700] text-white xl:text-nowrap">Автоматизацию рутины </div>
          <div className="text-xs text-[#999999]">Убираем ручную работу<br />Интегрируем системы в единую среду<br />Делаем IT-поддержку предсказуемой</div>
        </div>
      </div>
      <div className="col-start-1 row-start-5 md:col-start-1 md:row-start-3 lg:col-start-2 lg:row-start-2 inset-0 rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl p-[2px] bg-gradient-to-br from-[#5D3C7A] to-transparent z-0 ">
        <div className="px-3 grid grid-rows-[32%_auto] w-full h-full bg-[#0f0f0f] rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl bg-[linear-gradient(120.79deg,#9966CC_-49.01%,rgba(153,102,204,0)_13.65%)] py-8 px-2 lg:px-8">
          <div className="text-lg font-[700] text-white xl:text-nowrap">Личную IT-инфраструктуру</div>
          <div className="text-xs text-[#999999]">Мы настраиваем и интегрируем все решения так, чтобы они работали с вашими системами: 1С, WMS, TMS, ERP.</div>
        </div>
      </div>
      <div className="col-start-1 row-start-6 md:col-start-2 md:row-start-3 lg:col-start-3 lg:row-start-2 inset-0 rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl p-[2px] bg-gradient-to-br from-[#5D3C7A] to-transparent z-0 ">
        <div className="px-3 grid grid-rows-[25%_auto] w-full h-full bg-[#0f0f0f] rounded-none rounded-tr-xl rounded-br-xl rounded-bl-xl  bg-[linear-gradient(120.79deg,#9966CC_-49.01%,rgba(153,102,204,0)_57.54%)] py-8 px-2 lg:px-8">
          <div className="text-2xl font-extrabold text-white">Время для фокуса<br />на главном</div>
        </div>
      </div>
    </div>
  );
};
export default ContactContainer2;