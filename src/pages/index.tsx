import TopPodcasts from "@/Podcasts/features/TopPodcasts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Podcaster</title>
        <meta name="description" content="podcasts player" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopPodcasts />
      </main>
    </>
  );
}
