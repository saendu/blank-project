// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
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
          "M7.652 2.905c-.04-.133-.107-.133-.15 0l-2.2 6.755c-.043.125.035.233.166.233h4.191c.132 0 .206-.108.167-.233L7.652 2.905zm4.722 13.647a.37.37 0 01-.326-.23l-1.383-3.844a.375.375 0 00-.33-.23H4.727a.37.37 0 00-.326.23l-1.383 3.844a.379.379 0 01-.33.23H.17c-.131 0-.202-.104-.156-.23L5.911.23A.384.384 0 016.244 0H9.13a.37.37 0 01.326.234l5.78 16.088c.046.126-.025.23-.16.23h-2.702z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
