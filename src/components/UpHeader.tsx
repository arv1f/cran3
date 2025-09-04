import Xicon from "../public/icons/Xicon";

interface UpHeaderProps {
  isVisible: boolean;
  onClose: () => void;
}

function UpHeader({ isVisible, onClose }: UpHeaderProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed pt-[4px] top-0 left-0 w-full md:px-[10%] lg:pl-[15%] grid place-items-center grid-cols-[1fr_auto] md:grid-cols-[95%_auto] lg:grid-cols-[105%_auto] bg-[#101010] py-[2px] sm:py-[4px] md:py-[4px] lg:py-[6px] xl:py-[8px] px-4">
      <div className="z-10 text-xs text-center flex items-center justify-center">✨Проведём аудит и предложим оптимальное решение за 48 часов✨</div>
      <button 
        className="cursor-pointer border-none bg-[rgba(255,255,255,0.1)] w-[30px] h-[30px] lg:w-[32px] lg:h-[32px] rounded-full flex items-center justify-center z-10 relative hover:bg-[#050505]"
        onClick={onClose}
      >
        <div className="w-[10px] lg:w-[13px] xl:w-[14px] flex items-center justify-center">
          <Xicon size={"100%"}/>
        </div>
      </button>
      <img className="absolute inset-0 w-full h-[66px] object-cover opacity-30 z-0"
      src="src\public\image\Abstract Design.png"/>
    </div>
  );
}

export default UpHeader;