function HomeSpace2() {
  return(
    <div className="flex flex-col items-end mt-10">
      <img className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%] scale-x-[-1]"
        src="src\public\image\stars.png"/>
      <div className="grid grid-cols-[1fr_auto] mt-2 ">
        <div className="w-full flex flex-col items-end">
          <div className="text-sm md:text-[20px] lg:text-[24px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">Наш подход - измеримый результат</div>
          <div className="text-right text-xs text-[#999999] w-[90%] mt-3 text-[Inter]">Каждый этап прозрачен, измерим и ориентирован на достижение поставленых метрик</div>
        </div>
      </div>
    </div>
  );};
export default HomeSpace2;