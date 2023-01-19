import Head from "next/head";

import UserInfo from "../components/UserInfo";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Aqib Javaid Github, Instagram and Twitter Links | Linktree
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/linktree.png" />
      </Head>

      <Header />
      <UserInfo />
      <Cards />
      <Footer />
    </>
  );
}
