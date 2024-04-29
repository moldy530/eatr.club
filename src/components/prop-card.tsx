import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PropsWithChildren, ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

interface Props {
  header: string | ReactNode;
  description: string | ReactNode;
  image: string;
}

export const PropCard = ({ header, description, image }: Props) => {
  return (
    <div className="absolute flex h-[760px] flex-col items-center gap-8 rounded-tr-[50px] bg-white p-4 pb-[96px] pt-[72px] text-center shadow-prop-card">
      <h3 className="font-extrabold">{header}</h3>
      <p className="font-normal">{description}</p>
      <img src={image} width={214}></img>
    </div>
  );
};

export const PropContainer = ({ children }: PropsWithChildren) => {
  const container = useRef<HTMLDivElement>(null);
  const delayMult = 1.25;

  useGSAP(
    () => {
      if (!container.current) return;
      const page = document.querySelector("main");
      const childNodes = container.current?.querySelectorAll(":scope > div");
      childNodes?.forEach((node, idx) => {
        if (idx === 0) return;
        const lastSibling = childNodes.item(idx - 1);
        gsap.fromTo(
          node,
          {
            y: 760 * delayMult,
          },
          {
            y: 0,
            scrollTrigger: {
              snap: {
                snapTo: 1,
                delay: 0.125,
                duration: { min: 0.25, max: 0.5 },
                ease: "power1.out",
              },
              trigger: lastSibling,
              start: "bottom bottom",
              end: () => `+=${node.getBoundingClientRect().height * delayMult}`,
              scrub: true,
              // will recalculate any function-based tween values on resize/refresh (making it responsive)
              invalidateOnRefresh: true,
            },
          },
        );
      });

      ScrollTrigger.create({
        trigger: container.current,
        pin: page,
        start: "bottom bottom",
        end: () =>
          `+=${Array.from(childNodes.values()).reduce(
            (accum, curr, idx) =>
              idx > 0
                ? accum + curr.getBoundingClientRect().height * delayMult
                : accum,
            0,
          )}`,
      });
    },
    { scope: container },
  );

  return (
    <div className="relative h-[760px]" ref={container}>
      {children}
    </div>
  );
};
