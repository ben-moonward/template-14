import PrefetchedList from "@/components/prefetched-list";
import ClientPrefetchedList from "@/components/prefetched-list/client-side";
import LibraryService from "@/services/library-service";

export default function Home() {
    const params = {
        queryKey: ["list"],
        queryFn: () => LibraryService.getLibrary({ page: 1 }),
        initialPageParam: 1,
    };
    return (
        <main className="p-10">
            <h1 className="text-4xl">Moonward Components</h1>
            <PrefetchedList params={params}>
                <ClientPrefetchedList />
            </PrefetchedList>
        </main>
    );
}
