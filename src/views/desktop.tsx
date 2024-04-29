import heroPoster from "../assets/hero-poster.png";
import hero from "../assets/hero.mov";
import prop1 from "../assets/prop-1.png";
import prop2 from "../assets/prop-2.png";
import prop3 from "../assets/prop-3.png";
import { EmailInput } from "../components/email";
import Logo from "../components/logo";
import { Nav } from "../components/nav";

export const DesktopView = () => {
  return (
    <div className="hidden max-w-[1440px] flex-col md:flex">
      {/* nav */}
      <Nav />
      {/* header */}
      <div className="flex flex-row items-center gap-[26px] px-[32px] py-[48px]">
        <div className="flex flex-col gap-[36px] lg:basis-2/4">
          <div className="flex flex-col gap-[16px]">
            <h1>No more dinner indecision.</h1>
            <h4>Stop overpaying for your cravings.</h4>
          </div>
          <p>
            Eatr finds you friend-recommended takeout for the cheapest possible
            price
          </p>
          <EmailInput />
        </div>
        <div className="hidden h-full w-full content-center justify-center lg:flex lg:basis-2/4">
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
            <h2>Cure indecision fatigue with the help of your friends</h2>
            <p>
              Find hidden gems recommended by the people you trust most.
              <br />
              <br />
              With Eatr, you can see ratings for each dish so you know exactly
              what to add to bag. Perfect for when star ratings just aren&apos;t
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
            <h2>The whole crew&apos;s favorite takeout spots in one place</h2>
            <p>
              Finally - an easy way to catch up with all your friends&apos; food
              recs without hunting through the group chat.
              <br />
              <br />
              Search for whatever you&apos;re craving, look up that one friend
              who just gets your taste or browse reviews from your inner circle.
            </p>
          </div>
        </div>
        <div className="flex basis-3/4 flex-row content-center justify-center gap-[72px] py-[20px]">
          <div className="flex flex-col content-center justify-center gap-[28px]">
            <h2>Compare prices across delivery apps and get the best deal</h2>
            <p>
              Let Eatr do the legwork to find you the cheapest price. We compare
              all the fees and extra costs across delivery apps so you
              don&apos;t have to.
            </p>
          </div>
          <div>
            <img src={prop3} alt="compare prices images"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
