import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const Searchicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 56, height = 44, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 72 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <rect width="72" height="60" fill="#9966CC"/>
      <path d="M45 39L39.8033 33.8033M39.8033 33.8033C41.1605 32.4461 42 30.5711 42 28.5C42 24.3579 38.6421 21 34.5 21C30.3579 21 27 24.3579 27 28.5C27 32.6421 30.3579 36 34.5 36C36.5711 36 38.4461 35.1605 39.8033 33.8033Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
);

export const Houseicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 22, height = 20, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path d="M18.0065 1.70505C18.3958 1.56349 18.5966 1.13317 18.455 0.743897C18.3135 0.354622 17.8832 0.153804 17.4939 0.295359L5.00037 4.83846V1.00021C5.00037 0.585992 4.66458 0.250206 4.25037 0.250206H2.75037C2.33615 0.250206 2.00037 0.585992 2.00037 1.00021V5.92937L0.993897 6.29536C0.604622 6.43691 0.403804 6.86724 0.545359 7.25651C0.686914 7.64579 1.11724 7.8466 1.50651 7.70505L18.0065 1.70505Z" fill="#999999"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.01932 9.11473L17.0004 3.66708V7.08858L21.0065 8.54536C21.3958 8.68691 21.5966 9.11724 21.455 9.50651C21.3135 9.89579 20.8832 10.0966 20.4939 9.95505L20.0002 9.77553V18.2502H20.7504C21.1646 18.2502 21.5004 18.586 21.5004 19.0002C21.5004 19.4144 21.1646 19.7502 20.7504 19.7502H1.25037C0.836153 19.7502 0.500366 19.4144 0.500366 19.0002C0.500366 18.586 0.836153 18.2502 1.25037 18.2502H2.00037V9.12153L2.01932 9.11473ZM17.0004 18.2502V8.68468L18.5002 9.23007V18.2502H17.0004ZM8.00037 12.2502C7.58615 12.2502 7.25037 12.586 7.25037 13.0002V17.5002C7.25037 17.9144 7.58615 18.2502 8.00037 18.2502H11.0004C11.4146 18.2502 11.7504 17.9144 11.7504 17.5002V13.0002C11.7504 12.586 11.4146 12.2502 11.0004 12.2502H8.00037Z" fill="#999999"/>
    </svg>
  )
);

export const Cubeicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 20, height = 21, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <path d="M10.1279 0.102166C9.89438 -0.0340553 9.60562 -0.0340553 9.3721 0.102166L0.75 5.13172L9.75 10.3817L18.75 5.13172L10.1279 0.102166Z" fill="#999999"/>
      <path d="M19.5 6.43078L10.5 11.6808V20.6808L19.1279 15.6478C19.3583 15.5134 19.5 15.2668 19.5 15V6.43078Z" fill="#999999"/>
      <path d="M9 20.6808V11.6808L0 6.43078V15C0 15.2668 0.141683 15.5134 0.372097 15.6478L9 20.6808Z" fill="#999999"/>
    </svg>
  )
);

export const DownArrowicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className = '', ...props }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
      <rect width="32" height="32" rx="16" fill="#1A1A1A"/>
      <path d="M23.5 12.25L16 19.75L8.5 12.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
);


DownArrowicon.displayName = 'DownArrowicon';
Searchicon.displayName = 'Searchicon';
Houseicon.displayName = 'Houseicon';
Cubeicon.displayName = 'Cubeicon';