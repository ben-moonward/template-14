"use client";

import LibraryService from "@/services/library-service";
import { useInfiniteQuery } from "@tanstack/react-query";

function useGetList() {
    const query = useInfiniteQuery({
        queryKey: ["list"],
        queryFn: ({ pageParam: page }) => LibraryService.getLibrary({ page }),
        getNextPageParam(page, allPages) {
            if (page.length === 5) {
                return allPages.length + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
        enabled: false,
    });

    return { ...query, items: query.data?.pages.flatMap(p => p) ?? [] };
}

export default useGetList;
