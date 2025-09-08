import { Cubeicon, DownArrowicon, Houseicon, Searchicon } from "../../public/icons/Searchicons";


function BlogContainer1() {
  return(
    <div className="grid mt-[125px] w-[120%] -ml-[10%] h-[600px] md:h-[580px]">
      <div className="w-full h-[420px] bg-[linear-gradient(64.9deg,#262626_0%,rgba(38,38,38,0)_53.056%)] px-3 md:px-[10%] grid grid-rows-[25%_40%] sm:grid-rows-[10%_35%] md:grid-rows-[30%_61%] grid-cols-12 border border-[#262626]">
        <div className="row-start-2 col-start-2 md:col-start-1 col-end-12">
          <div className="ml-3 text-2xl md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-[800]">Дайджест от наших экспертов</div>
          <div className="text-xs text-[#999999] mt-3">Вместе с CRAN Project пограузитесь в мир IT-технологий и бизнеса</div>
        </div>
        <div className="row-start-3 col-start-2 col-end-12 grid grid-rows-2">
          <div className="max-h-[80px] w-[100%] relative flex items-center space-x-2 border-[2px] border-[#262626] shadow-[0_0_0_10px_#191919] bg-[#101010] text-[#666666] px-2 py-3">
              <input type="text" placeholder="(Анимация из разных случайных названий статей) Название статьи медленно печатается..." className="flex-1 bg-transparent outline-none placeholder-[#666666]"/>
              <Searchicon className="w-[56px] h-[44px] ml-auto opacity-95 cursor-pointer hover:opacity-100"/>
            </div>
          <div className="grid grid-rows-2 gap-4 sm:gap-0 h-[200px] sm:h-[70px] -mt-[45px] sm:mt-2 sm:grid-rows-1 sm:grid-cols-2 mt-1 sm:border border-[#262626] sm:shadow-[0_0_0_10px_#191919] bg-[#101010]  ">

            <div className="max-h-[70px] row-start-1 md:-ml-[22%] sm:w-[97%] md:w-[120%] relative flex items-center space-x-2 border border-[#262626] shadow-[0_0_0_10px_#191919] bg-[#101010] text-[#666666] px-2 py-2">
              <Houseicon className="flex-shrink-0 " />
              <div className="hidden md:block border-l border-[#262626] h-[40px]"></div>
              <input type="text" placeholder="Тема" className="flex-1 bg-transparent outline-none placeholder-[#666666]"/>
              <DownArrowicon className="ml-auto w-[60px] md:w-[32px] h-[32px] flex-shrink-0 opacity-85 cursor-pointer hover:opacity-100" />
            </div>

            <div className="max-h-[70px] row-start-2 sm:row-start-1 md:w-[120%] relative flex items-center space-x-2 border border-[#262626] shadow-[0_0_0_10px_#191919] bg-[#101010] text-[#666666] px-2 py-2">
              <Cubeicon className="flex-shrink-0 "/>
              <div className="hidden md:block border-l border-[#262626] h-[40px]"></div>
              <input type="text" placeholder="Автор" className="flex-1 bg-transparent outline-none placeholder-[#666666]"/>
              <DownArrowicon className="ml-auto w-[60px] md:w-[32px] h-[32px] flex-shrink-0 opacity-85 cursor-pointer hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogContainer1;