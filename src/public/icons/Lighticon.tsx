import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Lighticon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 19, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={21}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block align-middle ${className}`}
      {...props}
    >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3833 0.334953C12.6807 0.500756 12.8267 0.848008 12.7371 1.17651L10.7708 8.38614H17.9463C18.2411 8.38614 18.5079 8.56107 18.6254 8.83148C18.7429 9.1019 18.6888 9.41626 18.4876 9.63181L8.12135 20.7385C7.88903 20.9874 7.51689 21.0458 7.21949 20.88C6.92209 20.7142 6.7761 20.3669 6.86569 20.0385L8.83195 12.8288H1.65648C1.36163 12.8288 1.09489 12.6539 0.97738 12.3835C0.859871 12.1131 0.913994 11.7987 1.11517 11.5831L11.4814 0.476462C11.7137 0.227541 12.0859 0.16915 12.3833 0.334953Z" fill="white"/>
      </svg>
  )
);

Lighticon.displayName = 'Lighticon';
export default Lighticon;