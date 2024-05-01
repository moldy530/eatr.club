import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Check from "./components/check";
import { EmailInput } from "./components/email";
import Logo from "./components/logo";
import { useModal } from "./components/modal";
import { DesktopView } from "./views/desktop";
import { MobileView } from "./views/mobile";

gsap.registerPlugin(useGSAP);

function App() {
  const { openModal: openSuccessModal, Modal: SuccessModal } = useModal();
  const checkMark = useRef<SVGSVGElement>(null);

  const onSubmit = () => {
    openSuccessModal();

    if (!checkMark.current) return;
    const tl = gsap.timeline({});
    const target = checkMark.current.getElementsByTagName("path");
    tl.fromTo(target, { fill: "#086E2B" }, { fill: "#33D46A", duration: 0.75 });
    tl.fromTo(target, { fill: "#33D46A" }, { fill: "#086E2B", duration: 0.75 });
  };

  return (
    <main className="flex w-screen flex-col items-center bg-white">
      <DesktopView onSubmit={onSubmit} />
      <MobileView onSubmit={onSubmit} />
      {/* footer */}
      <div className="relative flex h-[496px] w-full flex-col items-center justify-center bg-black px-[32px] py-[24px] md:mt-[22px]">
        <div className="flex w-full max-w-[560px] flex-col  gap-[70px]">
          <div className="flex flex-col items-center justify-center gap-[16px] text-white">
            <h1>Hungry for more?</h1>
            <h3>Join our waitlist now</h3>
          </div>
          <EmailInput onSubmit={onSubmit} />
        </div>
        <div className="absolute bottom-[24px] left-[32px]">
          <Logo height={38} width={"100%"} fill={"white"} />
        </div>
      </div>
      <SuccessModal className="h-[362px] w-[362px] lg:h-[508px] lg:w-[508px]">
        <div className="flex h-full flex-col items-center justify-center gap-7 px-[30px]">
          <Check ref={checkMark} />
          <h3 className="text-center font-extrabold">
            Thanks for your interest in Eatr!
          </h3>
          <div className="flex flex-col gap-4">
            <p className="text-center font-normal">
              Follow us on X{" "}
              <a
                target="_blank"
                className="text-green-700"
                href="https://twitter.com/eatrclub"
                rel="noreferrer"
              >
                @EatrClub
              </a>
            </p>
          </div>
        </div>
      </SuccessModal>
    </main>
  );
}

export default App;
