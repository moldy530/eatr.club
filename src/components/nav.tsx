import { Button } from "./button";
import Logo from "./logo";

export const Nav = () => {
  return (
    <div className="flex w-full flex-row justify-between p-[16px] md:px-[32px] md:py-[20px]">
      <Logo height={38} width={92}></Logo>
      <Button className="hidden md:flex">Sign up</Button>
    </div>
  );
};
