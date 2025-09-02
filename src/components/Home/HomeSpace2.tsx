function HomeSpace2() {
  return(
    <div className="relative flex flex-col items-end mt-12 mr-0 lg:mr-3 lg:mr-0 pr-[4px] sm:px-3">
      <img 
        className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%] scale-x-[-1]"
        src="src\public\image\stars.png"
        alt="stars"
      />
      <div className="relative z-10 grid grid-cols-[1fr_auto] mt-2 w-full">
        <div className="w-full flex flex-col items-end">
          <div className="text-nowrap text-sm md:text-[20px] lg:text-[24px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">
            Наш подход - измеримый результат
          </div>
          <div className="text-right text-xs text-[#999999] w-[90%] mt-3 text-[Inter]">
            Каждый этап прозрачен, измерим и ориентирован на достижение поставленых метрик
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSpace2;