import hero from "../assets/hero-mobile.png";
import prop1 from "../assets/prop-1.png";
import prop2 from "../assets/prop-2.png";
import prop3 from "../assets/prop-3.png";
import { EmailInput } from "../components/email";
import { Nav } from "../components/nav";
import { PropCard, PropContainer } from "../components/prop-card";

interface Props {
  onSubmit: () => void;
}

export const MobileView = ({ onSubmit }: Props) => {
  return (
    <div className="flex w-full flex-col md:hidden">
      <Nav />
      <div className="relative w-full before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-image before:content-['']">
        <div className="absolute bottom-0 left-0 flex w-full flex-col gap-4 px-4 py-4">
          <div className="flex flex-col gap-4 text-white">
            <h1>No more dinner indecision.</h1>
            <p>
              Eatr finds friend-recommended takeout for the cheapest possible
              price
            </p>
          </div>
          <EmailInput onSubmit={onSubmit} />
        </div>
        <img src={hero} className="h-[560px] w-full object-cover" />
      </div>
      <div className="flex w-full flex-col bg-black pt-12">
        <PropContainer>
          <PropCard
            header={"Eatr compares prices across delivery apps"}
            description={
              "Let Eatr do the legwork to find you the cheapest price on takeout."
            }
            image={prop3}
          />
          <PropCard
            header={"The whole crew's favorites in one place"}
            description={
              "Finally - an easy way to catch up with all your friends’ food recs without hunting through the group chat."
            }
            image={prop2}
          />
          <PropCard
            header={"Cure indecision fatigue"}
            description={
              "Find hidden gems recommended by the people you trust most. Perfect for when anonymous ratings just aren’t cutting it."
            }
            image={prop1}
          />
        </PropContainer>
      </div>
    </div>
  );
};
