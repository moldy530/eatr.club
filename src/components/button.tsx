import { PropsWithChildren } from "react";

interface ButtonProps {
  className?: string;
}

export const Button = ({
  children,
  className,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`flex justify-center rounded-md bg-green-500 p-[10px] text-lg font-medium shadow-e hover:bg-green-400 focus:outline-2 focus:outline-green-700 active:bg-green-400 active:shadow-none md:px-[30px] md:py-[10px] ${className}`}
    >
      {children}
    </button>
  );
};
