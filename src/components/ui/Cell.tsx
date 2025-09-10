interface CellProps {
  heading: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
const Cell = ({
  heading,
  children,
  className,
  ...props
}: CellProps) => {
  const baseStyles = "z-10 px-3 p-2 max-h-[170px] h-full bg-[#161616] border border-[#262626]";
  
  return (
    <div
      className={baseStyles}
      {...props}
    >
      <div className="text-[34px] tracking-normal leading-tight font-[1000] tracking-wider">{heading}</div>
      <div className={`text-sm md:text-[12px] w-[98%] mt-1 text-[#999999] font-regular font-[Inter] ${className || ""}`}>{children}</div>
    </div>
  );
};

export default Cell;