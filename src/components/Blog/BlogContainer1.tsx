import { Cubeicon, DownArrowicon, Houseicon, Searchicon } from "../../public/icons/Searchicons";


function BlogContainer1() {
  return(

    <div className="grid mt-[125px] md:mt-[110px] w-[120%] -ml-[10%] h-[560px] md:h-[580px]">
      <div className="w-full h-[560px] md:h-[420px] bg-[linear-gradient(64.9deg,#262626_0%,rgba(38,38,38,0)_53.056%)] sm:px-3 md:px-[10%] grid grid-rows-[10%_30%] sm:grid-rows-[auto_35%] md:grid-rows-[30%_61%] grid-cols-12 border border-[#262626]">
        <div className="mt-4 row-start-1 md:row-start-2 col-start-2 md:col-start-1 col-end-12 lg:ml-2">
          <div className="tracking-wider text-[36px] sm:text-[40px] md:text-[50px] lg:text-[56px] xl:text-[64px] 2xl:text-[70px] leading-none font-black">Дайджест от наших экспертов</div>
          <div className="text-xs text-[#999999] mt-5 font-[Inter] font-medium">Вместе с CRAN Project пограузитесь в мир IT-технологий и бизнеса</div>
        </div>
        <div className="row-start-3 col-start-2 col-end-12 grid grid-rows-3 md:grid-rows-2 gap-6 md:gap-0">
          <div className="row-start-1 max-h-[80px] relative flex items-center sm:space-x-2 border-[2px] border-[#262626] shadow-[0_0_0_10px_#191919] bg-[#101010] text-[#999999] px-1 sm:px-2 py-3">
              <input type="text" placeholder="(Анимация из разных случайных названий статей) Название статьи медленно печатается..." className="font-[Inter] font-medium flex-1 bg-transparent outline-none placeholder-[#666666]"/>
              <Searchicon className="absolute right-2 w-[50px] h-[42px] ml-auto flex-shrink-0 opacity-95 cursor-pointer hover:opacity-100"/>
            </div>
          <div className="invisible md:visible grid grid-rows-2 gap-4 sm:gap-0 h-[200px] sm:h-[70px] -mt-[45px] sm:mt-2 sm:grid-rows-1 sm:grid-cols-2 mt-1 sm:border border-[#262626] sm:shadow-[0_0_0_10px_#191919] bg-[#101010]">

            <div className="max-h-[70px] row-start-1 md:-ml-[22%] sm:w-[97%] md:w-[120%] relative flex items-center space-x-2 border border-[#262626] shadow-[0_0_0_10px_#191919] bg-[#101010] text-[#999999] px-2 py-2">
              <Houseicon className="flex-shrink-0 " />
              <div className="hidden md:block border-l border-[#262626] h-[40px]"></div>
              <input type="text" placeholder="Тема" className="font-[Inter] font-medium flex-1 bg-transparent outline-none placeholder-[#999999]"/>
              <DownArrowicon className="absolute right-2 ml-auto w-[36px] md:w-[32px] h-[32px] flex-shrink-0 opacity-85 cursor-pointer hover:opacity-100" />
            </div>

            <div className="max-h-[70px] row-start-2 sm:row-start-1 md:w-[120%] relative flex items-center space-x-2 border border-[#262626] shadow-[0_0_0_10px_#191919] bg-[#101010] text-[#999999] px-2 py-2">
              <Cubeicon className="flex-shrink-0 "/>
              <div className="hidden md:block border-l border-[#262626] h-[40px]"></div>
              <input type="text" placeholder="Автор" className="font-[Inter] font-medium flex-1 bg-transparent outline-none placeholder-[#999999]"/>
              <DownArrowicon className="absolute right-2 w-[36px] md:w-[32px] h-[32px] flex-shrink-0 opacity-85 cursor-pointer hover:opacity-100" />
            </div>
          </div>

          
          <div className="md:hidden row-start-2 max-h-[70px] md:-ml-[22%] md:w-[120%] relative flex items-center space-x-2 border border-[#262626] shadow-[0_0_0_10px_#191919] bg-[#101010] text-[#999999] px-2 py-2">
            <Houseicon className="flex-shrink-0" />
            <div className="hidden md:block border-l border-[#262626] h-[40px]"></div>
            <input type="text" placeholder="Тема" className="font-[Inter] font-medium flex-1 bg-transparent outline-none placeholder-[#999999]"/>
            <DownArrowicon className="absolute right-6 sm:right-2 w-[32px] md:w-[32px] h-[32px] flex-shrink-0 opacity-85 cursor-pointer hover:opacity-100" />
          </div>

          <div className="md:hidden row-start-3 max-h-[70px] md:w-[120%] relative flex items-center space-x-2 border border-[#262626] shadow-[0_0_0_10px_#191919] bg-[#101010] text-[#999999] px-2 py-2">
            <Cubeicon className="flex-shrink-0 "/>
            <div className="hidden md:block border-l border-[#262626] h-[40px]"></div>
            <input type="text" placeholder="Автор" className="font-[Inter] font-medium flex-1 bg-transparent outline-none placeholder-[#999999]"/>
            <DownArrowicon className="absolute right-6 sm:right-2 w-[32px] md:w-[32px] h-[32px] flex-shrink-0 opacity-85 cursor-pointer hover:opacity-100" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogContainer1;