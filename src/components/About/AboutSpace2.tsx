function AboutSpace2() {
  return(
    <div className="relative flex flex-col items-end mt-6 mr-2 lg:mr-0">
      <img 
        className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%] scale-x-[-1]"
        src="src\public\image\stars.png"
        alt="stars"
      />
      <div className="relative z-10 grid grid-cols-[1fr_auto] mt-2 w-full">
        <div className="w-full flex flex-col items-end">
          <div className="text-sm md:text-[20px] lg:text-[24px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">
            Контраст с рынком
          </div>
          <div className="text-right text-xs text-[#999999] w-[90%] mt-3 text-[Inter]">
            Большинство IT-компаний начинают с выбора платформы. Мы — с вашего бизнеса.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSpace2;