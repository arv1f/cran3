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
        <a className="text-[#999999] text-sm cursor-poiner hover:text-white hover:opacity-80 h-fit w-fit">Главная</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Главный банер</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">О нас</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Подход</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Сотрудничество</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Отзывы</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Блог</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Заявка</a>
      </div>
      <div className="grid grid-rows-5 grid-cols-2 lg:grid-cols-1 lg:grid-rows-9 h-[225px] lg:h-[405px]">
        <a className="text-[#999999] text-sm cursor-poiner hover:text-white hover:opacity-80 h-fit w-fit">О компании</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Главный банер</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Миссия</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Преимущества</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Команда</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Ценности</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Вакансии</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Документы</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Заявка</a>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 lg:grid-cols-1 lg:grid-rows-5 h-[135px] lg:h-[225px]">
        <a className="text-[#999999] text-sm cursor-poiner hover:text-white hover:opacity-80 h-fit w-fit">Блог</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Главный банер</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Поиск</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Статьи</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Рассылка</a>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 lg:grid-cols-1 lg:grid-rows-6 h-[135px] lg:h-[270px]">
        <a className="text-[#999999] text-sm cursor-poiner hover:text-white hover:opacity-80 h-fit w-fit">Sevices</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Valuation Mastery</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Strategic Marketing</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Negotiation Wizardry</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Closing Success</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Property Managment</a>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 lg:grid-cols-1 lg:grid-rows-3 h-[90px] lg:h-[135px]">
        <a className="text-[#999999] text-sm cursor-poiner hover:text-white hover:opacity-80 h-fit w-fit">Contact Us</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Contact Form</a>
        <a className="opacity-85 cursor-pointer hover:opacity-100 h-4 w-fit">Our Offices</a>
      </div>
    </div>
  );
};
export default Footer;