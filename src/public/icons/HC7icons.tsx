import React from 'react';
interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export const Phoneicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 20, height = 20, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle flex-shrink-0 ${className}`}
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 3.5C0.5 1.84315 1.84315 0.5 3.5 0.5H4.87163C5.732 0.5 6.48197 1.08556 6.69064 1.92025L7.79644 6.34343C7.97941 7.0753 7.70594 7.84555 7.10242 8.29818L5.8088 9.2684C5.67447 9.36915 5.64527 9.51668 5.683 9.61969C6.81851 12.7195 9.28051 15.1815 12.3803 16.317C12.4833 16.3547 12.6309 16.3255 12.7316 16.1912L13.7018 14.8976C14.1545 14.2941 14.9247 14.0206 15.6566 14.2036L20.0798 15.3094C20.9144 15.518 21.5 16.268 21.5 17.1284V18.5C21.5 20.1569 20.1569 21.5 18.5 21.5H16.25C7.55151 21.5 0.5 14.4485 0.5 5.75V3.5Z" fill="white"/>
    </svg>
  )
);

export const Emailicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 22, height = 18, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle flex-shrink-0 ${className}`}
      {...props}
    >
      <path d="M0.5 5.6691V14.25C0.5 15.9069 1.84315 17.25 3.5 17.25H18.5C20.1569 17.25 21.5 15.9069 21.5 14.25V5.6691L12.5723 11.1631C11.6081 11.7564 10.3919 11.7564 9.42771 11.1631L0.5 5.6691Z" fill="white"/>
      <path d="M21.5 3.90783V3.75C21.5 2.09315 20.1569 0.75 18.5 0.75H3.5C1.84315 0.75 0.5 2.09315 0.5 3.75V3.90783L10.2139 9.88558C10.696 10.1823 11.304 10.1823 11.7861 9.88558L21.5 3.90783Z" fill="white"/>
    </svg>
  )
);

export const Telegramicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 22, height = 18, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle flex-shrink-0 ${className}`}
      {...props}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.36937 7.33196C6.73698 4.94042 10.3103 3.3513 12.1046 2.58035C17.2115 0.393346 18.285 0.0157338 18.9751 0C19.1285 0 19.4659 0.0314679 19.6959 0.220274C19.8799 0.377612 19.926 0.582152 19.9566 0.73949C19.9873 0.896828 20.018 1.22724 19.9873 1.47898C19.7112 4.46841 18.515 11.7217 17.9016 15.0573C17.6409 16.4733 17.1348 16.9453 16.644 16.9925C15.5705 17.0869 14.7577 16.2688 13.7302 15.5765C12.1046 14.4908 11.1998 13.8143 9.62015 12.7444C7.79516 11.5172 8.97604 10.8406 10.0189 9.73924C10.2949 9.45603 15.0031 5.05056 15.0951 4.65721C15.1104 4.61001 15.1104 4.4212 15.0031 4.3268C14.8957 4.2324 14.7424 4.26387 14.6197 4.29533C14.451 4.3268 11.8745 6.08899 6.85967 9.56616C6.12354 10.0854 5.46409 10.3371 4.86598 10.3214C4.20654 10.3057 2.94898 9.94377 1.99815 9.6291C0.847949 9.25149 -0.0722116 9.04695 0.00446848 8.38613C0.0504765 8.03998 0.510557 7.69384 1.36937 7.33196Z" fill="white"/>
    </svg>
  )
);

export const Circleicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 22, height = 16, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle flex-shrink-0 ${className}`}
      {...props}
    >
      <circle cx="8" cy="8" r="7.5" stroke="#9966CC"/>
    </svg>
  )
);

export const Circleactiveicon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 16, height = 16, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle flex-shrink-0 ${className}`}
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill="#9966CC"/>
    </svg>
  )
);



Circleicon.displayName = 'Circleicon';
Circleactiveicon.displayName = 'Circleactiveicon';
Telegramicon.displayName = 'Telegramicon';
Phoneicon.displayName = 'Phoneicon';
Emailicon.displayName = 'Emailicon';