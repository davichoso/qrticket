import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type QrWhereInput = {
  code?: StringFilter;
  id?: StringFilter;
  test?: StringNullableFilter;
  used?: BooleanFilter;
};
