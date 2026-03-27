import { LucideIcon } from "lucide-react";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  icon: Icon,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={`group bg-white flex items-center border-2 rounded-md px-2 py-1 transition-all
        ${error ? "border-red-500" : "border-athens-gray-300"}
        focus-within:border-roman-500 focus-within:ring-2 focus-within:ring-roman-300 hover:border-roman-500`}
      >
        {Icon && (
          <Icon
            className={`transition-colors
            ${error ? "text-red-500" : "text-athens-gray-300"}
            group-focus-within:text-roman-500 group-hover:text-roman-500`}
          />
        )}
        <input
          {...props}
          className="flex-1 outline-none p-1.5 rounded-md font-normal w-full"
        />
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};
