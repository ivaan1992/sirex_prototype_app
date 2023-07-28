import Head from "next/head";
import Header from "~/components/Header";

export default function Home() {

  return (
    <>
      <Header />
      <Head>
        <title>
            Sirex HomePage
        </title>
      </Head>
      <h1 className="text-3xl font-bold underline">
         Hello world!
      </h1>
    </>
  );
}
