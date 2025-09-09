import Staricon from "../../public/icons/Staricon";
function HomeContainer5() {
  return(
    <div className="mt-14 grid sm:px-[15%] md:px-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="w-full border border-[#262626] p-8 px-7 gap-4 grid grid-rows-[44px_26px_auto_50px]">
        <div className="grid grid-cols-5 gap-[1px] w-[200px]">
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
        </div>
        <div className="font-[Inter] font-medium">Exceptional Service!</div>
        <div className="text-xs w-[100%] font-[Inter] font-light">Our experience with Estatein was outstanding.<br/> Their team's dedication and professionalism<br/> made finding our dream home a breeze. Highly recommended!</div>
        <div className="grid grid-cols-[20%_auto] lg:grid-cols-[30%_auto] xl:grid-cols-[20%_auto] gap-2">
          <img className="w-10 h-10" src="src\public\image\1image.png" alt="" />
          <div className="grid grid-rows-2 lg:grid-rows-[45%_] xl:grid-rows-2">
            <div className="text-sm text-nowrap font-[Inter] font-medium">Wade Warren</div>
            <div className="text-xs text-[#999999] font-[Inter] font-regular">USA, California</div>
          </div>
        </div>
      </div>

      <div className="w-full border border-[#262626] p-8 px-7 gap-4 grid grid-rows-[44px_26px_auto_50px]">
        <div className="grid grid-cols-5 gap-[1px] w-[200px]">
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
        </div>
        <div className="font-[Inter] font-medium">Efficient and Reliable</div>
        <div className="text-xs w-[100%] font-[Inter] font-light">Estatein provided us with top-notch service.<br/> They helped us sell our property quickly and at<br/> a great price. We couldn't be happier with the<br/> results.</div>
        <div className="grid grid-cols-[20%_auto] lg:grid-cols-[30%_auto] xl:grid-cols-[20%_auto]">
          <img className="w-10 h-10" src="src\public\image\2image.png" alt="" />
          <div className="grid grid-rows-2 lg:grid-rows-[45%_] xl:grid-rows-2 gap-2">
            <div className="text-sm text-nowrap font-[Inter] font-medium">Emelie Thomson</div>
            <div className="text-xs text-[#999999] font-[Inter] font-regular">USA, Florida</div>
          </div>
        </div>
      </div>
      
      <div className="w-full border border-[#262626] p-8 px-7 gap-4 grid grid-rows-[44px_26px_auto_50px]">
        <div className="grid grid-cols-5 gap-[1px] w-[200px]">
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
        </div>
        <div className="font-[Inter] font-medium">Thusted Advisors</div>
        <div className="text-xs w-[100%] font-[Inter] font-light">The Estatein team guided us through the entire<br/> buying process. Their knowledge and<br/> commitment to our needs were impressive.<br/> Thank you for your support!</div>
        <div className="grid grid-cols-[20%_auto] lg:grid-cols-[30%_auto] xl:grid-cols-[20%_auto]">
          <img className="w-10 h-10" src="src\public\image\3image.png" alt="" />
          <div className="grid grid-rows-2 lg:grid-rows-[45%_] xl:grid-rows-2 gap-2 ">
            <div className="text-sm text-nowrap font-[Inter] font-medium">John Mans</div>
            <div className="text-xs text-[#999999] font-[Inter] font-regular">USA, Nevada</div>
          </div>
        </div>
      </div>
    </div>
  );};
export default HomeContainer5;