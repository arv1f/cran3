function HomeSpace6() {
  return(
    <div className="mt-12 px-2 lg:px-0">
      <img 
        className="w-[60px] h-[20px] object-cover z-0 mt-3 ml-auto scale-x-[-1]"
        src="src\public\image\stars.png"
        alt="stars"
      />
      
      <div className="relative z-10 grid grid-cols-[1fr_auto] mt-2 w-full">
        <div className="w-full flex flex-col items-end">
          <div className="text-2xl md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">
            Оставьте заявку
          </div>
          <div className="text-right text-xs text-[#999999] w-[90%] mt-3 text-[Inter]">
            Мы проанализируем, где ваш бизнес теряет деньги, и предложим решение.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSpace6;