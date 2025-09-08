interface CellProps {
  heading: string;
  children: string
  className?: string;
}
const Cell = ({
  heading,
  children,
  className,
  ...props
}: CellProps) => {
  const baseStyles = "z-10 p-4 bg-[#161616] border border-[#262626]";
  
  return (
    <div
      className={`${baseStyles} ${className || ""}`}
      {...props}
    >
      <div className="text-[32px] tracking-normal leading-tight font-[600]">{heading}</div>
      <div className="text-xs w-[95%] mt-1 text-[#999999]">{children}</div>
    </div>
  );
};

export default Cell;