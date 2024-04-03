import { cn } from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC } from "react";

type Props = {
  className?: ClassValue;
  prop: unknown;
};

const ActionTest: FC<Props> = ({ className = "", prop }) => {
  return <div className={cn("", className)}></div>;
};

export default ActionTest;
