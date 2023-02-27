import { useCallback, useMemo, useState } from "react";

import Podcast from "../repositories/PodcastsRepository/types/Podcast";

import verifyIfStringContainQuery from "../matchers/verifyIfStringContainQuery";

interface UseSearchFilterReturn {
  filteredPodcasts: Podcast[];
  onChangeQuery: (newQuery: string) => void;
}

const useSearchFilter = (podcasts: Podcast[]): UseSearchFilterReturn => {
  const [query, setQuery] = useState<string>("");

  const filteredPodcasts = useMemo(
    () =>
      podcasts.filter((podcast) => {
        const queryMatchesWithTitle = verifyIfStringContainQuery(podcast["im:name"].label, query);
        const queryMatchesWithAuthor = verifyIfStringContainQuery(podcast["im:artist"].label, query);

        return queryMatchesWithTitle || queryMatchesWithAuthor;
      }),
    [podcasts, query]
  );

  const onChangeQuery = useCallback((newQuery: string) => setQuery(newQuery), []);

  return { filteredPodcasts, onChangeQuery };
};

export default useSearchFilter;
