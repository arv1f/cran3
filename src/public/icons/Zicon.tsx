import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const Zicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className = '', ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 31 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path d="M1.76923 20.5L0 18.7308L11.5385 7.19231L17.6923 13.3846L29.1538 0.5L30.7692 2.07692L17.6923 16.8462L11.5385 10.7308L1.76923 20.5Z" fill="white"/>
    </svg>
  )
);

Zicon.displayName = 'Zicon';
export default Zicon;