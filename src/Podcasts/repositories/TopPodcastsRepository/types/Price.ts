import PriceAttributes from "./PriceAttributes";
import PriceLabel from "./PriceLabel";

export default interface Price {
  label: PriceLabel;
  attributes: PriceAttributes;
}
