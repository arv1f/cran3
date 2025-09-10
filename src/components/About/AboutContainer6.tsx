import Button from "../ui/Button";

function AboutContainer6() {
  return(
    <div className="border font-medium border-[#262626] mt-12 grid grid-rows-[25%_6%_34%_7%_20%] md:grid-rows-[30%_7%_28%_7%_23%] lg:grid-rows-[36%_8%_20%_4%_32%] px-[2%] h-[620px] sm:h-[350px] md:h-[340px] lg:h-[300px] mx-1 lg:mx-0">
      <div className="row-start-1 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center">
        <div className="text-base">Реквизиты</div>
        <Button borderTransparent={false} className="bg-[#1A1A1A] font-light sm:w-full -ml-[4px] md:-ml-[20%] lg:ml-0">Полная юридическая информация и документы</Button>
      </div>
      <div className="row-start-2 border-t w-[100%] border-[#262626] h-[40px] mt-2 md:-mt-[5px]"></div>

      <div className="row-start-3 gap-4 sm:gap-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[186px_1%_158px_1%_140px_1%_auto] w-[90%] md:py-1">
        <div className="col-start-1 grid grid-cols-[auto_110px] sm:grid-cols-[auto_190px] md:grid-cols-[auto_217px] lg:grid-cols-[62px_auto]">
          <div>ОГРН</div>
          <Info>1241600053750</Info>
        </div>
        <div className="hidden lg:block col-start-2 border-l border-[#262626] h-[40px] -mt-[5px]"></div>
        <div className="lg:col-start-3 grid grid-cols-[auto_110px] sm:grid-cols-[100px_auto] md:grid-cols-[auto_217px] lg:grid-cols-[56px_auto]">
          <div>ИНН</div>
          <Info>1683024447</Info>
        </div>
        <div className="hidden lg:block col-start-4 border-l border-[#262626] h-[40px] -mt-[5px]"></div>
        <div className="lg:col-start-5 grid grid-cols-[auto_110px] sm:grid-cols-[auto_190px] md:grid-cols-[auto_217px] lg:grid-cols-[54px_auto]">
          <div>КПП</div>
          <Info>168301001</Info>
        </div>
        <div className="hidden lg:block col-start-6 border-l border-[#262626] h-[40px] -mt-[5px]"></div>
        <div className="lg:col-start-7 grid grid-cols-[auto_55px_55px] grid-rows-2 sm:grid-rows-1 gap-y-2 sm:grid-cols-[100px_53px_56px_53px_55px] md:grid-cols-[auto_53px_56px_53px_55px] lg:grid-cols-[80px_53px_56px_53px_55px]">
          <div>ОКВЕД</div>
          <Info>62.01</Info>
          <Info>62.02</Info>
          <Info className="col-start-2 sm:col-start-4 w-[48px]">62.03</Info>
          <Info>62.09</Info>
        </div>

      </div>
      <div className="row-start-4 border-t w-[100%] border-[#262626] mt-4 lg:mt-0"></div>
      <div className="row-start-5 grid xl:grid-cols-[230px_auto] flex items-center">
        <div className="text-nowrap">Юридический адрес</div>
        <Info className="hidden lg:block mt-[2px]">420500, Республика Татарстан, Верхнеуслонский р-н, г Иннополис, Университетская ул, д. 5, помещ. 115</Info>
        <div className="lg:hidden text-xs text-[#999999]">420500, Республика Татарстан, Верхнеуслонский р-н, г Иннополис, Университетская ул, д. 5, помещ. 115</div>
      </div>
    </div>
  );
};
export default AboutContainer6;

interface InfoProps {
  children: string
  className?: string;
}

const Info = ({
  children,
  className,
  ...props
} : InfoProps) => {
  const baseStyles = "w-fit text-xs font-regular text-[#999999] border border-[#262626] bg-[#1A1A1A] p-1 h-6 flex items-center justify-center"
  return(
    <div className={`${baseStyles} ${className || ""}`}
      {...props}>{children}</div>
  );
};