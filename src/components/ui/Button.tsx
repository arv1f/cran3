interface ButtonProps {
  children: string;
  buttonType?: "black" | "purple";
  borderTransparent?: boolean;
  className?: string;
}
const Button = ({
  children,
  buttonType = "black", 
  borderTransparent = true,
  className,
  ...props
}: ButtonProps) => {
  let baseStyles = "text-nowrap text-[#F5DFDF] text-medium w-fit px-[15px] xl:px-[15px] h-[48px] flex items-center justify-center border hover:border-[#262626]";

  if (borderTransparent){//Для кнопки Контакты из header
    baseStyles += " border-transparent";
  } else {
    baseStyles += " border-[#262626]"
  }

  if (buttonType === "black") {
    baseStyles += " text-xs hover:bg-[#101010] rounded-lg";//Вначале важно пробел не забывать чтобы стили не слетали
  } else if (buttonType === "purple") {
    baseStyles += " h-[49px] text-xs bg-[#9966CC] hover:bg-[#9955BB] tracking-wide rounded-md";
  }
  
  return (
    <button
      className={`${baseStyles} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;


// interface ButtonProps {
//   children: string;
//   buttonType?: "black" | "purple"; 
//   className?: string;
//   href?: string; // Для навигационных кнопок
//   onClick?: () => void; // Обработчик клика
// }
// const Button = ({
//   children,
//   buttonType = "black", 
//   className,
//   href,
//   onClick,
//   ...props
// }: ButtonProps) => {
//   let baseStyles = "text-xs lg:text-sm xl:text-base text-white w-fit h-[55px] px-[15px] xl:px-[20px] flex items-center justify-center border border-transparent hover:border-[#262626] rounded-lg";
//   if (buttonType === "black") {
//     baseStyles += " hover:bg-[#050505]";//Вначале важно пробел не забывать чтобы стили не слетали
//   } else if (buttonType === "purple") {
//     baseStyles += " bg-[#9966CC] hover:bg-[#9955BB]";
//   }
  
//   if (href) {
//     return (
//       <Link
//         to={href}
//         className={`${baseStyles} ${className}`}
//         onClick={onClick}
//         {...props}
//       >
//         {children}
//       </Link>
//     );
//   }

//   return (
//     <button
//       className={`${baseStyles} ${className || ""}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;