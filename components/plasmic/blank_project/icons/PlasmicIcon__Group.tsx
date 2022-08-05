// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 27"}
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
          "M10.206 3.247c-.04-.133-.114-.24-.163-.24-.05 0-.125.107-.164.24l-2.808 9.835c-.039.13.043.237.177.237h5.528c.135 0 .217-.108.178-.237l-2.748-9.835zm5.414 18.825a.339.339 0 01-.308-.241l-1.575-5.757a.34.34 0 00-.308-.238H6.5a.354.354 0 00-.312.234L3.111 26.232c-.04.133-.181.252-.316.252H.182c-.135 0-.213-.119-.17-.252L8.23.234A.36.36 0 018.55 0h3.233c.135 0 .277.108.316.234l6.556 21.6c.04.13-.039.238-.17.238H15.62z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
