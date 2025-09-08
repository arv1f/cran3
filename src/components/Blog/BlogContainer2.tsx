import { Mailicon, TGicon } from "../../public/icons/BC2.icons";

function BlogContainer2 () {
  return(
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-2 lg:px-0">
      <div className="space-y-4">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">Оставайтесь с нами</div>
        <div className="text-xs text-[#999999]">
          Хотите первыми узнавать о всех актуальных новостях из мира IT и бизнеса - подписывайтесь на нашу информационную рассылку
        </div>
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            className="w-5 h-5 bg-[#1A1A1A] checked:bg-[#1A1A1A] border border-[#262626] rounded-none flex-shrink-0 focus:ring-0 cursor-pointer" 
          />
          <span className="text-xs text-[#999999] whitespace-normal md:whitespace-nowrap">
            Даю согласие на{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-white">обработку персональных данных</span>{" "}
            и{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-white">соглашаюсь с политикой конфиденциальности.</span>
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-2 border border-[#262626] bg-[#101010] text-[#999999] px-2 py-3 mt-4 md:mt-0 mg:ml-[10%] md:w-[90%] lg:ml-[20%] lg:w-[80%] hover:border-[#404040] transition-colors">
        <Mailicon className="w-6 h-6"/>
        <input 
          type="text" 
          placeholder="Введите ваш email" 
          className="flex-1 bg-transparent outline-none placeholder-[#999999] cursor-text"
        />
        <TGicon className="w-6 h-6 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" />
      </div>
    </div>
  );
};
export default BlogContainer2;








// import { Mailicon, TGicon } from "../../public/icons/BC2.icons";

// function BlogContainer2 () {
//   return(
//     <div className="mt-10 h-[150px] grid grid-cols-1 grid-rows-[90%_10%] gap-4 md:grid-rows-1 md:grid-cols-2 items-center justify-center px-2 lg:px-0">
//       <div className="col-start-1 row-start-1 w-screen md:w-full">
//         <div className="text-2xl md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px] tracking-normal leading-tight font-[600]">Оставайтесь с нами</div>
//         <div className="text-xs text-[#999999] w-[95%] md:w-[130%] lg:w-[110%] xl:w-[128%]">Хотите первыми узнвать о всех актуальных новостях из мира ит и бизнеса - подписывайтесь на нашу ииформационную рассылку</div>
//         <div className="grid grid-rows-[70%] grid-cols-1 lg:grid-rows-1 lg:grid-cols-[80%_auto] lg:mt-10 h-[150px] px-1 md:px-0">
//           <div className="flex items-start justify-center space-x-2 mt-2">
//           <input type="checkbox" 
//             className="w-6 h-6 mt-0.5 bg-[#1A1A1A] checked:bg-[#1A1A1A] border border-[#262626] rounded-none" />
//           <span className="row-start-1 col-start-1 block mt-0.5 text-xs text-[#999999] font-inter leading-tight">
//             Даю согласие на{" "}
//             <span className="underline underline-offset-2">обработку персональных данных</span>{" "}
//             и{" "}
//             <span className="underline underline-offset-2">соглашаюсь с политикой конфиденциальности.</span>
//           </span>
//           </div>
//         </div>
//       </div>

//       <div className="row-start-2 col-start-1 md:row-start-1 md:col-start-2 lg:-mt-[170px] max-h-[64px] lg:w-[400px] relative flex items-center space-x-2 border rounded-lg border-[#262626] bg-[#101010] text-[#999999] px-2 py-2">
//         <Mailicon className="hidden md:block"/>
//         <input type="text" placeholder="Введите ваш email" className="flex-1 bg-transparent outline-none placeholder-[#999999]"/>
//         <TGicon className="ml-auto w-[60px] md:w-[32px] h-[32px]" />
//       </div>
//     </div>
//   );
// };
// export default BlogContainer2;