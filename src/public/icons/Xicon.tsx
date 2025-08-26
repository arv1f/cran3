import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Xicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 14, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path d="M1 13L13 1M1 1L13 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
);

Xicon.displayName = 'Xicon';
export default Xicon;