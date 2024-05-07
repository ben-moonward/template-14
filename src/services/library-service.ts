namespace LibraryService {
    export type GetLibraryArgs = {
        page?: number;
        search?: string;
    };
    export const getLibrary = async ({
        page = 1,
        search,
    }: GetLibraryArgs): Promise<Item[]> => {
        const url = `http://localhost:5050/api/library?page=${page}&search=${search ?? ""}`;
        const res = (await (
            await fetch(url, {
                cache: "no-store",
            })
        ).json()) as Item[];
        return res;
    };
}

export default LibraryService;

type Item = {
    name: string;
    description: string;
};
