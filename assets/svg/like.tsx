import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props:any) => (
  <Svg
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.463 0.993977C14.781 -0.651023 12.44 0.0119772 11.034 1.06798C10.458 1.50098 10.17 1.71798 9.99998 1.71798C9.82998 1.71798 9.54198 1.50098 8.96598 1.06798C7.55998 0.0119772 5.21898 -0.651023 2.53698 0.993977C-0.982019 3.15298 -1.77802 10.274 6.33998 16.284C7.88598 17.427 8.65898 18 9.99998 18C11.341 18 12.114 17.428 13.66 16.283C21.778 10.275 20.982 3.15298 17.463 0.993977Z"
      fill="#FF2D55"
    />
  </Svg>
);
export default SVGComponent;
