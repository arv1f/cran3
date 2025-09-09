function ContactSpace2() {
  return(
    <div className="relative flex flex-col items-end mt-6 lg:-mt-[250px] mr-2 lg:mr-0">
      <img 
        className="inset-0 w-[60px] h-[20px] object-cover z-0 -ml-[2%]"
        src="src\public\image\starsRight.png"
        alt="stars"
      />
      <div className="relative z-10 grid grid-cols-[1fr_auto] mt-2 w-full">
        <div className="w-full flex flex-col items-end">
          <div className="text-2xl md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-bold">
            Подберите свой тариф
          </div>
          <div className="text-right text-xs text-[#999999] w-[90%] mt-3 text-[Inter]">
            Мы предлагаем два готовых тарифа для среднего и крупного бизнеса — и гибкую модель, где вы формируете свой объём
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSpace2;