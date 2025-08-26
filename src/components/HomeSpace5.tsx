import Button from "./ui/Button";

function HomeSpace5() {
  return(
    <div className="mt-14">
      <img className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%] mt-2"
        src="src\public\image\stars.png"/>
      <div className="grid grid-cols-[1fr_auto] mt-2">
        <div>
          <div className="text-sm md:text-[20px] lg:text-[24px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">Дайджест наших статей</div>
          <div className="text-xs text-[#999999] w-[90%] mt-3 text-[Inter]">Наши материалы — о том, как ИИ и автоматизация работают на рентабельность Вашего бизнеса.</div>
        </div>
        <Button buttonType="black" className="mt-9 ml-[20%] w-[110px] text-medium bg-[#1A1A1A] border border-[#272727]">Наш блог</Button>
      </div>
    </div>
  );};
export default HomeSpace5;