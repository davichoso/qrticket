import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type QrWhereInput = {
  code?: StringFilter;
  id?: StringFilter;
  used?: BooleanFilter;
};
