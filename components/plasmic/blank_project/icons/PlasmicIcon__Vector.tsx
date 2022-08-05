// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 17"}
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
          "M15.705 16.552a.273.273 0 01-.266-.248l-.96-12.877c-.004-.14-.04-.144-.075-.011l-4.017 12.902a.363.363 0 01-.32.234H8.04a.361.361 0 01-.315-.238L3.887 3.322c-.035-.133-.07-.129-.078.008L2.82 16.304a.27.27 0 01-.262.248H.22a.22.22 0 01-.22-.248L1.63.248A.28.28 0 011.899 0h3.357c.135 0 .28.104.32.237L9.07 12.22c.036.133.089.133.12 0L12.69.238A.348.348 0 0113.008 0h3.482a.28.28 0 01.27.248l1.563 16.056a.22.22 0 01-.22.248h-2.397z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
