// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
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
        d={
          "M7.66 2.905c-.042-.133-.113-.133-.152 0L5.303 9.66c-.043.125.035.233.17.233h4.19c.128 0 .203-.108.164-.233L7.66 2.905zm4.716 13.647a.379.379 0 01-.33-.23l-1.379-3.844a.378.378 0 00-.326-.23h-5.62a.355.355 0 00-.316.23l-1.393 3.844a.373.373 0 01-.32.23H.176c-.134 0-.205-.104-.163-.23L5.92.23A.382.382 0 016.242 0h2.893c.135 0 .284.104.33.234l5.77 16.088c.045.126-.03.23-.157.23h-2.702z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
