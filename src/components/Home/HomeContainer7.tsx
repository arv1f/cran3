import { useState } from 'react';
import { Circleactiveicon, Circleicon, Emailicon, Phoneicon, Telegramicon } from "../../public/icons/HC7icons";
import Button from "../ui/Button";

// import Input from "./ui/CustomInput";
function HomeContainer7() {
  const [activeField, setActiveField] = useState<string | null>(null);
  return(
    <div className="grid gap-8 md:gap-0 grid-rows-[190px_auto_200px] lg:grid-rows-[45%_35%_20%] border border-[#262626] p-4 px-2 md:px-4 md:p-8 lg:p-16 lg:px-10 h-[700px] lg:h-[460px] mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[15%_35%_15%_35%] h-[200px] lg:grid-rows-[25%_auto] gap-x-8">
          <span className="text-sm row-start-1 col-start-1">Имя*</span>
          <input placeholder="Введите ваше имя" type="text" className="row-start-2 col-start-1 placeholder-[#666666] bg-[#1A1A1A] text-[#FFFFFF] text-sm border border-[#262626] px-3 h-11" />
          <span className="text-sm row-start-3 col-start-1 lg:row-start-1 lg:col-start-2">Компания</span>
          <input placeholder="Название вашей компании" type="text" className="row-start-4 col-start-1 lg:row-start-2 lg:col-start-2 placeholder-[#666666] bg-[#1A1A1A] text-[#FFFFFF] text-sm border border-[#262626] px-3 h-11" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-[15%_25%_25%_35%] h-[250px] lg:grid-rows-[15%_auto] gap-x-2 lg:gap-x-4">
          <span className="text-sm row-start-1">Контакты*</span>
          
          <div className="max-h-[70px] flex items-center space-x-2 row-start-2 col-start-1 bg-[#1A1A1A] text-[#FFFFFF] text-xs border border-[#262626] px-2 h-11"
          onClick={() => setActiveField('phone')}>
            <div className="flex-shrink-0" />
            <Phoneicon />
            <input type="text" placeholder="Введите номер телефона" onFocus={() => setActiveField('phone')}
            className="flex-1 bg-transparent outline-none placeholder-[#666666]"/>
            {activeField === 'phone' ? <Circleactiveicon /> : <Circleicon />}
          </div>
          <div className="max-h-[70px] flex items-center space-x-2 row-start-3 lg:row-start-2 lg:col-start-2 bg-[#1A1A1A] text-[#FFFFFF] text-xs border border-[#262626] px-2 h-11"
          onClick={() => setActiveField('email')}>
            <div className="flex-shrink-0" />
            <Emailicon />
            <input type="text" placeholder="Введите email" onFocus={() => setActiveField('email')}
            className="flex-1 bg-transparent outline-none placeholder-[#666666]"/>
            {activeField === 'email' ? <Circleactiveicon /> : <Circleicon />}
          </div>
          <div className="max-h-[70px] flex items-center space-x-2 row-start-4 lg:row-start-2 lg:col-start-3 bg-[#1A1A1A] text-[#FFFFFF] text-xs border border-[#262626] px-2 h-11"
          onClick={() => setActiveField('telegram')}>
            <div className="flex-shrink-0" />
            <Telegramicon />
            <input type="text" placeholder="Введите telegram" onFocus={() => setActiveField('telegram')}
            className="flex-1 bg-transparent outline-none placeholder-[#666666]"/>
            {activeField === 'telegram' ? <Circleactiveicon /> : <Circleicon />}
          </div>
      </div>

      <div className="grid grid-rows-[auto_50px] gap-y-4 grid-cols-1 lg:grid-rows-1 lg:grid-cols-[80%_auto] lg:mt-10 h-[150px]">
        <div className="flex items-start space-x-2 mt-2">
          <input 
            type="checkbox" 
            className="w-5 h-5 bg-[#1A1A1A] checked:bg-[#1A1A1A] border border-[#262626] rounded-none flex-shrink-0 focus:ring-0 cursor-pointer" 
          />
          <span className="text-xs text-[#999999] whitespace-normal xl:whitespace-nowrap">
            Даю согласие на{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-white">обработку персональных данных</span>{" "}
            и{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-white">соглашаюсь с политикой конфиденциальности.</span>
          </span>
        </div>
        <Button buttonType="purple" className="row-start-2 lg:row-start-1 lg:col-start-2 lg:-ml-4 xl:ml-11 w-full md:w-[180px] -mt-2 md:mt-0">Оставить заявку</Button>
      </div>
    </div>
  );
};
export default HomeContainer7;