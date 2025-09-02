import { RedXicon, GreenYicon } from "../../public/icons/RedGreenicon";
function AboutContainer3() {
  return(
    <div className="grid grid-cols-1 lg:grid-cols-2 px-2 lg:px-0 mt-4 gap-4">
      <div className="grid grid-rows-[5%_auto] border border-[#262626] p-6 px-3 xl:px-6 gap-6 rounded-lg">
        <div className="text-xl md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[36px] tracking-normal leading-tight font-[800] flex items-center justify-center">Обычный IT-итегратор</div>
        <div 
            className="text-[#999999] text-xs font-sans flex items-center px-[24px] py-[18px] gap-[10px] h-[63px] bg-gradient-to-r from-[#1A1A1A] to-transparent border-l-[3px] border-l-[#CC6699]"
            style={{boxSizing: 'border-box'}}
          >
          <RedXicon/>
          <span>Начинает с системы и платформы</span>
        </div>
        <div 
            className="text-[#999999] text-xs font-sans flex items-center px-[24px] py-[18px] gap-[10px] h-[63px] bg-gradient-to-r from-[#1A1A1A] to-transparent border-l-[3px] border-l-[#CC6699]"
            style={{boxSizing: 'border-box'}}
          >
          <RedXicon/>
          <span>Внедряет «по шаблону»</span>
        </div>
        <div 
            className="text-[#999999] text-xs font-sans flex items-center px-[24px] py-[18px] gap-[10px] h-[63px] bg-gradient-to-r from-[#1A1A1A] to-transparent border-l-[3px] border-l-[#CC6699]"
            style={{boxSizing: 'border-box'}}
          >
          <RedXicon/>
          <span>Фокус на сроках</span>
        </div>
        <div 
            className="text-[#999999] text-xs font-sans flex items-center px-[24px] py-[18px] gap-[10px] h-[63px] bg-gradient-to-r from-[#1A1A1A] to-transparent border-l-[3px] border-l-[#CC6699]"
            style={{boxSizing: 'border-box'}}
          >
          <RedXicon/>
          <span>Работает как подрядчик</span>
        </div>
        <div 
            className="text-[#999999] text-xs font-sans flex items-center px-[24px] py-[18px] gap-[10px] h-[63px] bg-gradient-to-r from-[#1A1A1A] to-transparent border-l-[3px] border-l-[#CC6699]"
            style={{boxSizing: 'border-box'}}
          >
          <RedXicon/>
          <span>Закрывает “продажу”</span>
        </div>
      </div>

      <div className="grid grid-rows-[5%_auto] border border-[#262626] p-6 px-3 xl:px-6 gap-6 rounded-lg">
        <div className="text-xl md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[36px] tracking-normal leading-tight font-[800] flex items-center justify-center">CRAN Project</div>
        <div 
          className="text-[#999999] text-xs font-sans box-border flex items-center py-[18px] px-[24px] gap-[10px] h-[63px] border-l-[3px] border-l-[#66CC99]"
          style={{
            background: 'linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)'
          }}
        >
          <GreenYicon/>
          <span>Начинает с системы и платформы</span>
        </div>
        <div 
          className="text-[#999999] text-xs font-sans box-border flex items-center py-[18px] px-[24px] gap-[10px] h-[63px] border-l-[3px] border-l-[#66CC99]"
          style={{
            background: 'linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)'
          }}
        >
          <GreenYicon/>
          <span>Создаём персональное решение</span>
        </div>
        <div 
          className="text-[#999999] text-xs font-sans box-border flex items-center py-[18px] px-[24px] gap-[10px] h-[63px] border-l-[3px] border-l-[#66CC99]"
          style={{
            background: 'linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)'
          }}
        >
          <GreenYicon/>
          <span>Фокус на результате</span>
        </div>
        <div 
          className="text-[#999999] text-xs font-sans box-border flex items-center py-[18px] px-[24px] gap-[10px] h-[63px] border-l-[3px] border-l-[#66CC99]"
          style={{
            background: 'linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)'
          }}
        >
          <GreenYicon/>
          <span>Работаем как партнёр</span>
        </div>
        <div 
          className="text-[#999999] text-xs font-sans box-border flex items-center py-[18px] px-[24px] gap-[10px] h-[63px] border-l-[3px] border-l-[#66CC99]"
          style={{
            background: 'linear-gradient(90deg, #1A1A1A 0%, rgba(26, 26, 26, 0) 100%)'
          }}
        >
          <GreenYicon/>
          <span>Поддерживаем после запуска</span>
        </div>
      </div>

    </div>
  );
};
export default AboutContainer3;
