import Artist from "./Artist";
import Category from "./Category";
import ContentType from "./ContentType";
import ID from "./ID";
import Image from "./Image";
import Label from "./Label";
import Link from "./Link";
import Price from "./Price";
import ReleaseDate from "./ReleaseDate";

export default interface Podcast {
  "im:name": Label;
  "im:image": Image[];
  summary: Label;
  "im:price": Price;
  "im:contentType": ContentType;
  rights?: Label;
  title: Label;
  link: Link;
  id: ID;
  "im:artist": Artist;
  category: Category;
  "im:releaseDate": ReleaseDate;
}
