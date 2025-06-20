import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props: any) => {
  const { color } = props;
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 17C9.832 14.558 14.143 14.443 16.5 17M14.495 9.5C14.495 10.88 13.375 12 11.992 12C11.6634 12.0005 11.3378 11.9363 11.0341 11.8109C10.7303 11.6854 10.4542 11.5014 10.2216 11.2692C9.98908 11.037 9.80457 10.7612 9.67868 10.4576C9.5528 10.1541 9.488 9.82864 9.488 9.5C9.488 8.12 10.608 7 11.992 7C12.3206 6.99961 12.646 7.06398 12.9496 7.18944C13.2533 7.3149 13.5292 7.49899 13.7617 7.73117C13.9942 7.96336 14.1786 8.23909 14.3044 8.5426C14.4302 8.84611 14.495 9.17144 14.495 9.5Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default SVGComponent;
