function HomeSpace6() {
  return(
    <div className="relative flex flex-col items-end mt-12 mr-0 lg:mr-3 lg:mr-0 pr-[4px] sm:px-3">
      <img 
        className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%]"
        src="src\public\image\starsRight.png"
        alt="stars"
      />
        <div className="w-full flex flex-col items-end mt-2">
          <div className="tracking-wider text-right text-[30px] sm:text-[32px] md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[42px] font-[800] leading-none w-[96%] sm:w-[107%] xl:w-full">
            Оставьте заявку
          </div>
          <div className="text-right text-xs text-[#999999] w-[90%] mt-3 font-[Inter] font-medium">
            Мы проанализируем, где ваш бизнес теряет деньги, и предложим решение.
          </div>
        </div>
    </div>
  );
}

export default HomeSpace6;