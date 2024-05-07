import {
    FetchInfiniteQueryOptions,
    HydrationBoundary,
    QueryClient,
    dehydrate,
} from "@tanstack/react-query";
import React, { FC, ReactNode } from "react";

type Props = { params: FetchInfiniteQueryOptions; children: ReactNode };

const PrefetchWrapper: FC<Props> = async ({ params, children }) => {
    const queryClient = new QueryClient();
    await queryClient.prefetchInfiniteQuery({ ...params });
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
        </HydrationBoundary>
    );
};

export default PrefetchWrapper;
