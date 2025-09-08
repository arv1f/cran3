import { TG, VK } from "../../public/icons/VKTGicons";

function AboutContainer4() {
  return (
    <div className="grid place-items-center lg:place-items-[] grid-cols-1 px-3 gap-4 sm:grid-cols-2 md:px-[10%] lg:px-0 lg:grid-cols-4 mt-10">

      <div className="border border-[#262626] p-4 flex flex-col h-[450px] xl:h-[450px]">
        <div className="relative flex-1 mb-4 mt-6 items-center justify-center flex">
          <img
            className="w-full max-w-[250px] max-h-[300px] h-full object-cover object-center"
            src="src\public\image\Image (2).png"
            alt="Артём Волконитин"
          />
          <div className="absolute inset-0 flex items-end justify-center -mb-4">
            <div className="flex gap-8 justify-center w-full px-4">
              <VK className="w-10 h-10 lg:w-[60px] lg:h-10 flex-shrink-0" />
              <TG className="w-10 h-10 lg:w-[60px] lg:h-10 flex-shrink-0" />
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <div className="text-lg: lg:text-sm xl:text-lg font-semibold truncate">Артём Волконитин</div>
          <div className="text-xs text-[#999999] mt-1">CEO</div>
        </div>
      </div>

      <div className="border border-[#262626] p-4 flex flex-col h-[450px] xl:h-[450px]">
        <div className="relative flex-1 mb-4 mt-6 items-center justify-center flex">
          <img
            className="w-full max-w-[250px] max-h-[300px] h-full object-cover object-center"
            src="src\public\image\Image (3).png"
            alt="Ян Лаптев"
          />
          <div className="absolute inset-0 flex items-end justify-center -mb-4">
            <div className="flex gap-8 justify-center w-full px-4">
              <VK className="w-10 h-10 lg:w-[60px] lg:h-10 flex-shrink-0" />
              <TG className="w-10 h-10 lg:w-[60px] lg:h-10 flex-shrink-0" />
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <div className="text-lg: lg:text-sm xl:text-lg font-semibold truncate">Ян Лаптев</div>
          <div className="text-xs text-[#999999] mt-1">CTO</div>
        </div>
      </div>
      
      <div className="border border-[#262626] p-4 flex flex-col h-[450px] xl:h-[450px]">
        <div className="relative flex-1 mb-4 mt-6 items-center justify-center flex">
          <img
            className="w-full max-w-[250px] max-h-[300px] h-full object-cover object-center"
            src="src\public\image\Image (4).png"
            alt="Родион Чикибаев"
          />
          <div className="absolute inset-0 flex items-end justify-center -mb-4">
            <div className="flex gap-8 justify-center w-full px-4">
              <VK className="w-10 h-10 lg:w-[60px] lg:h-10 flex-shrink-0" />
              <TG className="w-10 h-10 lg:w-[60px] lg:h-10 flex-shrink-0" />
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <div className="text-lg: lg:text-sm xl:text-lg font-semibold truncate">Родион Чикибаев</div>
          <div className="text-xs text-[#999999] mt-1">CPO</div>
        </div>
      </div>
       
      <div className="border border-[#262626] p-4 flex flex-col h-[450px] xl:h-[450px]">
        <div className="relative flex-1 mb-4 mt-6 items-center justify-center flex">
          <img
            className="w-full max-w-[250px] max-h-[300px] h-full object-cover object-center"
            src="src\public\image\Image (5).png"
            alt="Артемий Доброхотов"
          />
          <div className="absolute inset-0 flex items-end justify-center -mb-4">
            <div className="flex gap-8 justify-center w-full px-4">
              <VK className="w-10 h-10 lg:w-[60px] lg:h-10 flex-shrink-0" />
              <TG className="w-10 h-10 lg:w-[60px] lg:h-10 flex-shrink-0" />
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <div className="text-lg: lg:text-sm xl:text-lg font-semibold truncate">Артемий Доброхотов</div>
          <div className="text-xs text-[#999999] mt-1">TeamLead</div>
        </div>
      </div>
    </div>
  );
}

export default AboutContainer4;