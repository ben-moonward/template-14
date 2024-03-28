import Testpage from "@/features/home/testpage";

const items = [
  {
    label: "lol",
    data: "lol",
  },
  {
    label: "ppl",
    data: "ppl",
  },
  {
    label: "lol",
    data: "lol",
  },
  {
    label: "ppl",
    data: "ppl",
  },
  {
    label: "lol",
    data: "lol",
  },
  {
    label: "ppl",
    data: "ppl",
  },
  {
    label: "lol",
    data: "lol",
  },
  {
    label: "ppl",
    data: "ppl",
  },
];
export default function Home() {
  return (
    <main className="p-10">
      <div className="line-clamp-3 w-[150px]">
        page page page page page page page page page page page page page page
        page page page page
      </div>
      <div className="">
        <Testpage items={items} />
      </div>
    </main>
  );
}
