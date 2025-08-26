import Staricon from "../public/icons/Staricon";
function HomeContainer5() {
  return(
    <div className="mt-10 grid grid-cols-3 gap-6">
      <div className="border border-[#262626] p-6 gap-6 rounded-lg p-4 grid grid-rows-[15%_5%_]">
        <div className="grid grid-cols-10 gap-9">
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
        </div>
        <div>Exceptional Service!</div>
        <div className="text-xs">Our experience with Estatein was outstanding.<br/> Their team's dedication and professionalism<br/> made finding our dream home a breeze. Highly recommended!</div>
        <div className="grid grid-cols-[15%_auto]">
          <img className="w-10 h-10" src="src\public\image\1image.png" alt="" />
          <div className="grid grid-rows-2">
            <div className="text-sm">Wade Warren</div>
            <div className="text-xs text-[#999999] text-[Inter]">USA, California</div>
          </div>
        </div>
      </div>

      <div className="border border-[#262626] p-6 gap-6 rounded-lg p-4 grid grid-rows-[15%_5%_]">
        <div className="grid grid-cols-10 gap-9">
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
        </div>
        <div>Efficient and Reliable</div>
        <div className="text-xs">Estatein provided us with top-notch service.<br/> They helped us sell our property quickly and at<br/> a great price. We couldn't be happier with the<br/> results.</div>
        <div className="grid grid-cols-[15%_auto]">
          <img className="w-10 h-10" src="src\public\image\2image.png" alt="" />
          <div className="grid grid-rows-2">
            <div className="text-sm">Emelie Thomson</div>
            <div className="text-xs text-[#999999] text-[Inter]">USA, Florida</div>
          </div>
        </div>
      </div>
      
      <div className="border border-[#262626] p-6 gap-6 rounded-lg p-4 grid grid-rows-[15%_5%_]">
        <div className="grid grid-cols-10 gap-9">
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
          <Staricon/>
        </div>
        <div>Thusted Advisors</div>
        <div className="text-xs">The Estatein team guided us through the entire<br/> buying process. Their knowledge and<br/> commitment to our needs were impressive.<br/> Thank you for your support!</div>
        <div className="grid grid-cols-[15%_auto]">
          <img className="w-10 h-10" src="src\public\image\3image.png" alt="" />
          <div className="grid grid-rows-2">
            <div className="text-sm">John Mans</div>
            <div className="text-xs text-[#999999] text-[Inter]">USA, Nevada</div>
          </div>
        </div>
      </div>
    </div>
  );};
export default HomeContainer5;