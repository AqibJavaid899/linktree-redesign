import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpOnSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { Link } from "../typings";

interface Props {
  link: Link;
}

const Card = ({ link }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHoverToggle = () => {
    setIsHovered(!isHovered);
  };

  return (
    <a href={link.url} target="_blank" rel="external">
      <div
        onMouseEnter={() => handleHoverToggle()}
        onMouseLeave={() => handleHoverToggle()}
        className="shadow-md bg-[#f8fafc] flex justify-between items-center mt-4 cursor-pointer rounded-md p-1 transition hover:scale-105"
      >
        <Image
          className="rounded-sm"
          alt="cardImage"
          src={link.image}
          width={44}
          height={44}
        />
        <h2 className="font-semibold">{link.title}</h2>

        <div className="mr-3">
          {isHovered ? (
            <ArrowUpOnSquareIcon className="h-6 w-6" />
          ) : (
            <ChevronDownIcon className="h-4 w-4" />
          )}
        </div>
      </div>
    </a>
  );
};

export default Card;
