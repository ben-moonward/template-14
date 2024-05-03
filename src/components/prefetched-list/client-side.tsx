"use client";

import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import React, { FC } from "react";
import ListCard from "../list-card";
import { useInfiniteQuery } from "@tanstack/react-query";
import LibraryService from "@/services/library-service";

type Props = {
    className?: ClassValue;
};

const ClientPrefetchedList: FC<Props> = ({ className = "" }) => {
    const { data, fetchNextPage, isLoading, isFetching } = useInfiniteQuery({
        queryKey: ["list"],
        queryFn: ({ pageParam: page }) => LibraryService.getLibrary({ page }),
        getNextPageParam(page, allPages) {
            if (page.length === 5) {
                return allPages.length + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
    });
    const items = data?.pages.flatMap(p => p) ?? [];

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

export default ClientPrefetchedList;
