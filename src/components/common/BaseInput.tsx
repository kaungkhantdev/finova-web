import { type InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  className?: string;
}

const BaseInput = ({ id, label, className = '', ...props }: InputFieldProps) => {
  return (
    <div className="grid gap-3">
      <label 
        htmlFor={id} 
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <input
        id={id}
        className={`flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
      />
    </div>
  );
};

export default BaseInput;