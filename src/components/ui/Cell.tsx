interface CellProps {
  heading: string;
  children: React.ReactNode;
  className?: string;
}
const Cell = ({
  heading,
  children,
  className,
  ...props
}: CellProps) => {
  const baseStyles = "z-10 p-4 py-3 bg-[#161616] border border-[#262626]";
  
  return (
    <div
      className={baseStyles}
      {...props}
    >
      <div className="text-[34px] tracking-normal leading-tight font-[1000] ">{heading}</div>
      <div className={`text-[12px] w-[95%] mt-1 text-[#999999] font-regular font-[Inter] ${className || ""}`}>{children}</div>
    </div>
  );
};

export default Cell;