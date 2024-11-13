// Button.tsx
import React from 'react';
import { Icon } from 'react-feather';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: Icon;
  iconPosition?: 'start' | 'end';
}

export const Button: React.FC<ButtonProps> = ({
  label = 'Okay',
  icon: IconComponent,
  iconPosition = 'start',
  disabled = false,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-black text-white font-mono text-sm py-2 px-6 rounded-md
                  hover:bg-gray-800 active:bg-gray-700 focus:outline-none
                  disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={disabled}
      {...rest}
    >
      {IconComponent && iconPosition === 'start' && (
        <IconComponent className="w-4 h-4" />
      )}

      <span>{label}</span>

      {IconComponent && iconPosition === 'end' && (
        <IconComponent className="w-4 h-4" />
      )}
    </button>
  );
};
