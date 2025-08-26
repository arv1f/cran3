import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const CRANicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({size, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 56 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path d="M52.7578 28.5999L52.7578 52.3191L45.8828 52.3191L36.7161 30.9958L29.8411 30.9958L29.8411 54.9541" stroke="white" stroke-width="4.5375" stroke-linejoin="round"/>
      <path d="M22.9141 11.1818V2.29193L2.28906 2.29199V24.0628L22.9141 24.0628V16.2211" stroke="white" stroke-width="4.5375" stroke-linejoin="round"/>
      <path d="M29.7943 26.3545L29.7943 13.69M29.7943 13.69L29.7943 2.29199L52.7109 2.29199L52.7109 13.69L29.7943 13.69ZM29.7943 13.69L52.7109 21.9219L52.7109 26.3545" stroke="white" stroke-width="4.5375" stroke-linejoin="round"/>
      <path d="M2.28907 55L2.28907 43.602M2.28907 43.602L2.28906 30.9375L22.9141 30.9375L22.9141 43.602M2.28907 43.602L22.9141 43.602M22.9141 43.602L22.914 55" stroke="white" stroke-width="4.5375" stroke-linejoin="round"/>
    </svg>
  )
);

CRANicon.displayName = 'CRANicon';
export default CRANicon;