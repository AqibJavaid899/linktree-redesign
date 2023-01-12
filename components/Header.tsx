import Image from "next/image";

import data from "../data.json";

type Props = {};

const Header = (props: Props) => {
  return (
    <main className="flex justify-center flex-col items-center">
      <Image
        className="rounded-full mx-auto mt-16"
        alt=""
        src={data.avatar}
        width={96}
        height={96}
      />

      {/* account handler */}
      <div className="flex items-center  mt-4 gap-x-1.5">
        <h2 className="text-xl font-bold">@selenagomez</h2>
        <Image className="" src="/blueTick.svg" alt="" width={18} height={18} />
      </div>
    </main>
  );
};

export default Header;
