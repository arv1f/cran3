function HomeSpace4() {
  return(
    <div className="relative flex flex-col items-end mt-14 mr-0 lg:mr-3 lg:mr-0 pr-[4px] sm:px-3">
      <img 
        className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%]"
        src="src\public\image\starsRight.png"
        alt="stars"
      />
        <div className="w-full flex flex-col items-end mt-5">
          <div className="tracking-wider text-right text-[22px] sm:text-[28px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[40px] font-[800] leading-none w-[96%] sm:w-[107%] xl:w-full">
            Мнение наших партнёров
          </div>
          <div className="text-right text-xs text-[#999999] w-[90%] mt-3 font-[Inter] font-medium">
            Мы не изменяем формулировки: честность важнее маркетинга.
          </div>
        </div>
    </div>
  );
}

export default HomeSpace4;