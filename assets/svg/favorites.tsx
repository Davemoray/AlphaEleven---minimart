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
        d="M19.463 3.99398C16.781 2.34898 14.44 3.01198 13.034 4.06798C12.458 4.50098 12.17 4.71798 12 4.71798C11.83 4.71798 11.542 4.50098 10.966 4.06798C9.56 3.01198 7.219 2.34898 4.537 3.99398C1.018 6.15298 0.221996 13.274 8.34 19.284C9.886 20.427 10.659 21 12 21C13.341 21 14.114 20.428 15.66 19.283C23.778 13.275 22.982 6.15298 19.463 3.99398Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default SVGComponent;
