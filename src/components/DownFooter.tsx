import { FaceBookicon, Instagram, Twitter, Youtube } from "../public/icons/LogoIcons";

function DownFooter() {
  return(
      <div className="h-[200px] lg:h-[100px] py-5 grid grid-rows-[30%_20%_30%_20%] lg:grid-cols-[700px_auto_300px] bg-[#1A1A1A] -ml-[10%] w-[120%] lg:w-[120%] px-[15%] lg:px-[10%]">
        <div className="text-sm lg:text-nowrap lg:space-x-8 leading-relaxed grid grid-cols-1 lg:grid-cols-3">
          <span>@2024-2025 CRAN Project.</span>
          <span className="text-nowrap">Все права защищены.</span>
          <span className="opacity-85 cursor-pointer hover:opacity-100">Документы</span></div>
        <div></div>
        <div className="grid grid-cols-4 lg:gap-4 mt-8 lg:mt-0 w-[300px]">
          <FaceBookicon className="opacity-85 cursor-pointer hover:opacity-100" />
          <Instagram className="opacity-85 cursor-pointer hover:opacity-100" />
          <Twitter className="opacity-85 cursor-pointer hover:opacity-100" />
          <Youtube className="opacity-85 cursor-pointer hover:opacity-100" />
        </div>
      </div>

  );
};
export default DownFooter;