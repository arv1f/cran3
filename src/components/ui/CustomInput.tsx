import React, { type InputHTMLAttributes, forwardRef, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  fullWidth?: boolean;
  icon?: "call" | "mail" | "telegram";
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, success, fullWidth = true, className = '', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const containerClasses = `
      ${fullWidth ? 'w-full' : 'w-auto'}
      ${className}
    `;

    const inputClasses = `
      px-3 py-3
      bg-[#1A1A1A]
      w-[100%]
      text-[#666666]
      text-xs
      rounded-md
      border
      transition-all
      duration-200
      outline-none
      ${error 
        ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
        : success 
          ? 'border-green-500 focus:ring-2 focus:ring-green-200' 
          : isFocused 
            ? 'border-[#363636] focus:ring-1 focus:ring-[#161616]' 
            : 'border-[#262626] hover:border-[#303030]'
      }
      ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `;

    return (
      <div className={containerClasses}>
        {label && (
          <label className="block mb-1.5 text-sm font-medium text-white">
            {label}
          </label>
        )}
        
        <input
          ref={ref}
          className={inputClasses}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {error && (
          <p className="mt-1.5 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);
CustomInput.displayName = 'CustomInput';
export default CustomInput;