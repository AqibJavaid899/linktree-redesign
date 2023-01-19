import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  imageUrl: string;
  href: string;
}

const Socials = ({ title, imageUrl, href }: Props) => {
  return (
    <section className="transition duration-200 hover:scale-110 ">
      <a href={href} target="_blank" rel="external">
        <Image alt={title} src={imageUrl} width={32} height={32} />
      </a>
    </section>
  );
};

export default Socials;
