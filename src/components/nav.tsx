import { Button } from "./button";
import { EmailInput } from "./email";
import Logo from "./logo";
import { useModal } from "./modal";

interface Props {
  onSuccess?: () => void;
}

export const Nav = (props: Props) => {
  const { openModal, Modal } = useModal();

  return (
    <div className="flex w-full flex-row justify-between p-[16px] md:px-[32px] md:py-[20px]">
      <Logo height={38} width={92}></Logo>
      <Button className="hidden md:flex" onClick={openModal}>
        Sign up
      </Button>
      <Modal className="h-[362px] w-[362px] lg:h-[508px] lg:w-[508px]">
        <div className="flex h-full w-full flex-col items-center justify-center gap-8">
          <h3 className="text-center font-extrabold">
            Enter your email to get the latest news from Eatr
          </h3>
          <EmailInput
            direction="col"
            onSubmit={
              props.onSuccess ??
              (() => {
                return;
              })
            }
          />
        </div>
      </Modal>
    </div>
  );
};
