import React, { type FC } from "react";

interface IconProps {
  id: string;
  className?: string;
}

export const Icon: FC<IconProps> = ({ id, className }): JSX.Element => {
  return (
    <svg className={className}>
      <use href={"/icons/icons.svg" + "#icon-" + id}></use>
    </svg>
  );
};
