import { useState } from 'react';
import Xicon from "../public/icons/Xicon";

function UpHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  const handleClose = () => {
    setIsHiding(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`relative px-[10%] lg:pl-[15%] -ml-[10%] w-[120%] lg:w-[120%] grid grid-cols-[1fr_auto] md:grid-cols-[95%_auto] lg:grid-cols-[105%_auto] bg-[#101010] py-[2px] sm:py-[4px] md:py-[4px] lg:py-[6px] xl:py-[8px] flex items-center px-4 transition-opacity duration-300 ${isHiding ? 'opacity-0' : 'opacity-100'}`}>
      <div className="z-10 text-xs text-center">✨Проведём аудит и предложим оптимальное решение за 48 часов✨</div>
      <button 
        className="cursor-pointer border-none bg-[rgba(255,255,255,0.1)] w-[30px] h-[30px] lg:w-[32px] lg:h-[32px] rounded-full flex items-center justify-center z-10 relative hover:bg-[#050505]"
        onClick={handleClose}
      >
        <div className="w-[10px] lg:w-[13px] xl:w-[14px] flex items-center justify-center">
          <Xicon size={"100%"}/>
        </div>
      </button>
      <img className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
      src="src\public\image\Abstract Design.png"/>
    </div>
  );
}

export default UpHeader;



// import Xicon from "../public/icons/Xicon";
// function UpHeader(){
//   return(<>
//   <div className="grid grid-cols-[16%_auto] sm:grid-cols-[20%_74%] md:grid-cols-[28%_68%] lg:grid-cols-[27%_68%] bg-[#000000] py-[2px] sm:py-[4px] md:py-[4px] lg:py-[6px] xl:py-[8px] w-[120%] -ml-[10%] flex items-center pr-2 lg:pr-0">
//         <div className="col-end-3 text-xs lg:text-sm xl:text-base">✨Проведём аудит и предложим оптимальное решение за 48 часов✨</div>
//         <div className="col-start-3">
//           <button className="cursor-pointer border-none bg-[rgba(255,255,255,0.1)] w-[30px] h-[30px] lg:w-[32px] lg:h-[32px] rounded-[100%] flex items-center justify-center"
//           onClick={()=>{}}
//           >
//             <div className="w-[10px] lg:w-[13px] xl:w-[14px] -mt-[1px] flex items-center justify-center">
//               <Xicon size={"100%"}/>
//             </div>
//           </button>
//         </div>
//   </div>
//   </>);
// };
// export default UpHeader;