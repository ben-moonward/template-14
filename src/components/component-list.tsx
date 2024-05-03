"use client";

import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC } from "react";
import ListCard from "./list-card";
import useGetList from "@/hooks/queries/use-get-list";

type Props = {
    className?: ClassValue;
};

const ComponentList: FC<Props> = ({ className = "" }) => {
    const { items, fetchNextPage, isLoading, isFetching } = useGetList();

    console.log("first");

    return (
        <div className={cn("grid grid-cols-2 gap-2", className)}>
            <button
                onClick={() => fetchNextPage()}
                className="border p-2 rounded-lg mb-2 col-span-2"
            >
                next page
            </button>
            {items.map((item, index) => (
                <ListCard
                    key={index}
                    name={item.name}
                    description={item.description}
                />
            ))}
            {isLoading && <div>loading...</div>}
            {isFetching && <div>Fetching...</div>}
        </div>
    );
};

export default ComponentList;
