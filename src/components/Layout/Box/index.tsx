import { ComponentProps } from "react";

export type BoxProps = ComponentProps<"div">;

export const Box = ({ ref, ...props }: BoxProps) => (
  <div ref={ref} {...props} />
);
