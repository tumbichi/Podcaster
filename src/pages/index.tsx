import TopMusicPodcasts from "@/Podcasts/features/TopMusicPodcasts";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function Home() {
  const router = useRouter();

  const navigateToPodcastDetails = useCallback(
    (podcastId: string) => {
      router.push(
        {
          pathname: "/podcast/[id]",
          query: {
            podcastId,
          },
        },
        `/podcast/${podcastId}`,
        { shallow: true }
      );
    },
    [router]
  );

  return (
    <>
      <Head>
        <title>Podcaster</title>
        <meta name="description" content="podcasts player" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopMusicPodcasts navigateToPodcastDetails={navigateToPodcastDetails} />
      </main>
    </>
  );
}
