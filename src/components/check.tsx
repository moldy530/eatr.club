import { SVGProps, forwardRef } from "react";
import { JSX } from "react/jsx-runtime";

// eslint-disable-next-line react/display-name
const CheckMark = forwardRef<
  SVGSVGElement,
  JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={43}
    fill="none"
    {...props}
    ref={ref}
  >
    <path
      fill="#086E2B"
      d="M39.489.83a6.58 6.58 0 0 0-8.954 2.558L18.313 25.383l-6.994-6.995a6.583 6.583 0 1 0-9.31 9.309l13.168 13.167a6.573 6.573 0 0 0 4.654 1.932l.912-.066a6.583 6.583 0 0 0 4.842-3.321L42.043 9.784A6.584 6.584 0 0 0 39.49.83Z"
    />
  </svg>
));

export default CheckMark;
