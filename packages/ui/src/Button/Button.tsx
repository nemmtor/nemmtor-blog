import { ButtonProps } from './Button.types';

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-red-500 hover:bg-blue-700 h-16 w-16"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
