import Button from "./ui/Button";

// import Input from "./ui/CustomInput";
function HomeContainer7() {
  return(
    <div className="grid grid-rows-[45%_35%_20%] border border-[#262626] rounded-lg p-16 h-[460px] mt-12">
      <div className="grid grid-cols-2 gap-8">
        <div className="grid grid-rows-[25%_auto]">
          <span className="text-sm">Имя*</span>
          <input placeholder="Введите ваше имя" type="text" className="opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
        </div>
        <div className="grid grid-rows-[25%_auto]">
          <span className="text-sm">Компания</span>
          <input placeholder="Название вашей компании" type="text" className="opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid grid-rows-[33%_auto]">
          <span className="text-sm">Контакты*</span>
          <input placeholder="Введите номер телефона" type="text" className="opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
        </div>
        <input placeholder="Введите email" type="text" className="mt-[10.5%] opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
        <input placeholder="Введите telegram" type="text" className="mt-[10.5%] opacity-60 bg-[#1A1A1A] text-[#FFFFFF] text-xs rounded-md border border-[#262626] px-3 h-11" />
      </div>

      <div className="grid grid-cols-[80%_auto] mt-10">
        <div className="flex items-start justify-cente space-x-2 mt-2">
        <input type="checkbox" 
          className="w-4 h-4 mt-0.5 bg-[#1A1A1A] checked:bg-[#1A1A1A] border border-[#262626] rounded-none" />
        <span className=" block mt-0.5 text-xs text-[#999999] font-inter leading-tight">
          Даю согласие на{" "}
          <span className="underline underline-offset-2">обработку персональных данных</span>{" "}
          и{" "}
          <span className="underline underline-offset-2">соглашаюсь с политикой конфиденциальности.</span>
        </span>
      </div>
      <Button buttonType="purple" className="w-[102%]">Оставить заявку</Button>
      </div>
    </div>
  );
};
export default HomeContainer7;