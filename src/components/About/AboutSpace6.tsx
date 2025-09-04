function AboutSpace6() {
  return(
    <div className="relative flex flex-col items-end mt-10 mr-2 lg:mr-0">
      <img 
        className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%] scale-x-[-1]"
        src="src\public\image\stars.png"
        alt="stars"
      />
      <div className="relative z-10 grid grid-cols-[1fr_auto] mt-2 w-full">
        <div className="w-full flex flex-col items-end">
          <div className="text-xl md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">
            Готовы к сотрудничеству?
          </div>
          <div className="text-right text-xs text-[#999999] w-[90%] mt-3 text-[Inter]">
            Мы проанализируем, где ваш  бизнес теряет деньги, и предложим решение.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSpace6;