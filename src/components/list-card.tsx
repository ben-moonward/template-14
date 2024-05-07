import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC } from "react";

type Props = {
    className?: ClassValue;
    name: string;
    description?: string;
};

const ListCard: FC<Props> = ({ className = "", name, description }) => {
    return (
        <div className={cn("text-gray-600 border p-2", className)}>
            <p className="font-bold">{name}</p>
            <p>{description}</p>
        </div>
    );
};

export default ListCard;
