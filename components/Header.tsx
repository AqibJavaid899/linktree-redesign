import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Image from "next/image";

import data from "../data.json";

type Props = {};

const Header = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const trackScrollbar = () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", trackScrollbar);

    return () => window.removeEventListener("Scroll", trackScrollbar);
  }, []);

  return (
    <main className="sticky mx-auto px-4 md:px-0 top-3 max-w-[50rem]">
      <div
        className={`${
          isScrolled ? "bg-white/40 backdrop-blur-md" : "transparent"
        }   h-[4.5rem] flex justify-between items-center mx-auto rounded-full px-4 transition-all duration-300
      `}
      >
        {isScrolled && (
          <Image
            className="rounded-full"
            src={data.avatar}
            alt={data.name}
            width={48}
            height={48}
          />
        )}

        {isScrolled && (
          <div className="flex gap-x-1.5">
            <h2 className="text-md font-semibold">{data.handler}</h2>
            <Image src="/assets/blueTick.svg" alt="" width={16} height={16} />
          </div>
        )}

        <div
          className={`${
            isScrolled ? "bg-black text-white" : "bg-gray-100 absolute right-3"
          } cursor-pointer opacity-80 p-2 rounded-full hover:opacity-100`}
        >
          <ArrowUpOnSquareIcon className="h-6 w-6" />
        </div>
      </div>
    </main>
  );
};

export default Header;
