// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 811 566"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".7"}
        d={
          "M547.048 11.79s-133.693-38.032-264.99 22.517C150.761 94.857 84.67 215.026 27.817 311.29c-56.853 96.263-24.137 194.137 76.041 238.838 100.179 44.7 168.302-21.17 308.837-24.365 140.535-3.195 178.322 12.863 294.945-50.645 116.624-63.509 137.687-213.487 45.705-324.461C661.362 39.683 547.048 11.791 547.048 11.791z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
