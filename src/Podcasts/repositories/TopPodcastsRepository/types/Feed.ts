import Author from "./Author";
import Label from "./Label";
import Link from "./Link";
import Podcast from "./Podcast";

export interface Feed {
  author: Author;
  entry: Podcast[];
  updated: Label;
  rights: Label;
  title: Label;
  icon: Label;
  link: Link[];
  id: Label;
}
