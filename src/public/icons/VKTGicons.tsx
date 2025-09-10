import React from 'react';
interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const TG = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 66, height = 42, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 76 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle cursor-pointer hover:opacity-95 ${className}`}
      {...props}
    >
      <rect x="0.5" y="0.5" width="75" height="51" fill="#9966CC"/>
      <rect x="0.5" y="0.5" width="75" height="51" stroke="#9966CC"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5063 24.7633C34.4107 22.231 38.3413 20.5484 40.315 19.7321C45.9326 17.4165 47.1135 17.0167 47.8726 17C48.0413 17 48.4125 17.0333 48.6655 17.2332C48.8679 17.3998 48.9185 17.6164 48.9523 17.783C48.986 17.9496 49.0198 18.2994 48.986 18.566C48.6824 21.7313 47.3665 29.4112 46.6918 32.943C46.405 34.4423 45.8483 34.9421 45.3084 34.9921C44.1276 35.092 43.2335 34.2258 42.1032 33.4927C40.315 32.3433 39.3197 31.6269 37.5822 30.4941C35.5747 29.1946 36.8736 28.4783 38.0208 27.3121C38.3244 27.0123 43.5034 22.3476 43.6046 21.9312C43.6215 21.8812 43.6215 21.6813 43.5034 21.5813C43.3853 21.4814 43.2166 21.5147 43.0817 21.548C42.8961 21.5813 40.062 23.4472 34.5456 27.1289C33.7359 27.6786 33.0105 27.9452 32.3526 27.9285C31.6272 27.9119 30.2439 27.5287 29.198 27.1955C27.9327 26.7957 26.9206 26.5791 27.0049 25.8794C27.0555 25.5129 27.5616 25.1464 28.5063 24.7633Z" fill="white"/>
    </svg>

  )
);

export const VK = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 66, height = 42, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 76 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle cursor-pointer hover:opacity-95 ${className}`}
      {...props}
    >
      <rect x="0.5" y="0.5" width="75" height="51" fill="#9966CC"/>
      <rect x="0.5" y="0.5" width="75" height="51" stroke="#9966CC"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M26 18C26.1949 27.3694 30.8719 33 39.0718 33H39.5366V27.6396C42.5497 27.9399 44.8281 30.1472 45.7425 33H50C48.8307 28.7357 45.7575 26.3784 43.8387 25.4775C45.7575 24.3664 48.4558 21.6636 49.1004 18H45.2327C44.3933 20.973 41.9051 23.6757 39.5366 23.9309V18H35.6689V28.3904C33.2704 27.7898 30.2423 24.8769 30.1074 18H26Z" fill="white"/>
    </svg>
  )
);

VK.displayName = 'VK';
TG.displayName = 'TG';