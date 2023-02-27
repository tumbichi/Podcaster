import Rel from "./Rel";
import Type from "./Type";

export default interface LinkAttributes {
  rel: Rel;
  type?: Type;
  href: string;
}
