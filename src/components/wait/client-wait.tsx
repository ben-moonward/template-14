"use client";

import useGetWait from "@/hooks/queries/use-get-wait";
import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC } from "react";

type Props = {
    className?: ClassValue;
    wait: number;
};

const ClientWait: FC<Props> = ({ className = "", wait }) => {
    const [data] = useGetWait({ wait });
    return (
        <div className={cn("border p-2", className)}>
            {JSON.stringify(data)}
        </div>
    );
};

export default ClientWait;
