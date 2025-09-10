function AboutSpace2() {
  return(
    <div className="relative flex flex-col items-end mt-12 mr-0 lg:mr-3 lg:mr-0 pr-[4px] sm:px-3">
      <img 
        className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%]"
        src="src\public\image\starsRight.png"
        alt="stars"
      />
        <div className="w-full flex flex-col items-end mt-2">
          <div className="tracking-wider text-right text-[30px] sm:text-[31px] md:text-[34px] lg:text-[36px] xl:text-[40px] 2xl:text-[42px] font-[800] leading-none w-[96%] sm:w-[107%] xl:w-full">
            Контраст с рынком
          </div>
          <div className="text-right text-xs text-[#999999] w-[90%] mt-3 font-[Inter] font-medium">
            Большинство IT-компаний начинают с выбора платформы. Мы — с вашего бизнеса.
          </div>
        </div>
    </div>
  );
}

export default AboutSpace2;