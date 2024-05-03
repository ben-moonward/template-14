namespace LibraryService {
    export type GetLibraryArgs = {
        page?: number;
    };
    export const getLibrary = async ({
        page = 1,
    }: GetLibraryArgs): Promise<Item[]> => {
        const url = `http://localhost:5050/api/library?page=${page}`;
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
