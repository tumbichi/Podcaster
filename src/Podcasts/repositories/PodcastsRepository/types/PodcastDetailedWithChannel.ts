import { Channel } from "./FeedPodcastParsed";
import PodcastDetailed from "./PodcastDetailed";

export default interface PodcastDetailedWithChannel extends PodcastDetailed {
  channel: Channel;
}
