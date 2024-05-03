import cn, { ClassValue } from "@/utils/cn";
import React, { FC } from "react";

type Props = {
    className?: ClassValue;
    wait: number;
};

const ServerWait: FC<Props> = async ({ className = "", wait }) => {
    const fetchData = async () => {
        const url = `http://localhost:5050/api/wait?wait=${wait}`;

        const res: string = await (
            await fetch(url, {
                cache: "no-store",
            })
        ).json();
        return res;
    };

    const data = await fetchData();

    return (
        <div className={cn("border p-2", className)}>
            <div className="">async</div>
            <div className="">{JSON.stringify(data)}</div>
        </div>
    );
};

export default ServerWait;
