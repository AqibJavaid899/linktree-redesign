import Card from "./Card";
import data from "../data.json";
import { Link } from "../typings";

type Props = {};

const Cards = (props: Props) => {
  return (
    <main className="mt-6 flex flex-col max-w-3xl mx-auto px-4">
      {data.links.map((link: Link) => (
        <Card link={link} />
      ))}
    </main>
  );
};

export default Cards;
