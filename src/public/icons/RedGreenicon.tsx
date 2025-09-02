import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const RedXicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 21, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path d="M6.3 15.925L10.5 11.725L14.7 15.925L15.925 14.7L11.725 10.5L15.925 6.3L14.7 5.075L10.5 9.275L6.3 5.075L5.075 6.3L9.275 10.5L5.075 14.7L6.3 15.925ZM1.75 21C1.28333 21 0.875 20.825 0.525 20.475C0.175 20.125 0 19.7167 0 19.25V1.75C0 1.28333 0.175 0.875 0.525 0.525C0.875 0.175 1.28333 0 1.75 0H19.25C19.7167 0 20.125 0.175 20.475 0.525C20.825 0.875 21 1.28333 21 1.75V19.25C21 19.7167 20.825 20.125 20.475 20.475C20.125 20.825 19.7167 21 19.25 21H1.75ZM1.75 19.25H19.25V1.75H1.75V19.25Z" fill="#CC6699"/>
    </svg>
  )
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const GreenYicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 21, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path d="M8.72083 15.1375L17.15 6.70833L15.8958 5.45417L8.72083 12.6292L5.25 9.15833L3.99583 10.4125L8.72083 15.1375ZM1.75 21C1.28333 21 0.875 20.825 0.525 20.475C0.175 20.125 0 19.7167 0 19.25V1.75C0 1.28333 0.175 0.875 0.525 0.525C0.875 0.175 1.28333 0 1.75 0H19.25C19.7167 0 20.125 0.175 20.475 0.525C20.825 0.875 21 1.28333 21 1.75V19.25C21 19.7167 20.825 20.125 20.475 20.475C20.125 20.825 19.7167 21 19.25 21H1.75ZM1.75 19.25H19.25V1.75H1.75V19.25Z" fill="#66CC99"/>
    </svg>
  )
);
GreenYicon.displayName = 'GreenYicon';