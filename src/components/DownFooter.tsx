import { FaceBookicon, Instagram, Twitter, Youtube } from "../public/icons/LogoIcons";

function DownFooter() {
  return(
    <div className="h-[100px] py-5 grid grid-cols-[45%_40%_15%] bg-[#1A1A1A] -ml-[10%] w-[120%] px-[10%]">
      <div className="text-sm text-nowrap space-x-8"><span>@2024-2025 CRAN Project. Все права защищены.</span><span>Документы</span></div>
      <div></div>
      <div className="grid grid-cols-4 gap-10">
        <FaceBookicon/>
        <Instagram/>
        <Twitter/>
        <Youtube/>
      </div>
    </div>
  );
};
export default DownFooter;