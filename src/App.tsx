import { EmailInput } from "./components/email";
import Logo from "./components/logo";
import { DesktopView } from "./views/desktop";
import { MobileView } from "./views/mobile";

function App() {
  return (
    <main className="flex w-screen flex-col items-center bg-white">
      <DesktopView />
      <MobileView />
      {/* footer */}
      <div className="relative flex h-[496px] w-full flex-col items-center justify-center bg-black px-[32px] py-[24px] md:mt-[22px]">
        <div className="flex w-full max-w-[560px] flex-col  gap-[70px]">
          <div className="flex flex-col items-center justify-center gap-[16px] text-white">
            <h1>Hungry for more?</h1>
            <h3>Join our waitlist now</h3>
          </div>
          <EmailInput />
        </div>
        <div className="absolute bottom-[24px] left-[32px]">
          <Logo height={38} width={"100%"} fill={"white"} />
        </div>
      </div>
    </main>
  );
}

export default App;
