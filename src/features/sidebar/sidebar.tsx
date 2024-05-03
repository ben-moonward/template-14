import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC } from "react";

type Props = {
    className?: ClassValue;
};

const Sidebar: FC<Props> = ({ className = "" }) => {
    return (
        <nav className={cn("h-full border-r overflow-y-hidden", className)}>
            <div className="text-center">Title</div>
            <div className="h-full flex flex-col divide-y gap-4 overflow-y-auto">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            className="p-4 flex items-center justify-center"
                            key={i}
                        >
                            {i}
                        </div>
                    ))}
            </div>
        </nav>
    );
};

export default Sidebar;
