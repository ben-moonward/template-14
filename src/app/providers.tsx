"use client";
import React, { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
    children: ReactNode;
};

const Providers: FC<Props> = ({ children }) => {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default Providers;
