import Button from "../ui/Button";

// import Input from "./ui/CustomInput";
function HomeContainer7() {
  return(
    <div className="grid grid-rows-[35%_40%_25%] lg:grid-rows-[45%_35%_20%] border border-[#262626] rounded-lg p-4 md:p-8 lg:p-16 h-[700px] lg:h-[460px] mt-12 mx-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-[15%_35%_15%_35%] h-[200px] lg:grid-rows-[25%_auto] gap-x-8">
          <span className="text-sm row-start-1 col-start-1">Имя*</span>
          <input placeholder="Введите ваше имя" type="text" className="row-start-2 col-start-1 opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
          <span className="text-sm row-start-3 col-start-1 lg:row-start-1 lg:col-start-2">Компания</span>
          <input placeholder="Название вашей компании" type="text" className="row-start-4 col-start-1 lg:row-start-2 lg:col-start-2 opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-[15%_25%_25%_35%] h-[250px] lg:grid-rows-[15%_auto] gap-x-4">
          <span className="text-sm row-start-1">Контакты*</span>
          <input placeholder="Введите номер телефона" type="text" className="row-start-2 col-start-1 opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
        <input placeholder="Введите email" type="text" className="row-start-3 lg:row-start-2 lg:col-start-2 opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
        <input placeholder="Введите telegram" type="text" className="row-start-4 lg:row-start-2 lg:col-start-3 opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
      </div>

      <div className="grid grid-rows-[70%] grid-cols-1 lg:grid-rows-1 lg:grid-cols-[80%_auto] lg:mt-10 h-[150px]">
        <div className="flex items-start space-x-2 mt-2">
          <input 
            type="checkbox" 
            className="w-5 h-5 bg-[#1A1A1A] checked:bg-[#1A1A1A] border border-[#262626] rounded-none flex-shrink-0 focus:ring-0 cursor-pointer" 
          />
          <span className="text-xs text-[#999999] whitespace-normal md:whitespace-nowrap">
            Даю согласие на{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-white">обработку персональных данных</span>{" "}
            и{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-white">соглашаюсь с политикой конфиденциальности.</span>
          </span>
        </div>
      <Button buttonType="purple" className="row-start-2 lg:row-start-1 lg:col-start-2 lg:-ml-4 xl:ml-11 w-[102%]">Оставить заявку</Button>
      </div>
    </div>
  );
};
export default HomeContainer7;