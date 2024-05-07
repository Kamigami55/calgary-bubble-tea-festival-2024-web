import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className="text-body1regular rounded-[5px] bg-primary px-6 py-3 text-white transition duration-0 hover:bg-primary/80 hover:duration-500 focus-visible:outline"
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
export type { ButtonProps };
