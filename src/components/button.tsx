import { PropsWithChildren } from "react";

export const Button = ({ children }: PropsWithChildren) => {
  return (
    <button className="shadow-e flex rounded-md bg-green-500 px-[30px] py-[10px] text-lg font-medium hover:bg-green-400 focus:outline-2 focus:outline-green-700 active:bg-green-400 active:shadow-none">
      {children}
    </button>
  );
};
