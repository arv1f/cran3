import CRANicon from "../public/icons/CRANicon";

function Footer() {
  return(
    <div className="grid grid-rows-[10%_auto] lg:grid-rows px-3 lg:px-0 lg:grid-cols-[36%_12.8%_12.8%_12.8%_12.8%_12.8%] text-xs gap-2 mt-24 h-[1000px] lg:h-[500px]">
      <div>
        <div className="lg:-ml-6 grid grid-cols-[38px_auto] md:grid-cols-[40px_auto] lg:grid-cols-[44px_auto] col-start-1 h-[48px] lg:h-[55px] mt-[2px]"> 
          <div className="w-[34px] md:w-[36px] lg:w-[40px]">
            <CRANicon size={"100%"}/>
          </div>
          <div className="grid grid-rows-[50%] md:grid-rows-[50%] lg:grid-rows-[60%] h-[50px]">
            <div className="text-xl md:text-xl lg:text-2xl font-semibold tracking-wider ">CRAN</div>
            <div className="text-xs font-thin tracking-wider">Digital Agency</div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-4 grid-cols-2 lg:grid-cols-1 lg:grid-rows-8 h-[180px] lg:h-[360px]">
        <div className="text-[#999999] text-sm">Главная</div>
        <div>Главный банер</div>
        <div>О нас</div>
        <div>Подход</div>
        <div>Сотрудничество</div>
        <div>Отзывы</div>
        <div>Блог</div>
        <div>Заявка</div>
      </div>
      <div className="grid grid-rows-5 grid-cols-2 lg:grid-cols-1 lg:grid-rows-9 h-[225px] lg:h-[405px]">
        <div className="text-[#999999] text-sm">О компании</div>
        <div>Главный банер</div>
        <div>Миссия</div>
        <div>Преимущества</div>
        <div>Команда</div>
        <div>Ценности</div>
        <div>Вакансии</div>
        <div>Документы</div>
        <div>Заявка</div>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 lg:grid-cols-1 lg:grid-rows-5 h-[135px] lg:h-[225px]">
        <div className="text-[#999999] text-sm">Блог</div>
        <div>Главный банер</div>
        <div>Поиск</div>
        <div>Статьи</div>
        <div>Рассылка</div>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 lg:grid-cols-1 lg:grid-rows-6 h-[135px] lg:h-[270px]">
        <div className="text-[#999999] text-sm">Sevices</div>
        <div>Valuation Mastery</div>
        <div>Strategic Marketing</div>
        <div>Negotiation Wizardry</div>
        <div>Closing Success</div>
        <div>Property Managment</div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 lg:grid-cols-1 lg:grid-rows-3 h-[90px] lg:h-[135px]">
        <div className="text-[#999999] text-sm">Contact Us</div>
        <div>Contact Form</div>
        <div>Our Offices</div>
      </div>
    </div>
  );
};
export default Footer;