/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label: string;
  className?: string;
  errors?: any;
  register?: any
}

const PasswordInput = ({ id, label, className = '', errors, register, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid gap-3">
      <label 
        htmlFor={id} 
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <div>
        <div className="relative">
          <input
            {...register(id)}
            id={id}
            type={showPassword ? 'text' : 'password'}
            className={cn(
              "flex h-11 w-full rounded-md border bg-background px-3 py-2 pr-10 text-sm ring-offset-background",
              "file:border-0 file:bg-transparent file:text-sm file:font-medium",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              errors?.[id] ? "border-red-500 focus-visible:ring-red-500" : "border-input focus-visible:ring-ring",
              className
            )}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        {errors?.[id] && <p className="text-red-500 text-sm mt-1">{String(errors[id]?.message)}</p>}
      </div>
    </div>
  );
};

export default PasswordInput;