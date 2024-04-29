import heroPoster from "./assets/hero-poster.png";
import hero from "./assets/hero.mov";
import prop1 from "./assets/prop-1.png";
import prop2 from "./assets/prop-2.png";
import prop3 from "./assets/prop-3.png";
import { Button } from "./components/button";
import { EmailInput } from "./components/email";
import Logo from "./components/logo";

function App() {
  return (
    <main className="flex flex-col items-center bg-white">
      <div className="flex max-w-[1440px] flex-col">
        {/* nav */}
        <div className="flex w-full flex-row justify-between px-[32px] py-[20px]">
          <Logo height={38} width={92}></Logo>
          <Button>Sign up</Button>
        </div>
        {/* header */}
        <div className="flex flex-row gap-[26px] px-[32px] py-[48px]">
          <div className="flex basis-2/4 flex-col gap-[36px]">
            <div className="flex flex-col gap-[16px]">
              <h1>No more dinner indecision.</h1>
              <h4>Stop overpaying for your cravings.</h4>
            </div>
            <p>
              Eatr finds you friend-recommended takeout for the cheapest
              possible price
            </p>
            <EmailInput />
          </div>
          <div className="flex h-full w-full basis-2/4 content-center justify-center">
            <div className="h-full w-full">
              <Logo width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>
        {/* hero with video */}
        <div>
          <video autoPlay playsInline muted poster={heroPoster}>
            <source src={hero} type="video/mp4"></source>
          </video>
        </div>
        {/* value props */}
        <div className="mt-[22px] flex flex-col px-[32px]">
          <div className="flex basis-3/4 flex-row content-center justify-center gap-[72px] py-[20px]">
            <div className="flex flex-col content-center justify-center gap-[28px]">
              <h1>Cure indecision fatigue with the help of your friends</h1>
              <p>
                Find hidden gems recommended by the people you trust most.
                <br />
                <br />
                With Eatr, you can see ratings for each dish so you know exactly
                what to add to bag. Perfect for when star ratings just aren't
                cutting it.
              </p>
            </div>
            <div>
              <img src={prop1} alt="cure indecesion fatigue image"></img>
            </div>
          </div>
          <div className="flex basis-3/4 flex-row content-center justify-center gap-[72px] py-[20px]">
            <div>
              <img src={prop2} alt="the whole crew's favorites image"></img>
            </div>
            <div className="flex flex-col content-center justify-center gap-[28px]">
              <h1>The whole crew's favorite takeout spots in one place</h1>
              <p>
                Finally - an easy way to catch up with all your friends' food
                recs without hunting through the group chat.
                <br />
                <br />
                Search for whatever you're craving, look up that one friend who
                just gets your taste or browse reviews from your inner circle.
              </p>
            </div>
          </div>
          <div className="flex basis-3/4 flex-row content-center justify-center gap-[72px] py-[20px]">
            <div className="flex flex-col content-center justify-center gap-[28px]">
              <h1>Compare prices across delivery apps and get the best deal</h1>
              <p>
                Let Eatr do the legwork to find you the cheapest price. We
                compare all the fees and extra costs across delivery apps so you
                don't have to.
              </p>
            </div>
            <div>
              <img src={prop3} alt="compare prices images"></img>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="relative mt-[22px] flex h-[496px] w-full flex-col items-center justify-center bg-black px-[32px] py-[24px]">
        <div className="flex w-full max-w-[680px] flex-col  gap-[70px]">
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
