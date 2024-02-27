import Testpage from "@/sub-pages/testpage";

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
      <div className="">page</div>
      <div className="">
        <Testpage items={items} />
      </div>
    </main>
  );
}
