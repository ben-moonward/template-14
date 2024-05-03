import LibraryService from "@/services/library-service";
import {
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import React, { FC, Suspense } from "react";
import ClientPrefetchedList from "./client-side";

type Props = {};

const PrefetchedList: FC<Props> = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
        queryKey: ["list"],
        queryFn: () => {
            return LibraryService.getLibrary({ page: 1 });
        },
        getNextPageParam() {
            return undefined;
        },
        initialPageParam: 1,
    });

    return (
        <Suspense>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <ClientPrefetchedList />
            </HydrationBoundary>
        </Suspense>
    );
};

export default PrefetchedList;
