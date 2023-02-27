export interface FeedPodcastParsed {
  rss: RSS;
}

export interface RSS {
  $: RSSClass;
  channel: Channel[];
}

export interface RSSClass {
  version: string;
  "xmlns:itunes": string;
  "xmlns:dc": string;
  "xmlns:content": string;
  "xmlns:atom": string;
  "xmlns:media": string;
  "xmlns:feedburner": string;
}

export interface Channel {
  title: string[];
  description: string[];
  generator: string[];
  lastBuildDate: string[];
  copyright: string[];
  language: string[];
  "itunes:subtitle": string[];
  "itunes:explicit": ItunesExplicit[];
  "itunes:author": ItunesAuthor[];
  link: string[];
  "itunes:owner": ItunesOwner[];
  "itunes:image": ItunesImageElement[];
  "itunes:category": ChannelItunesCategory[];
  item: Item[];
}

export interface Item {
  title: string[];
  description: string[];
  guid: string[];
  pubDate: string[];
  link: string[];
  "itunes:explicit": ItunesExplicit[];
  "itunes:duration": string[];
  "dc:creator": ItunesAuthor[];
  "itunes:image": ItunesImageElement[];
  enclosure: EnclosureElement[];
}

export enum ItunesAuthor {
  BarstoolSports = "Barstool Sports",
}

export interface EnclosureElement {
  $: Enclosure;
}

export interface Enclosure {
  url: string;
  length: string;
  type: Type;
}

export enum Type {
  AudioMPEG = "audio/mpeg",
}

export enum ItunesExplicit {
  Yes = "yes",
}

export interface ItunesImageElement {
  $: ItunesImage;
}

export interface ItunesImage {
  href: string;
}

export interface ChannelItunesCategory {
  $: ItunesCategory;
  "itunes:category": ItunesCategoryItunesCategory[];
}

export interface ItunesCategory {
  text: string;
}

export interface ItunesCategoryItunesCategory {
  $: ItunesCategory;
}

export interface ItunesOwner {
  "itunes:name": ItunesAuthor[];
  "itunes:email": string[];
}
