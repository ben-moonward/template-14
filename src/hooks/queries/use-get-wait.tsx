"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

function useGetWait(props: { wait: number }) {
    console.log(`get wait render `);
    const query = useSuspenseQuery({
        queryKey: ["wait", props.wait],
        queryFn: async () => {
            console.log(`querying`);
            const url = `http://localhost:5050/api/wait?wait=${props.wait}`;

            const res: string = await (
                await fetch(url, {
                    cache: "no-store",
                })
            ).json();
            return res;
        },
        staleTime: 1000,
    });

    return [query.data as string, query] as const;
}

export default useGetWait;
