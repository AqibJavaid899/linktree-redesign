import Card from "./Card";
import data from "../data.json";
import { Link } from "../typings";

type Props = {};

const Cards = (props: Props) => {
  return (
    <main className="mt-5 flex flex-col max-w-[44rem] mx-auto px-4">
      {data.links.map((link: Link, key: number) => (
        <Card key={key} link={link} />
      ))}
    </main>
  );
};

export default Cards;
