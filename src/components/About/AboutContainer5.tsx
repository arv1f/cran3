import Button from "../ui/Button";

function AboutContainer5() {
  return(
    <div className="border border-[#262626] relative px-[10%] md:px-[10%] py-10 w-[120%] h-[360px] md:h-[260px] -ml-[10%] mt-16">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center justify-center gap-6 h-full md:ml-1 lg:ml-0 md:mr-1 lg:mr-0">
        <div className="z-10">
          <div className="text-[30px] sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[42px] font-[800] tracking-normal leading-10 font-[900] w-[90%] md:w-full">Хочешь работать и расти с нами?</div>
          <div className="text-xs text-[#999999] mt-4 font-[Inter]">Нам нужны разработчики и аналитики, которые хотят решать задачи — а не просто писать код</div>
        </div>
        <Button buttonType="purple">Смотреть вакансии</Button>
      </div>

      <div className="w-[120%] -left-[10%]  md:top-[60px] absolute inset-0 grid grid-cols-1 md:grid-cols-2 -z-5">
          <div className="h-[200px] relative">
            <img src="src\public\image\Abstract Design (1).png" 
            className="w-full h-[160px] md:h-full object-cover opacity-30 md:opacity-70"/>
          </div>
          <div className="h-[200px] relative">
            <img src="src\public\image\Abstract Design1.png" 
              className="w-full h-[140px] mt-[20px] md:mt-0 md:h-full object-cover opacity-100 md:opacity-70"/>
          </div>
      </div>
    </div>
  );
};
export default AboutContainer5