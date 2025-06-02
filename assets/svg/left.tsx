import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props: any) => (
  <Svg
    width={5}
    height={8}
    viewBox="0 0 5 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.25 0.75L0.75 4L4.25 7.25"
      stroke="#64748B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
