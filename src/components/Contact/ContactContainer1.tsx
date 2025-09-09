import Button from "../ui/Button";
import Cell from "../ui/Cell";

function ContactContainer1() {
  return(
    <div className="mt-[130px] md:mt-[120px] relative grid grid-rows-[200px] lg:grid-rows-[100%] lg:grid-cols-1 lg:grid-cols-[54.5%_45.5%] h-[1300px] lg:h-[514px] w-full">
      <div className="col-start-1 pt-1 lg:mt-[115px] w-[100%] z-10 px-[4%]">
        <div>
          <div className="text-[36px] md:text-[48px] lg:text-[58px] xl:text-[76px] 2xl:text-[96px] leading-none font-extrabold">ПАРТНЁРСТВО</div>{/*text-[96px] text-[40px]*/}
          <div className="text-sm md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] tracking-normal leading-tight font-[800]">И УСТОЙЧИВАЯ ПОДДЕРЖКА</div>
        </div>
        <div className="text-xs text-[#F5DFDF] w-[100%] mt-4 text-[Inter]">Мы станем вашим IT-подразделением под ключ.<br/>Без найма, офиса и издержек. Вы платите за результат, а не за штат</div>
        <Button buttonType="purple" className="mt-10 text-xl">Назначить встречу</Button>
      </div>

      <div className="col-start-1 lg:col-start-2 lg:top-0 relative w-[110%] -z-1">
        <img className="opacity-70 lg:opacity-100 absolute inset-0 w-full h-[1300px] -mt-[215px] lg:-mt-[40px] lg:h-[552px] object-cover z-0"
        src="src\public\image\Group.png"/>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-[81%] lg:w-full mt-16 gap-3 gap-y-6 lg:gap-y-10 p-4">
          <Cell heading="6 мес.">Среднее время выхода на прибыль</Cell>
          <Cell heading="0%">Риска шаблонных решений</Cell>
          <Cell heading="2,1 млн ₽">Годовая экономия на логистике</Cell>
          <Cell heading="18%">Рост оборота вскоре после начала работы</Cell>
          <Cell heading="7+">Отраслей, где мы внедряли решения</Cell>
          <Cell heading="37%">Снижение потерь в пилотах</Cell>
        </div>
        

      </div>

    </div>
  );
};
export default ContactContainer1;